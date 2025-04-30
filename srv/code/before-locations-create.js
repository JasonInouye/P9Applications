/**
 * The custom logic checks if the tcnDisplay field is empty during Location creation and automatically generates a default value by uppercasing the tcn value.
 * @Before(event = { "CREATE" }, entity = "planet9ApplicationsSrv.Locations")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 */
module.exports = async function(request) {
    const { data } = request;
    
    if (data && !data.tcnDisplay && data.tcn) {
        data.tcnDisplay = data.tcn.toUpperCase();
    }
}
