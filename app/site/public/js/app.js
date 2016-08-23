define([
    'underscore',
    'knockout',
    'amplify',
    'storage',
    'responsejs'
], function(_, ko, utils, storage, constants, amplify, responsejs) {
    var language = ko.observable((window.location.hash || '#ru').substring(1));

    language.subscribe(function(newVal) {
        window.location.hash = '#' + newVal;
        window.location.reload();
    });

    var model = {
        labels: {},        
        resources: {},
        language: language
    };

    function initialize(labels, resources) {
        model.labels = labels;
        model.resources = resources;
        ko.applyBindings(model, document.getElementById("htmlTop"));
    }

    function dispose() {}

    require(['translations/' + language(), 'resources/' + language()], initialize);
});