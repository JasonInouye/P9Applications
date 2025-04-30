sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'planet9applications/carriers/test/integration/FirstJourney',
		'planet9applications/carriers/test/integration/pages/CarriersList',
		'planet9applications/carriers/test/integration/pages/CarriersObjectPage',
		'planet9applications/carriers/test/integration/pages/UsersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CarriersList, CarriersObjectPage, UsersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('planet9applications/carriers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCarriersList: CarriersList,
					onTheCarriersObjectPage: CarriersObjectPage,
					onTheUsersObjectPage: UsersObjectPage
                }
            },
            opaJourney.run
        );
    }
);