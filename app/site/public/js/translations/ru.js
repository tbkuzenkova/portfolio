define([
    'underscore',
    'knockout',
    'amplify',
    'responsejs'
], function(_, ko, utils, storage, constants, amplify, responsejs) {
    var model = {
        main: {
            title: 'Shalaeva - Главная страница',
            logo: 'HTML-верстка',
            model: 'Макет',
            source: 'Верстка'
        },
        menu: {
            about: 'Обо мне',
            examples: 'Примеры работ',
            makeOrder: 'Сделать заказ'
        },
        about: {
            title: 'Shalaeva - Обо мне'
        },
        order: {
            title: 'Shalaeva - Сделать заказ',
            emailLabel: 'Email:',
            fileUploadLabel: 'Загрузите макет (.psd):',
            messageLabel: 'Ваше сообщение:',
            submitLabel: 'Отправить'
        }
    };
    
    return model;
});