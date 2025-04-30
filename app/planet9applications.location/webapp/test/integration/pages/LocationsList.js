sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'planet9applications.location',
            componentId: 'LocationsList',
            contextPath: '/Locations'
        },
        CustomPageDefinitions
    );
});