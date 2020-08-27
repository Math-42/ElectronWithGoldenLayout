const $ = window.$ = window.jQuery =  require('jquery')

const GoldenLayout = require('golden-layout');

let goldenLyout = new GoldenLayout({
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: 'test_component'
        }, {
            type: 'component',
            componentName: 'test_component'
        }, {
            type: 'component',
            componentName: 'test_component'
        }, {
            type: 'component',
            componentName: 'test_component'
        }]
    }]
});

goldenLyout.registerComponent('test_component', function (container, state) {
    container.getElement().html('<h2>' + "Hi" + '</h2>');
});



goldenLyout.init();