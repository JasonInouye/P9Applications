namespace Planet9Applications;

using { cuid, managed } from '@sap/cds/common';

@assert.unique: { carrierID: [carrierID] }
entity Carriers : cuid, managed {
  carrierID: String(50) @mandatory;
  carrierName: String(100);
  phone: String(20);
  email: String(100);
  password: String(100);
  numDrivers: Integer;
  maxDrivers: Integer;
  numUsers: Integer;
  maxUsers: Integer;
  adminUser: Association to Users;
  users: Association to many Users on users.carrierID = carrierID;
}

@assert.unique: { userID: [userID] }
entity Users : cuid, managed {
  userID: String(50) @mandatory;
  userName: String(100);
  email: String(100);
  phone: String(20);
  password: String(100);
  isDriver: Boolean;
  isUser: Boolean;
  carrierID : String(50);
  carrier : Association to Carriers on carrier.carrierID = carrierID;
}

@assert.unique: { terminalID: [terminalID] }
entity Locations : cuid, managed {
  terminalID: String(50) @mandatory;
  tcn: String(50);
  name: String(100);
  houseNumber: String(10);
  streetAddress: String(100);
  city: String(50);
  state: String(50);
  postalCode: String(20);
  latitude: Decimal(9,6);
  longitude: Decimal(9,6);
  timeZone: String(50);
  tcnDisplay: String(50);
}

@assert.unique: { orderID: [orderID] }
entity ArchivedOrders : cuid, managed {
  orderID: String(50) @mandatory;
  siteID: String(50);
  terminalID: String(50);
  tcn: String(50);
  startDelivery: DateTime;
  endDelivery: DateTime;
  orderStatus: String(50);
}

