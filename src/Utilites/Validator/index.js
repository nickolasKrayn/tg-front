var unhandling = {
    success: false,
    message: 'unhandling error'
};

var validator = {

    email: (email) => {
        var regex = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

        if (email == '' || email == undefined) {
            return {
                success: false,
                message: 'Введите email'
            };
        }

        if (email.length > 255) {
            return {
                success: false,
                message: 'Слишком длинный email'
            };
        }

        if (!regex.test(email)) {
            return {
                success: false,
                message: 'Не верный формат email'
            };
        }

        return {
            success: true
        };
    },

    password: (password) => {
        if (password == undefined || password == null || password == '') {
            return {
                success: false,
                message: 'Введите пароль'
            };
        }

        if (password.length < 6) {
            return {
                success: false,
                message: 'Слишком короткий пароль'
            };
        }

        return {
            success: true
        };
    },

    passwordConfirmation: (pass, confirm) => {
        var passResult = validator.password(pass);

        if (!passResult.success) {
            return passResult;
        }

        if (pass != confirm) {
            return {
                success: false,
                message: 'Пароли не совпадают'
            }
        }

        return {
            success: true
        };
    },

    name: (name) => {
        if (name == '') {
            return {
                success: false,
                message: 'Введите имя'
            };
        }

        if (name.length < 3) {
            return {
                success: false,
                message: 'Слишком короткое имя'
            };
        }

        var regex = /^[a-zA-Zа-яёА-ЯЁ]{2,100}$/;
        if (!regex.test(name)) {
            return {
                success: false,
                message: 'В логине не допускаются спец. символы и цифры'
            }
        }

        return {
            success: true
        };
    },

    phone: (phone) => {
        if (phone == '' || phone == undefined || phone == null) {
            return {
                success: false,
                message: 'Необходимо ввести ваш телефон'
            };
        }
        if (!phone.match(/^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$/)) {
            return {
                success: false,
                message: 'Неподходящий формат телефона'
            };
        }

        return {
            success: true
        }
    }
};

export default validator;