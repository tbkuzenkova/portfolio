define([
    'require',
    'knockout'
], function (require, ko) {
    'use strict';

    function menuBuilder(language) {

        function combine() {
            return Array.prototype.slice.call(arguments).join('');
        }

        return {
            main: { link: combine('/index.html', '#', language) },
            about: { link: combine('/about.html', '#', language) },
            order: { link: combine('/order.html', '#', language) },
        };
    }

    return menuBuilder;
});