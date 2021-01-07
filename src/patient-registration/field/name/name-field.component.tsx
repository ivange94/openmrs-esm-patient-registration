import React from 'react';
import { TextInput } from 'carbon-components-react';
import fieldStyles from '../field.scss';
export const NameField = ({ fieldConfigs }) => {
  return (
    <div>
      <p className={fieldStyles.fieldHeader}>Full Name</p>
      <div style={{ marginBottom: '1rem' }}>
        <TextInput id="firstName" name="firstName" labelText="First Name" />
      </div>
      {fieldConfigs.displayMiddleName && (
        <div style={{ marginBottom: '1rem' }}>
          <TextInput id="middleName" name="middleName" labelText="Middle Name" />
        </div>
      )}
      <div style={{ marginBottom: '1rem' }}>
        <TextInput id="additionalFamilyName" name="middleName" labelText="Last Name" />
      </div>
    </div>
  );
};
