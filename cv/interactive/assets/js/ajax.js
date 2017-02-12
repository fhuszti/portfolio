//Execute un appel AJAX en GET
//Prend en paramètres l'URL à appeler et la fonction de callback en cas de réussite
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();

    req.open('GET', url);

    req.addEventListener('load', function(){
        if (req.status >= 200 && req.status < 400)
        //Appelle la fonction callback en lui passant la réponse à la requête
            callback(req.responseText);
        else
            console.error(req.status+' '+req.statusText+' '+url);
    });

    req.addEventListener('error', function(){
        console.error('Error with the URL : '+url);
    });

    req.send(null);
}

//Envoie des données via AJAX en post
//Prend en paramètres l'URL à appeler, le data à transmettre et la fonction de callback
//isJson permet de vérifier le type de données envoyées
function ajaxPost(url, data, callback, isJson){
    var req = new XMLHttpRequest();

    req.open('POST', url);

    req.addEventListener('load', function(){
        if (req.status >= 200 && req.status < 400)
            callback(req.responseText);
        else
            console.error(req.status+' '+req.statusText+' '+url);
    });

    req.addEventListener('error', function(){
        console.error('Error with the URL : '+url);
    });

    if(isJson){
        //Définit le contenu de la requête comme du JSON
        req.setRequestHeader("Content-type", 'application/json');
        //Passe data de JSON à texte
        data = JSON.stringify(data);
    }

    req.send(data);
}
