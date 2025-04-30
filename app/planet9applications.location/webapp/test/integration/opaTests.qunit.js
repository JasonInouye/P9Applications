sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'planet9applications/location/test/integration/FirstJourney',
		'planet9applications/location/test/integration/pages/LocationsList',
		'planet9applications/location/test/integration/pages/LocationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, LocationsList, LocationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('planet9applications/location') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheLocationsList: LocationsList,
					onTheLocationsObjectPage: LocationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);