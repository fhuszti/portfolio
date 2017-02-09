$(function() {
    //Manage everything form related
    function formManagement() {
        var nameField = $('#name'),
            emailField = $('#email'),
            messageField = $('#message'),
            submitButton = $('#submitButton');

        //We attach events to inputs so help-blocks show when needed
        helpBlockEvents(nameField, emailField, messageField);

        //We initiate booleans checking each input's status
        //Button available once they're all true
        var inputsStatus = {'name': false,
                            'email': false,
                            'message': false
                            };

        //and we attach events to each inputs livechecking their status
        validateInputs(nameField, emailField, messageField, inputsStatus);
    }

    //Tell help-blocks to show/hide when their input gets the focus
    function helpBlockEvents(nameField, emailField, messageField) {
        var nameHelp = $('#nameHelp'),
            emailHelp = $('#emailHelp'),
            messageHelp = $('#messageHelp');

        nameField.on('focus', function() {
            nameHelp.fadeIn();
        });
        nameField.on('blur', function() {
            nameHelp.fadeOut();
        });

        emailField.on('focus', function() {
            emailHelp.fadeIn();
        });
        emailField.on('blur', function() {
            emailHelp.fadeOut();
        });

        messageField.on('focus', function() {
            messageHelp.fadeIn();
        });
        messageField.on('blur', function() {
            messageHelp.hide();
        });
    }

    function validateInputs(nameField, emailField, messageField, inputsStatus) {
        nameField.on('keyup', function() {
            //if the current value of the field is ok
            if (validateName(nameField.val())) {
                inputsStatus.name = true;
                colorBorders(nameField, true);
            }
            else {
                inputsStatus.name = false;
                colorBorders(nameField, false);
            }
        });

        emailField.on('keyup', function() {
            //if the current value of the field is ok
            if (validateEmail(emailField.val())) {
                inputsStatus.email = true;
                colorBorders(emailField, true);
            }
            else {
                inputsStatus.email = false;
                colorBorders(emailField, false);
            }
        });

        messageField.on('keyup', function() {
            //if the current value of the field is ok
            if (validateMessage(messageField.val())) {
                inputsStatus.message = true;
                colorBorders(messageField, true);
            }
            else {
                inputsStatus.message = false;
                colorBorders(messageField, false);
            }
        });
    }

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
        var re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;

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



    //Start it all on DOM load
    formManagement();
});
