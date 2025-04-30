sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'planet9applications.location',
            componentId: 'LocationsObjectPage',
            contextPath: '/Locations'
        },
        CustomPageDefinitions
    );
});