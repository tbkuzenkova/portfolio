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
            logo: 'HTML',
            model: 'Model',
            source: 'Layout'
        },
        menu: {
            about: 'About',
            examples: 'Portfolio',
            makeOrder: 'Make order'
        },
        about: {
            title: 'Shalaeva - About me'
        },
        order: {
            title: 'Shalaeva - Make order',
            emailLabel: 'Email:',
            fileUploadLabel: 'Upload model-file (.psd):',
            messageLabel: 'Your message:',
            submitLabel: 'Send',
            makelabel: "Please send me email with job description. I will answer you as soon as possible. Thank you!"
        }
    };
});