import React from 'react';
import styles from '../field.scss';
import { Input } from '../../input/basic-input/input/input.component';

interface AddressFieldProps {
  fields: Array<{ id: string; name: string; labelText: string; defaultValue: string }>;
}

export const AddressField: React.FC<AddressFieldProps> = ({ fields }) => (
  <div>
    <h4 className={styles.productiveHeading02Light}>Address 1</h4>
    {fields.map(attributes => (
      <Input {...attributes} light />
    ))}
  </div>
);
