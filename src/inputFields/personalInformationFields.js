const personalInformationFields = {
  email: {
    isRequired: true,
    label: 'Email address',
    type: 'email',
    placeHolder: 'your@email.com',
  },
  title: {
    isRequired: true,
    label: 'Title',
    placeHolder: 'Nurse',
  },
  forename: {
    isRequired: true,
    label: 'Forename',
    placeHolder: 'John',
    width: 4,
  },
  middleName: {
    isRequired: false,
    label: 'Middle Name',
    placeHolder: 'Smith',
    width: 4,
  },
  surname: {
    isRequired: true,
    label: 'Surname',
    placeHolder: 'Doe',
    width: 4,
  },
  registrationName: {
    isRequired: true,
    label: 'Registration Name',
    placeHolder: 'John',
  },
  insuranceNumber: {
    isRequired: false,
    label: 'Insurance Number',
    placeHolder: 'John S Doe',
  },
  address1: {
    isRequired: true,
    label: 'Address 1',
    placeHolder: 'Address 1...',
    width: 6,
  },
  address2: {
    isRequired: false,
    label: 'Address 2',
    placeHolder: 'Address 2...',
    width: 6,
  },
  town: {
    isRequired: true,
    label: 'Town / City',
    placeHolder: 'London',
    width: 6,
  },
  postcode: {
    isRequired: false,
    label: 'Postcode / Zip code',
    placeHolder: '12345',
    width: 6,
  },
  country: {
    isRequired: true,
    label: 'Country',
    placeHolder: 'United Kingdom',
  },
  homePhone: {
    isRequired: false,
    label: 'Home Telephone',
    type: 'tel',
    placeHolder: '+44 123 4567890',
    width: 6,
  },
  mobilePhone: {
    isRequired: false,
    label: 'Mobile Telephone',
    type: 'tel',
    placeHolder: '+44 123 4567890',
    width: 6,
  },
  willAcceptTextMessages: {
    isRequired: false,
    label: 'address',
    type: 'radio',
    placeHolder: '',
  },
  preferredPhone: {
    isRequired: false,
    label: 'address',
    type: 'radio',
    placeHolder: '',
  },
};

export default personalInformationFields;
