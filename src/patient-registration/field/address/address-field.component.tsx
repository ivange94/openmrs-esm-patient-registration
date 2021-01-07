import React from 'react';
import { TextInput, Button } from 'carbon-components-react';
import fieldStyles from '../field.scss';

export const AddressField = () => (
  <div>
    <p className={fieldStyles.fieldHeader}>Address 1</p>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="addressline1" name="addressline1" labelText="Address Line 1" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="addressline2" name="addressline2" labelText="Address Line 2" />
    </div>
    <Button kind="ghost">Add Address Line</Button>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="town" name="town" labelText="Town" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="region" name="region" labelText="Region" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="postcode" name="postcode" labelText="Post Code" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="county" name="county" labelText="County" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="country" name="country" labelText="Country" />
    </div>
    <p className={fieldStyles.fieldHeader}>Phone, Email, etc.</p>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="phone" name="phone" labelText="Phone number(optional)" />
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <TextInput id="email" name="email" type="email" labelText="Email" />
    </div>
  </div>
);
