define([
    'underscore',
    'knockout',
    'amplify',
    'storage',
    'responsejs',
    'tools/menu.builder'
], function(_, ko, utils, amplify, responsejs, menuBuilder) {
    var language = ko.observable((window.location.hash || '#ru').substring(1));

    language.subscribe(function(newVal) {
        window.location.hash = '#' + newVal;
        window.location.reload();
    });

    var model = {
        labels: {},        
        resources: {},
        language: language,
        menu: menuBuilder(language())
    };

    function initialize(labels, resources) {
        model.labels = labels;
        model.resources = resources;

        ko.applyBindings(model, document.getElementById("htmlTop"));
    }

    function dispose() {}

    require(['translations/' + language(), 'resources/' + language()], initialize);
});