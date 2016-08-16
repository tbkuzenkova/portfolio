define([
    'underscore',
    'knockout',
    'amplify',
    'storage',
    'responsejs'
], function(_, ko, utils, storage, constants, amplify, responsejs) {
    var language = ko.observable(storage.session.get('lang') || 'ru');

    language.subscribe(function(newVal) {
        storage.session.set('lang', newVal);
        window.location.reload();
    });

    var model = {
        labels: {},
        language: language
    };

    function initialize(labels) {
        model.labels = labels;
        ko.applyBindings(model, document.getElementById("htmlTop"));
    }

    function dispose() {}

    require(['translations/' + language()], function(labels) {
        initialize(labels);
    });
});