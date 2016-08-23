define([
    'underscore',
    'knockout',
    'amplify',
    'responsejs'
], function(_, ko, utils, storage, constants, amplify, responsejs) {
    var model = {
        main: {
        },
        menu: {
        },
        about: {
            content: ko.observable(),
        }
    };
    
    require(['text!resources/ru/about.html'], function initialize(aboutContent) {
        model.about.content(aboutContent);
    });
    
    return model;
});