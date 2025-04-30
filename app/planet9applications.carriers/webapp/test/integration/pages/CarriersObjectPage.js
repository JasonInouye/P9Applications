sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'planet9applications.carriers',
            componentId: 'CarriersObjectPage',
            contextPath: '/Carriers'
        },
        CustomPageDefinitions
    );
});