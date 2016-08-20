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
            title: 'Shalaeva - Главная страница'
        },
        menu: {
            about: 'Обо мне',
            examples: 'Примеры работ',
            makeOrder: 'Сделать заказ'
        }
    };
});