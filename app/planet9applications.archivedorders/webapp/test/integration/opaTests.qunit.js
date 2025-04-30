sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'planet9applications/archivedorders/test/integration/FirstJourney',
		'planet9applications/archivedorders/test/integration/pages/ArchivedOrdersList',
		'planet9applications/archivedorders/test/integration/pages/ArchivedOrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, ArchivedOrdersList, ArchivedOrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('planet9applications/archivedorders') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheArchivedOrdersList: ArchivedOrdersList,
					onTheArchivedOrdersObjectPage: ArchivedOrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);