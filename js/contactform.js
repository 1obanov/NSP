if ($(".ajax-contact-form").length) {
    $(".ajax-contact-form").each(function () {
        $(this).validate({
            errorClass: "error wobble-error",
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                }
            },
            messages: {
                name: "Пожалуйста введите Ваше имя и фамилию",
                email: {
                    required: "Пожалуйста введите Ваш e-mail",
                    email: "Адрес должен быть вида имя@домен.com"
                },
                phone: {
                    required: "Пожалуйста введите Ваш номер телефона"
                }
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "contact.php",
                    data: $(form).serialize(),
                    success: function (msg) {
                        if (msg == 'OK') {
                            result = '<div class="registration__success upper">Ваша бронь принята!</div> <div class="registration__txt">Наш менеджер по продажам билетов свяжется с Вами в ближайшее время, чтобы уточнить все детали.</div>';
                            $(".registration__fields").hide();
                        } else {
                            result = msg;
                        }
                        $('.registration__note').html(result);
                    }
                });
            }
        });
    });
}