webpackJsonp([8],{

/***/ "./assets/js/formHandler.js":
/*!**********************************!*\
  !*** ./assets/js/formHandler.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
    //color the given input border differently depending on the validity of its value
    function colorBorders(field, valid) {
        if (valid) {
            field.parent().removeClass('has-error').addClass('has-success');
        } else {
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
        inputObjects.name.on('keyup', function () {
            //if the current value of the field is ok
            if (validateName(inputObjects.name.val())) {
                colorBorders(inputObjects.name, true);
            } else {
                colorBorders(inputObjects.name, false);
            }
        });

        inputObjects.email.on('keyup', function () {
            //if the current value of the field is ok
            if (validateEmail(inputObjects.email.val())) {
                colorBorders(inputObjects.email, true);
            } else {
                colorBorders(inputObjects.email, false);
            }
        });

        inputObjects.subject.on('keyup', function () {
            //if the current value of the field is ok
            if (validateName(inputObjects.subject.val())) {
                colorBorders(inputObjects.subject, true);
            } else {
                colorBorders(inputObjects.subject, false);
            }
        });

        inputObjects.message.on('keyup', function () {
            //if the current value of the field is ok
            if (validateMessage(inputObjects.message.val())) {
                colorBorders(inputObjects.message, true);
            } else {
                colorBorders(inputObjects.message, false);
            }
        });
    }

    //check if the form is ready for submission and does so if everything is ok
    function formSubmit(inputObjects) {
        var form = $('#contactForm');

        form.on('submit', function (e) {
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
                if (inputObjects[prop].parent().hasClass('has-error')) {
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
                }).done(function () {
                    $('.form-group').hide();
                    button.hide();
                    $('#formThanks').fadeIn();
                }).fail(function () {
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
        var inputObjects = { 'name': $('#app_email_name'),
            'email': $('#app_email_email'),
            'subject': $('#app_email_subject'),
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/formHandler.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybUhhbmRsZXIuanMiXSwibmFtZXMiOlsiJCIsImNvbG9yQm9yZGVycyIsImZpZWxkIiwidmFsaWQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidmFsaWRhdGVOYW1lIiwibmFtZSIsInJlIiwidGVzdCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInZhbGlkYXRlTWVzc2FnZSIsIm1lc3NhZ2UiLCJsaXZlQ2hlY2tJbnB1dHMiLCJpbnB1dE9iamVjdHMiLCJvbiIsInZhbCIsInN1YmplY3QiLCJmb3JtU3VibWl0IiwiZm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1SZWFkeSIsImJ1dHRvbiIsInByb3AiLCJoYXNDbGFzcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ0YXJnZXQiLCJhamF4IiwidHlwZSIsInVybCIsImRhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiZG9uZSIsImhpZGUiLCJmYWRlSW4iLCJmYWlsIiwiZGVsYXkiLCJmYWRlT3V0IiwiZm9ybUVycm9yIiwiZm9ybU1hbmFnZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5Q0FBQUEsRUFBRSxZQUFXO0FBQ1Q7QUFDQSxhQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDaEMsWUFBR0EsS0FBSCxFQUFVO0FBQ05ELGtCQUFNRSxNQUFOLEdBQWVDLFdBQWYsQ0FBMkIsV0FBM0IsRUFBd0NDLFFBQXhDLENBQWlELGFBQWpEO0FBQ0gsU0FGRCxNQUdJO0FBQ0FKLGtCQUFNRSxNQUFOLEdBQWVDLFdBQWYsQ0FBMkIsYUFBM0IsRUFBMENDLFFBQTFDLENBQW1ELFdBQW5EO0FBQ0g7QUFDSjs7QUFFRCxhQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUN4QjtBQUNBLFlBQUlDLEtBQUssZ0hBQVQ7O0FBRUEsZUFBT0EsR0FBR0MsSUFBSCxDQUFRRixJQUFS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SE8saUNBQWEsS0FKVjtBQUtIQyxpQ0FBYTtBQUxWLGlCQUFQLEVBT0NDLElBUEQsQ0FPTSxZQUFXO0FBQ2JyQyxzQkFBRSxhQUFGLEVBQWlCc0MsSUFBakI7QUFDQWIsMkJBQU9hLElBQVA7QUFDQXRDLHNCQUFFLGFBQUYsRUFBaUJ1QyxNQUFqQjtBQUNILGlCQVhELEVBWUNDLElBWkQsQ0FZTSxZQUFXO0FBQ2J4QyxzQkFBRSxlQUFGLEVBQW1CdUMsTUFBbkIsR0FBNEJFLEtBQTVCLENBQWtDLElBQWxDLEVBQXdDQyxPQUF4QztBQUNBakIsMkJBQU9BLE1BQVAsQ0FBYyxPQUFkO0FBQ0gsaUJBZkQ7QUFnQkg7QUFDRDtBQXZCQSxpQkF3Qks7QUFDRCx3QkFBSWtCLFlBQVkzQyxFQUFFLFlBQUYsQ0FBaEI7QUFDQTJDLDhCQUFVSixNQUFWLEdBQW1CRSxLQUFuQixDQUF5QixJQUF6QixFQUErQkMsT0FBL0I7QUFDQWpCLDJCQUFPQSxNQUFQLENBQWMsT0FBZDtBQUNIO0FBQ0osU0FqREQ7QUFrREg7O0FBUUQ7QUFDQSxhQUFTbUIsY0FBVCxHQUEwQjtBQUN0QjtBQUNBLFlBQUk1QixlQUFlLEVBQUMsUUFBUWhCLEVBQUUsaUJBQUYsQ0FBVDtBQUNDLHFCQUFTQSxFQUFFLGtCQUFGLENBRFY7QUFFQyx1QkFBV0EsRUFBRSxvQkFBRixDQUZaO0FBR0MsdUJBQVdBLEVBQUUsb0JBQUY7QUFIWixTQUFuQjs7QUFNQTtBQUNBZSx3QkFBZ0JDLFlBQWhCOztBQUVBO0FBQ0FJLG1CQUFXSixZQUFYO0FBQ0g7O0FBTUQ7QUFDQTRCO0FBQ0gsQ0FyS0QsRSIsImZpbGUiOiJqcy9mb3JtSGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICAgLy9jb2xvciB0aGUgZ2l2ZW4gaW5wdXQgYm9yZGVyIGRpZmZlcmVudGx5IGRlcGVuZGluZyBvbiB0aGUgdmFsaWRpdHkgb2YgaXRzIHZhbHVlXG4gICAgZnVuY3Rpb24gY29sb3JCb3JkZXJzKGZpZWxkLCB2YWxpZCnCoHtcbiAgICAgICAgaWYodmFsaWQpIHtcbiAgICAgICAgICAgIGZpZWxkLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKS5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZmllbGQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcbiAgICAgICAgLy9UaGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGxpc3QgaXNuJ3QgbWluZSBidXQgdGhpcyByZWdleCBpcyBzaW1wbGUgZW5vdWdoLlxuICAgICAgICB2YXIgcmUgPSAvXlthLXpBLVrDoMOhw6LDpMOjw6XEhcSNxIfEmcOow6nDqsOrxJfEr8Osw63DrsOvxYLFhMOyw7PDtMO2w7XDuMO5w7rDu8O8xbPFq8O/w73FvMW6w7HDp8SNxaHFvsOAw4HDgsOEw4PDhcSExIbEjMSWxJjDiMOJw4rDi8OMw43DjsOPxK7FgcWDw5LDk8OUw5bDlcOYw5nDmsObw5zFssWqxbjDncW7xbnDkcOfw4fFksOGxIzFoMW94oiCw7AgLC4nLV17Mix9JC87XG5cbiAgICAgICAgcmV0dXJuIHJlLnRlc3QobmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgICAgICAvL1llcywgSSBrbm93LiBJIGRpZG4ndCB3cml0ZSB0aGlzIHJlZ2V4LiBCdXQgSSBzdHVkaWVkIGl0LiBBbmQgaXQncyBiZWF1dGlmdWwuIFNvIEknbSBrZWVwaW5nIGl0LlxuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgLy9ZZWFoLCB0aGlzIG9uZSBpcyBtaW5lLiBIb3cgZGlkIHlvdSBndWVzcyA/XG4gICAgICAgIHZhciByZSA9IC9eKC58XFxzKSskL2k7XG5cbiAgICAgICAgcmV0dXJuIHJlLnRlc3QobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy9hdHRhY2ggYSBsaXZlIGNoZWNraW5nIGV2ZW50IHRvIGV2ZXJ5IGlucHV0XG4gICAgZnVuY3Rpb24gbGl2ZUNoZWNrSW5wdXRzKGlucHV0T2JqZWN0cykge1xuICAgICAgICBpbnB1dE9iamVjdHMubmFtZS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vaWYgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGZpZWxkIGlzIG9rXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVOYW1lKGlucHV0T2JqZWN0cy5uYW1lLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yQm9yZGVycyhpbnB1dE9iamVjdHMubmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2xvckJvcmRlcnMoaW5wdXRPYmplY3RzLm5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXRPYmplY3RzLmVtYWlsLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9pZiB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZmllbGQgaXMgb2tcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0T2JqZWN0cy5lbWFpbC52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBjb2xvckJvcmRlcnMoaW5wdXRPYmplY3RzLmVtYWlsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yQm9yZGVycyhpbnB1dE9iamVjdHMuZW1haWwsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXRPYmplY3RzLnN1YmplY3Qub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL2lmIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBmaWVsZCBpcyBva1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlTmFtZShpbnB1dE9iamVjdHMuc3ViamVjdC52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBjb2xvckJvcmRlcnMoaW5wdXRPYmplY3RzLnN1YmplY3QsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3JCb3JkZXJzKGlucHV0T2JqZWN0cy5zdWJqZWN0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0T2JqZWN0cy5tZXNzYWdlLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9pZiB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZmllbGQgaXMgb2tcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZU1lc3NhZ2UoaW5wdXRPYmplY3RzLm1lc3NhZ2UudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgY29sb3JCb3JkZXJzKGlucHV0T2JqZWN0cy5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yQm9yZGVycyhpbnB1dE9iamVjdHMubWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cblxuXG5cbiAgICAvL2NoZWNrIGlmIHRoZSBmb3JtIGlzIHJlYWR5IGZvciBzdWJtaXNzaW9uIGFuZCBkb2VzIHNvIGlmIGV2ZXJ5dGhpbmcgaXMgb2tcbiAgICBmdW5jdGlvbiBmb3JtU3VibWl0KGlucHV0T2JqZWN0cykge1xuICAgICAgICB2YXIgZm9ybSA9ICQoJyNjb250YWN0Rm9ybScpO1xuXG4gICAgICAgIGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy93ZSBkZWZpbmUgYSBcInJlYWR5XCItdmFyaWFibGUgdGhhdCdsbCBiZSBzZXQgdG8gZmFsc2UgaWYgYW4gaW5wdXQgaGFzIGFuIGVycm9yXG4gICAgICAgICAgICB2YXIgZm9ybVJlYWR5ID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b24gPSAkKCcjc3VibWl0QnV0dG9uJyksXG4gICAgICAgICAgICAgICAgcHJvcDtcblxuICAgICAgICAgICAgLy93ZSBzZXQgdGhlIGJ1dHRvbiB0byBpdHMgbG9hZGluZyBzdGF0ZVxuICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbignbG9hZGluZycpO1xuXG4gICAgICAgICAgICAvL3dlIGNoZWNrIGlmIGFueSBpbnB1dCBzdGlsbCBoYXMgYW4gZXJyb3JcbiAgICAgICAgICAgIC8vaWYgeWVzLCB3ZSB1cGRhdGUgdGhlIFwicmVhZHlcIi12YXJpYWJsZSB0byByZWZsZWN0IGl0XG4gICAgICAgICAgICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3RzKSB7XG4gICAgICAgICAgICAgICAgaWYoaW5wdXRPYmplY3RzW3Byb3BdLnBhcmVudCgpLmhhc0NsYXNzKCdoYXMtZXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgZXZlcnl0aGluZyBpcyBmaW5lLCB3ZSdyZSBnb29kIHRvIGdvXG4gICAgICAgICAgICBpZiAoZm9ybVJlYWR5KSB7XG4gICAgICAgICAgICAgICAgLy93ZSBmZXRjaCB0aGUgZGF0YSB1c2luZyBGb3JtRGF0YSBhbmQgc2VuZCBpdCBhcyBpdCBpc1xuICAgICAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9wcm9jZXNzRGF0YSBuZWVkcyB0byBiZSBzZXQgdG8gZmFsc2UgdG8gcHJldmVudCBqUXVlcnkgZnJvbSB0cnlpbmcgdG8gY29udmVydCBpdCB0byBzdHJpbmdcbiAgICAgICAgICAgICAgICAvL2NvbnRlbnRUeXBlIG5lZWRzIHRvIGJlIHNldCB0byBmYWxzZSBzbyBqUXVlcnkgZG9lc24ndCBhZGQgYSBDb250ZW50LXR5cGUgaGVhZGVyIChvdGhlcndpc2UgYm91bmRhcnkgc3RyaW5nIHdpbGwgYmUgbWlzc2luZylcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJChlLnRhcmdldCkuZGF0YSgnYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLWdyb3VwJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKCcjZm9ybVRoYW5rcycpLmZhZGVJbigpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzZW5kaW5nRXJyb3InKS5mYWRlSW4oKS5kZWxheSg0MDAwKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5idXR0b24oJ3Jlc2V0Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2Vsc2Ugd2UgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGZvciBhIGZldyBzZWNvbmRzXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZm9ybUVycm9yID0gJCgnI2Zvcm1FcnJvcicpO1xuICAgICAgICAgICAgICAgIGZvcm1FcnJvci5mYWRlSW4oKS5kZWxheSg0MDAwKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbigncmVzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgLy9NYW5hZ2UgZXZlcnl0aGluZyBmb3JtIHJlbGF0ZWRcbiAgICBmdW5jdGlvbiBmb3JtTWFuYWdlbWVudCgpIHtcbiAgICAgICAgLy9Gb3IgZWFzeSBhY2Nlc3MgdG8gZWFjaCBpbnB1dCBmaWVsZFxuICAgICAgICB2YXIgaW5wdXRPYmplY3RzID0geyduYW1lJzogJCgnI2FwcF9lbWFpbF9uYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJzogJCgnI2FwcF9lbWFpbF9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWJqZWN0JzogJCgnI2FwcF9lbWFpbF9zdWJqZWN0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAkKCcjYXBwX2VtYWlsX2NvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy9XZSBhdHRhY2ggZXZlbnRzIHRvIGVhY2ggaW5wdXRzIGxpdmVjaGVja2luZyB0aGVpciBzdGF0dXNcbiAgICAgICAgbGl2ZUNoZWNrSW5wdXRzKGlucHV0T2JqZWN0cyk7XG5cbiAgICAgICAgLy9hbmQgd2UgbWFuYWdlIHRoZSBmb3JtIG9uIHN1Ym1pc3Npb25cbiAgICAgICAgZm9ybVN1Ym1pdChpbnB1dE9iamVjdHMpO1xuICAgIH1cblxuXG5cblxuXG4gICAgLy9TdGFydCBpdCBhbGwgb24gRE9NIGxvYWRcbiAgICBmb3JtTWFuYWdlbWVudCgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZm9ybUhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9