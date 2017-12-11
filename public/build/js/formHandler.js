webpackJsonp([7],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybUhhbmRsZXIuanMiXSwibmFtZXMiOlsiJCIsImNvbG9yQm9yZGVycyIsImZpZWxkIiwidmFsaWQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwidmFsaWRhdGVOYW1lIiwibmFtZSIsInJlIiwidGVzdCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsInZhbGlkYXRlTWVzc2FnZSIsIm1lc3NhZ2UiLCJsaXZlQ2hlY2tJbnB1dHMiLCJpbnB1dE9iamVjdHMiLCJvbiIsInZhbCIsImZvcm1TdWJtaXQiLCJmb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybVJlYWR5IiwiYnV0dG9uIiwicHJvcCIsImhhc0NsYXNzIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRhcmdldCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJkb25lIiwiaGlkZSIsImZhZGVJbiIsImZhaWwiLCJkZWxheSIsImZhZGVPdXQiLCJmb3JtRXJyb3IiLCJmb3JtTWFuYWdlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUFBQSxFQUFFLFlBQVc7QUFDVDtBQUNBLGFBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQztBQUNoQyxZQUFHQSxLQUFILEVBQVU7QUFDTkQsa0JBQU1FLE1BQU4sR0FBZUMsV0FBZixDQUEyQixXQUEzQixFQUF3Q0MsUUFBeEMsQ0FBaUQsYUFBakQ7QUFDSCxTQUZELE1BR0k7QUFDQUosa0JBQU1FLE1BQU4sR0FBZUMsV0FBZixDQUEyQixhQUEzQixFQUEwQ0MsUUFBMUMsQ0FBbUQsV0FBbkQ7QUFDSDtBQUNKOztBQUVELGFBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQ3hCO0FBQ0EsWUFBSUMsS0FBSyxnSEFBVDs7QUFFQSxlQUFPQSxHQUFHQyxJQUFILENBQVFGLElBQVIsQ0FBUDtBQUNI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T0FBeEM7QUFDQWpCLDJCQUFPQSxNQUFQLENBQWMsT0FBZDtBQUNILGlCQWZEO0FBZ0JIO0FBQ0Q7QUF2QkEsaUJBd0JLO0FBQ0Qsd0JBQUlrQixZQUFZMUMsRUFBRSxZQUFGLENBQWhCO0FBQ0EwQyw4QkFBVUosTUFBVixHQUFtQkUsS0FBbkIsQ0FBeUIsSUFBekIsRUFBK0JDLE9BQS9CO0FBQ0FqQiwyQkFBT0EsTUFBUCxDQUFjLE9BQWQ7QUFDSDtBQUNKLFNBakREO0FBa0RIOztBQVFEO0FBQ0EsYUFBU21CLGNBQVQsR0FBMEI7QUFDdEI7QUFDQSxZQUFJM0IsZUFBZSxFQUFDLFFBQVFoQixFQUFFLGlCQUFGLENBQVQ7QUFDQyxxQkFBU0EsRUFBRSxrQkFBRixDQURWO0FBRUMsdUJBQVdBLEVBQUUsb0JBQUY7QUFGWixTQUFuQjs7QUFLQTtBQUNBZSx3QkFBZ0JDLFlBQWhCOztBQUVBO0FBQ0FHLG1CQUFXSCxZQUFYO0FBQ0g7O0FBTUQ7QUFDQTJCO0FBQ0gsQ0ExSkQsRSIsImZpbGUiOiJqcy9mb3JtSGFuZGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICAgLy9jb2xvciB0aGUgZ2l2ZW4gaW5wdXQgYm9yZGVyIGRpZmZlcmVudGx5IGRlcGVuZGluZyBvbiB0aGUgdmFsaWRpdHkgb2YgaXRzIHZhbHVlXG4gICAgZnVuY3Rpb24gY29sb3JCb3JkZXJzKGZpZWxkLCB2YWxpZCnCoHtcbiAgICAgICAgaWYodmFsaWQpIHtcbiAgICAgICAgICAgIGZpZWxkLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKS5hZGRDbGFzcygnaGFzLXN1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZmllbGQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1zdWNjZXNzJykuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcbiAgICAgICAgLy9UaGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGxpc3QgaXNuJ3QgbWluZSBidXQgdGhpcyByZWdleCBpcyBzaW1wbGUgZW5vdWdoLlxuICAgICAgICB2YXIgcmUgPSAvXlthLXpBLVrDoMOhw6LDpMOjw6XEhcSNxIfEmcOow6nDqsOrxJfEr8Osw63DrsOvxYLFhMOyw7PDtMO2w7XDuMO5w7rDu8O8xbPFq8O/w73FvMW6w7HDp8SNxaHFvsOAw4HDgsOEw4PDhcSExIbEjMSWxJjDiMOJw4rDi8OMw43DjsOPxK7FgcWDw5LDk8OUw5bDlcOYw5nDmsObw5zFssWqxbjDncW7xbnDkcOfw4fFksOGxIzFoMW94oiCw7AgLC4nLV17Mix9JC87XG5cbiAgICAgICAgcmV0dXJuIHJlLnRlc3QobmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgICAgICAvL1llcywgSSBrbm93LiBJIGRpZG4ndCB3cml0ZSB0aGlzIHJlZ2V4LiBCdXQgSSBzdHVkaWVkIGl0LiBBbmQgaXQncyBiZWF1dGlmdWwuIFNvIEknbSBrZWVwaW5nIGl0LlxuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblxuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgLy9ZZWFoLCB0aGlzIG9uZSBpcyBtaW5lLiBIb3cgZGlkIHlvdSBndWVzcyA/XG4gICAgICAgIHZhciByZSA9IC9eKC58XFxzKSskL2k7XG5cbiAgICAgICAgcmV0dXJuIHJlLnRlc3QobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLy9hdHRhY2ggYSBsaXZlIGNoZWNraW5nIGV2ZW50IHRvIGV2ZXJ5IGlucHV0XG4gICAgZnVuY3Rpb24gbGl2ZUNoZWNrSW5wdXRzKGlucHV0T2JqZWN0cykge1xuICAgICAgICBpbnB1dE9iamVjdHMubmFtZS5vbigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vaWYgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGZpZWxkIGlzIG9rXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVOYW1lKGlucHV0T2JqZWN0cy5uYW1lLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIGNvbG9yQm9yZGVycyhpbnB1dE9iamVjdHMubmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2xvckJvcmRlcnMoaW5wdXRPYmplY3RzLm5hbWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXRPYmplY3RzLmVtYWlsLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy9pZiB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZmllbGQgaXMgb2tcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0T2JqZWN0cy5lbWFpbC52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBjb2xvckJvcmRlcnMoaW5wdXRPYmplY3RzLmVtYWlsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yQm9yZGVycyhpbnB1dE9iamVjdHMuZW1haWwsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXRPYmplY3RzLm1lc3NhZ2Uub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL2lmIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBmaWVsZCBpcyBva1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlTWVzc2FnZShpbnB1dE9iamVjdHMubWVzc2FnZS52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBjb2xvckJvcmRlcnMoaW5wdXRPYmplY3RzLm1lc3NhZ2UsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sb3JCb3JkZXJzKGlucHV0T2JqZWN0cy5tZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cblxuXG5cblxuICAgIC8vY2hlY2sgaWYgdGhlIGZvcm0gaXMgcmVhZHkgZm9yIHN1Ym1pc3Npb24gYW5kIGRvZXMgc28gaWYgZXZlcnl0aGluZyBpcyBva1xuICAgIGZ1bmN0aW9uIGZvcm1TdWJtaXQoaW5wdXRPYmplY3RzKSB7XG4gICAgICAgIHZhciBmb3JtID0gJCgnI2NvbnRhY3RGb3JtJyk7XG5cbiAgICAgICAgZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvL3dlIGRlZmluZSBhIFwicmVhZHlcIi12YXJpYWJsZSB0aGF0J2xsIGJlIHNldCB0byBmYWxzZSBpZiBhbiBpbnB1dCBoYXMgYW4gZXJyb3JcbiAgICAgICAgICAgIHZhciBmb3JtUmVhZHkgPSB0cnVlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbiA9ICQoJyNzdWJtaXRCdXR0b24nKSxcbiAgICAgICAgICAgICAgICBwcm9wO1xuXG4gICAgICAgICAgICAvL3dlIHNldCB0aGUgYnV0dG9uIHRvIGl0cyBsb2FkaW5nIHN0YXRlXG4gICAgICAgICAgICBidXR0b24uYnV0dG9uKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgIC8vd2UgY2hlY2sgaWYgYW55IGlucHV0IHN0aWxsIGhhcyBhbiBlcnJvclxuICAgICAgICAgICAgLy9pZiB5ZXMsIHdlIHVwZGF0ZSB0aGUgXCJyZWFkeVwiLXZhcmlhYmxlIHRvIHJlZmxlY3QgaXRcbiAgICAgICAgICAgIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdHMpIHtcbiAgICAgICAgICAgICAgICBpZihpbnB1dE9iamVjdHNbcHJvcF0ucGFyZW50KCkuaGFzQ2xhc3MoJ2hhcy1lcnJvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1SZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiBldmVyeXRoaW5nIGlzIGZpbmUsIHdlJ3JlIGdvb2QgdG8gZ29cbiAgICAgICAgICAgIGlmIChmb3JtUmVhZHkpIHtcbiAgICAgICAgICAgICAgICAvL3dlIGZldGNoIHRoZSBkYXRhIHVzaW5nIEZvcm1EYXRhIGFuZCBzZW5kIGl0IGFzIGl0IGlzXG4gICAgICAgICAgICAgICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL3Byb2Nlc3NEYXRhIG5lZWRzIHRvIGJlIHNldCB0byBmYWxzZSB0byBwcmV2ZW50IGpRdWVyeSBmcm9tIHRyeWluZyB0byBjb252ZXJ0IGl0IHRvIHN0cmluZ1xuICAgICAgICAgICAgICAgIC8vY29udGVudFR5cGUgbmVlZHMgdG8gYmUgc2V0IHRvIGZhbHNlIHNvIGpRdWVyeSBkb2Vzbid0IGFkZCBhIENvbnRlbnQtdHlwZSBoZWFkZXIgKG90aGVyd2lzZSBib3VuZGFyeSBzdHJpbmcgd2lsbCBiZSBtaXNzaW5nKVxuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAkKGUudGFyZ2V0KS5kYXRhKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tZ3JvdXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNmb3JtVGhhbmtzJykuZmFkZUluKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NlbmRpbmdFcnJvcicpLmZhZGVJbigpLmRlbGF5KDQwMDApLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmJ1dHRvbigncmVzZXQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZWxzZSB3ZSBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmV3IHNlY29uZHNcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtRXJyb3IgPSAkKCcjZm9ybUVycm9yJyk7XG4gICAgICAgICAgICAgICAgZm9ybUVycm9yLmZhZGVJbigpLmRlbGF5KDQwMDApLmZhZGVPdXQoKTtcbiAgICAgICAgICAgICAgICBidXR0b24uYnV0dG9uKCdyZXNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG5cblxuXG5cbiAgICAvL01hbmFnZSBldmVyeXRoaW5nIGZvcm0gcmVsYXRlZFxuICAgIGZ1bmN0aW9uIGZvcm1NYW5hZ2VtZW50KCkge1xuICAgICAgICAvL0ZvciBlYXN5IGFjY2VzcyB0byBlYWNoIGlucHV0IGZpZWxkXG4gICAgICAgIHZhciBpbnB1dE9iamVjdHMgPSB7J25hbWUnOiAkKCcjYXBwX2VtYWlsX25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiAkKCcjYXBwX2VtYWlsX2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnOiAkKCcjYXBwX2VtYWlsX2NvbnRlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy9XZSBhdHRhY2ggZXZlbnRzIHRvIGVhY2ggaW5wdXRzIGxpdmVjaGVja2luZyB0aGVpciBzdGF0dXNcbiAgICAgICAgbGl2ZUNoZWNrSW5wdXRzKGlucHV0T2JqZWN0cyk7XG5cbiAgICAgICAgLy9hbmQgd2UgbWFuYWdlIHRoZSBmb3JtIG9uIHN1Ym1pc3Npb25cbiAgICAgICAgZm9ybVN1Ym1pdChpbnB1dE9iamVjdHMpO1xuICAgIH1cblxuXG5cblxuXG4gICAgLy9TdGFydCBpdCBhbGwgb24gRE9NIGxvYWRcbiAgICBmb3JtTWFuYWdlbWVudCgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvZm9ybUhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9