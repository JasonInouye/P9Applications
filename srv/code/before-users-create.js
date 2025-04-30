/**
 * The custom logic ensures that the carrierID field in Users matches an existing Carrier's carrierID and increments the numDrivers or numUsers field in the associated Carrier based on the isDriver and isUser fields when a new User is created.
 * @Before(event = { "CREATE" }, entity = "planet9ApplicationsSrv.Users")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
  const { Carriers } = cds.entities;
  const { carrierID, isDriver, isUser } = request.data;

  // Check if carrierID is provided
  if (!carrierID) {
    request.error(400, 'Carrier ID is mandatory');
    return;
  }

  // Fetch the carrier with the given carrierID
  const carrier = await SELECT.one.from(Carriers).where({ carrierID });

  // Check if the carrier exists
  if (!carrier) {
    request.error(400, `Carrier with ID ${carrierID} does not exist`);
    return;
  }

  // Prepare the update object
  const updateData = {};
  if (isDriver) {
    updateData.numDrivers = (carrier.numDrivers || 0) + 1;
  }
  if (isUser) {
    updateData.numUsers = (carrier.numUsers || 0) + 1;
  }

  // Update the carrier's numDrivers and/or numUsers
  if (Object.keys(updateData).length > 0) {
    await UPDATE(Carriers).set(updateData).where({ carrierID });
  }
}
