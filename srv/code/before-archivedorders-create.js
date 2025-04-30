/**
 * The custom logic validates that the startDelivery datetime occurs before the endDelivery datetime and checks if the tcn field matches an existing tcn in the Locations entity when a new ArchivedOrder is created.
 * @Before(event = { "CREATE" }, entity = "planet9ApplicationsSrv.ArchivedOrders")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
  const { Locations } = cds.entities;
  const { startDelivery, endDelivery, tcn } = request.data;

  // Validate that startDelivery occurs before endDelivery
  if (startDelivery && endDelivery && new Date(startDelivery) >= new Date(endDelivery)) {
    request.error(400, 'Start delivery datetime must occur before end delivery datetime.');
  }

  // Check if the tcn field matches an existing tcn in the Locations entity
  if (tcn) {
    const location = await SELECT.one.from(Locations).where({ tcn });
    if (!location) {
      request.error(400, 'The provided TCN does not match any existing location.');
    }
  }
};
