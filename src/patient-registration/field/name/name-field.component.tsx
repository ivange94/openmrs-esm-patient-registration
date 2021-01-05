import React from 'react';
import { Input } from '../../input/basic-input/input/input.component';
import styles from './name.scss';

export const NameField = ({ fieldConfigs }) => {
  return (
    <div>
      <span className={styles.FullName}>Full Name</span>
      <label htmlFor="firstName">First Name</label>
      <Input type="text" name="firstName" />
      <label htmlFor="middleName">Middle Name</label>
      <Input type="text" name="middleName" />
      <label htmlFor="additionalFamilyName">Last Name</label>
      <Input type="text" name="additionalFamilyName" />
    </div>
  );
};
