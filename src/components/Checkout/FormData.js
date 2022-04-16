export const FORM_DATA = [
  {
    title: 'Billing Details',
    id: 1,
    content: [
      {
        id: 101,
        type: 'text',
        label: 'Name',
        placeholder: 'Alexei',
        double: false,
      },
      {
        id: 102,
        type: 'email',
        label: 'Email Address',
        placeholder: 'alexei@mail.com',
        double: false,
      },
      {
        id: 103,
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+1 202-555-0136',
        double: false,
      },
    ],
  },
  {
    title: 'Shipping Info',
    id: 2,
    content: [
      {
        id: 201,
        type: 'text',
        label: 'Address',
        placeholder: '1137 Williams Avenue',
        double: true,
      },
      {
        id: 202,
        type: 'text',
        label: 'ZIP Code',
        placeholder: '10001',
        double: false,
      },
      {
        id: 203,
        type: 'text',
        label: 'City',
        placeholder: 'New York',
        double: false,
      },
      {
        id: 204,
        type: 'text',
        label: 'Country',
        placeholder: 'United States',
        double: false,
      },
    ],
  },
];

export const FORM_DATA_RADIO = [
  {
    id: 1,
    title: 'Payment Details',
    content: [
      {
        id: 101,
        type: 'radio',
        name: 'payment',
        value: 'e-Money',
      },
      {
        id: 102,
        type: 'radio',
        name: 'payment',
        value: 'Cash on Delivery',
      },
    ],
  },
];
