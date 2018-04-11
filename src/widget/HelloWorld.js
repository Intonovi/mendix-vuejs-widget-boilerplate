import declare from 'dojoBaseDeclare';
import widgetBase from 'widgetBase';

import _TemplatedMixin from 'dijitTemplatedMixin';
import template from './template/HelloWorld.html'

import Vue from 'vue';
import App from './App.vue';

declare("HelloWorld.widget.HelloWorld", [widgetBase, _TemplatedMixin], {

    // Dojo uses this to create the template that we can use to attach our Vue app to.
    templateString: template,

    // Here you can add up all the params specified in the xml file.
    // These are all the information that you are passing from the widget itself, from Mendix.
    dummyKey: null,

    constructor: function (params, srcNodeRef) {
        this.domNode = srcNodeRef;
    },

    update: function (obj, cb) {
        // Instantiate "this" to the "vm" variable so we don't need to do the .bind() everywhere.
        // Very useful when you get a hang of it.
        var vm = this;

        /**
         * Instantiate the Vue event bus. You can use the following:
         * VueWidgetEvents.$emit() - to emit the event
         * VueWidgetEvents.$on() - listen to the events
         * 
         * This is necessary so we can send data from Mendix to Vue app.
         */
        window.VueWidgetEvents = new Vue();

        // Instantiate the Vue app and attach it to the ".mxVueWidget" template ('./template/HelloWorld.html')
        new Vue({
            el: '.mxVueWidget',
            render: h => h(App)
        });

        // Emit the event that will send the data from Mendix to your App.vue file / app starting point.
        VueWidgetEvents.$emit('widget-loaded', {
            passedProps: {
                dummyKey: vm.dummyKey
            }
        });
        
        cb();
    },

});
