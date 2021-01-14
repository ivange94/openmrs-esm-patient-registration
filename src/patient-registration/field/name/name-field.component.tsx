import React from 'react';
import styles from '../field.scss';
import { Input } from '../../input/basic-input/input/input.component';

export const NameField = ({ fieldConfigs }) => {
  return (
    <div>
      <h4 className={styles.productiveHeading02Light}>Full Name</h4>
      <Input id="givenName" name="givenName" labelText="Given Name" light />
      {fieldConfigs.displayMiddleName && <Input id="middleName" name="middleName" labelText="Middle Name" light />}
      <Input id="familyName" name="familyName" labelText="Family Name" light />
    </div>
  );
};
