using { Planet9ApplicationsService } from '../srv/service.cds';

annotate Planet9ApplicationsService.Carriers with @UI.HeaderInfo: {
  TypeName: 'Carrier',
  TypeNamePlural: 'Carriers',
  Title: { Value: carrierID }
};

annotate Planet9ApplicationsService.Carriers with {
  ID @UI.Hidden @Common.Text: { $value: carrierID, ![@UI.TextArrangement]: #TextOnly };
  carrierID @title: 'Carrier ID';
  carrierName @title: 'Carrier Name';
  phone @title: 'Phone';
  email @title: 'Email';
  password @title: 'Password';
  numDrivers @title: 'Current Number of Drivers';
  maxDrivers @title: 'Maximum Allowed Drivers';
  numUsers @title: 'Current Number of Users';
  maxUsers @title: 'Maximum Allowed Users';
  createdAt @title: 'Created At';
  createdBy @title: 'Created By';
  modifiedAt @title: 'Modified At';
  modifiedBy @title: 'Modified By';
  adminUser @Common.Text: { $value: adminUser.userID, ![@UI.TextArrangement]: #TextOnly };
  adminUser @Common.Label: 'Admin User';
  users @Common.Label: 'Users';
  users @UI.Hidden: false;
};

annotate Planet9ApplicationsService.Carriers with @UI.LineItem: [
  { $Type: 'UI.DataField', Value: carrierID },
  { $Type: 'UI.DataField', Value: carrierName },
  { $Type: 'UI.DataField', Value: phone },
  { $Type: 'UI.DataField', Value: email },
  { $Type: 'UI.DataField', Value: password },
  { $Type: 'UI.DataField', Value: numDrivers },
  { $Type: 'UI.DataField', Value: maxDrivers },
  { $Type: 'UI.DataField', Value: numUsers },
  { $Type: 'UI.DataField', Value: maxUsers },
  { $Type: 'UI.DataField', Label: 'Admin User', Value: adminUser_ID }
];

annotate Planet9ApplicationsService.Carriers with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType',
  Data: [
    { $Type: 'UI.DataField', Value: carrierID },
    { $Type: 'UI.DataField', Value: carrierName },
    { $Type: 'UI.DataField', Value: phone },
    { $Type: 'UI.DataField', Value: email },
    { $Type: 'UI.DataField', Value: password },
    { $Type: 'UI.DataField', Value: numDrivers },
    { $Type: 'UI.DataField', Value: maxDrivers },
    { $Type: 'UI.DataField', Value: numUsers },
    { $Type: 'UI.DataField', Value: maxUsers },
    { $Type: 'UI.DataField', Value: createdAt },
    { $Type: 'UI.DataField', Value: createdBy },
    { $Type: 'UI.DataField', Value: modifiedAt },
    { $Type: 'UI.DataField', Value: modifiedBy },
    { $Type: 'UI.DataField', Label: 'Admin User', Value: adminUser_ID }
  ]
};

annotate Planet9ApplicationsService.Carriers with @UI.Facets: [
  {
    $Type: 'UI.ReferenceFacet',
    ID: 'Main',
    Label: 'General Information',
    Target: '@UI.FieldGroup#Main'
  },
  {
    $Type: 'UI.ReferenceFacet',
    ID: 'UsersReadOnly',
    Label: 'Users (View Only)',
    Target: 'users/@UI.LineItem'
  }
];

annotate Planet9ApplicationsService.Carriers with @UI.SelectionFields: [
  adminUser_ID
];

annotate Planet9ApplicationsService.Users with @UI.HeaderInfo: {
  TypeName: 'User',
  TypeNamePlural: 'Users',
  Title: { Value: userID }
};

annotate Planet9ApplicationsService.Users with {
  ID @UI.Hidden @Common.Text: { $value: userID, ![@UI.TextArrangement]: #TextOnly };
  userID @title: 'User ID';
  userName @title: 'User Name';
  email @title: 'Email';
  phone @title: 'Phone';
  password @title: 'Password';
  isDriver @title: 'Is Driver';
  isUser @title: 'Is User';
  createdAt @title: 'Created At';
  createdBy @title: 'Created By';
  modifiedAt @title: 'Modified At';
  modifiedBy @title: 'Modified By';
  carrier @Common.Text: { $value: carrier.carrierID, ![@UI.TextArrangement]: #TextOnly };
  carrier @Common.Label: 'Carrier';
};

annotate Planet9ApplicationsService.Users with @UI.LineItem: [
  { $Type: 'UI.DataField', Value: userID },
  { $Type: 'UI.DataField', Value: userName },
  { $Type: 'UI.DataField', Value: email },
  { $Type: 'UI.DataField', Value: phone },
  { $Type: 'UI.DataField', Value: isDriver },
  { $Type: 'UI.DataField', Value: isUser }
];

annotate Planet9ApplicationsService.Users with @UI.SelectionFields: [
  carrierID
];
