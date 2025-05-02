using { Planet9Applications as my } from '../db/schema.cds';

@path: '/service/planet9Applications'
@requires: 'authenticated-user'
service Planet9ApplicationsService {
  @odata.draft.enabled
  entity Carriers as projection on my.Carriers;
  entity Users as projection on my.Users;
  @odata.draft.enabled
  entity Locations as projection on my.Locations;
  @odata.draft.enabled
  entity ArchivedOrders as projection on my.ArchivedOrders;
}
