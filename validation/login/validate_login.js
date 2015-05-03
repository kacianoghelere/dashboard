$(function () {
    $('#login_form').validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                    .addClass(errorClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                    .removeClass(errorClass);
        },
        submitHandler: function () {
            $(this).ajax({
                url: 'validation/login/validate_login.php',
                method: 'POST',
                dataType: 'json',
                beforeSend: function (data) {

                },
                success: function (data) {
                    alert('teste');
                },
                error: function (data) {

                }
            });
        }
    });
});