import React from 'react';
import { AddressInput } from '../../input/custom-input/address/address-input.component';
import styles from './../section.scss';
import { AddressField } from '../../field/address/address-field.component';

interface ContactInfoSectionProps {
  addressTemplate?: string;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ addressTemplate }) => {
  return (
    <section className={styles.formSection} aria-label="Contact Info Section">
      <h5 className={`omrs-type-title-5 ${styles.formSectionTitle}`}>Contact Info</h5>
      <section className={styles.fieldGroup}>
        <AddressField />
      </section>
    </section>
  );
};
