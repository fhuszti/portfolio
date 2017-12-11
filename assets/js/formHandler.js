$(function() {
    //color the given input border differently depending on the validity of its value
    function colorBorders(field, valid) {
        if(valid) {
            field.parent().removeClass('has-error').addClass('has-success');
        }
        else{
            field.parent().removeClass('has-success').addClass('has-error');
        }
    }

    function validateName(name) {
        //The special characters list isn't mine but this regex is simple enough.
        var re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/;

        return re.test(name);
    }

    function validateEmail(email) {
        //Yes, I know. I didn't write this regex. But I studied it. And it's beautiful. So I'm keeping it.
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    function validateMessage(message) {
        //Yeah, this one is mine. How did you guess ?
        var re = /^(.|\s)+$/i;

        return re.test(message);
    }

    //attach a live checking event to every input
    function liveCheckInputs(inputObjects) {
        inputObjects.name.on('keyup', function() {
            //if the current value of the field is ok
            if (validateName(inputObjects.name.val())) {
                colorBorders(inputObjects.name, true);
            }
            else {
                colorBorders(inputObjects.name, false);
            }
        });

        inputObjects.email.on('keyup', function() {
            //if the current value of the field is ok
            if (validateEmail(inputObjects.email.val())) {
                colorBorders(inputObjects.email, true);
            }
            else {
                colorBorders(inputObjects.email, false);
            }
        });

        inputObjects.message.on('keyup', function() {
            //if the current value of the field is ok
            if (validateMessage(inputObjects.message.val())) {
                colorBorders(inputObjects.message, true);
            }
            else {
                colorBorders(inputObjects.message, false);
            }
        });
    }







    //check if the form is ready for submission and does so if everything is ok
    function formSubmit(inputObjects) {
        var form = $('#contactForm');

        form.on('submit', function(e) {
            e.preventDefault();

            //we define a "ready"-variable that'll be set to false if an input has an error
            var formReady = true,
                button = $('#submitButton'),
                prop;

            //we set the button to its loading state
            button.button('loading');

            //we check if any input still has an error
            //if yes, we update the "ready"-variable to reflect it
            for (prop in inputObjects) {
                if(inputObjects[prop].parent().hasClass('has-error')) {
                    formReady = false;
                }
            }

            //if everything is fine, we're good to go
            if (formReady) {
                //we fetch the data using FormData and send it as it is
                var formData = new FormData(e.target);
                
                //processData needs to be set to false to prevent jQuery from trying to convert it to string
                //contentType needs to be set to false so jQuery doesn't add a Content-type header (otherwise boundary string will be missing)
                $.ajax({
                    type: 'POST',
                    url: $(e.target).data('action'),
                    data: formData,
                    processData: false,
                    contentType: false
                })
                .done(function() {
                    $('.form-group').hide();
                    button.hide();
                    $('#formThanks').fadeIn();
                })
                .fail(function() {
                    $('#sendingError').fadeIn().delay(4000).fadeOut();
                    button.button('reset');
                });
            }
            //else we display an error message for a few seconds
            else {
                var formError = $('#formError');
                formError.fadeIn().delay(4000).fadeOut();
                button.button('reset');
            }
        });
    }







    //Manage everything form related
    function formManagement() {
        //For easy access to each input field
        var inputObjects = {'name': $('#app_email_name'),
                            'email': $('#app_email_email'),
                            'message': $('#app_email_content')
                            };

        //We attach events to each inputs livechecking their status
        liveCheckInputs(inputObjects);

        //and we manage the form on submission
        formSubmit(inputObjects);
    }





    //Start it all on DOM load
    formManagement();
});
