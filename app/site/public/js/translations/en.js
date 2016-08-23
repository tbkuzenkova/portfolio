define([
    'underscore',
    'knockout',
    'amplify',
    'responsejs'
], function(_, ko, utils, storage, constants, amplify, responsejs) {
    function initialize(labels) {}

    function dispose() {}

    initialize();

    return {
        main: {
            title: 'Shalaeva - Main page',
            logo: 'HTML-верстка',
            model: 'Макет',
            source: 'Верстка'
        },
        menu: {
            about: 'About',
            examples: 'Portfolio',
            makeOrder: 'Make order'
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
});