const cds = require('@sap/cds');

module.exports = cds.service.impl(function () {
  this.before('CREATE', 'Users', async (req) => {
    if (!req.data.carrier_ID && req.data.carrierID) {
      const tx = cds.tx(req);
      const result = await tx.run(
        SELECT.one.from('Planet9Applications.Carriers').where({ carrierID: req.data.carrierID })
      );

      if (result?.ID) {
        req.data.carrier_ID = result.ID;
        console.log(`Linked User to Carrier: ${result.ID}`);
      } else {
        console.warn('No matching Carrier found for carrierID:', req.data.carrierID);
      }
    }
  });

  this.on('draftActivate', 'Carriers', async (req, next) => {
    const result = await next();
    const tx = cds.tx(req);
    await tx.run(
      UPDATE('Planet9Applications.Users')
        .set({ IsActiveEntity: true })
        .where({ carrier_ID: result.ID, IsActiveEntity: false })
    );
    return result;
  });

  this.after('CREATE', 'Users', async (createdUser, req) => {
    req.reply(createdUser);
  });

  this.after('CREATE', 'Carriers', async (createdCarrier, req) => {
    req.reply(createdCarrier);
  });
});

