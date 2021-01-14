import React from 'react';
import { RadioButton, RadioButtonGroup, DatePicker, DatePickerInput } from 'carbon-components-react';
import styles from '../field.scss';
import { useField } from 'formik';

export const GenderField = () => {
  const [field, meta] = useField('birthdate');

  return (
    <div>
      <h4 className={styles.productiveHeading02Light}>Sex &amp; Birth</h4>
      <div style={{ marginBottom: '1rem' }}>
        <p className="bx--label">Sex</p>
        <RadioButtonGroup name="gender" orientation="vertical" {...field}>
          <RadioButton id="male" labelText="Male" value="male" />
          <RadioButton id="female" labelText="Female" value="female" />
          <RadioButton id="other" labelText="Other" value="other" />
        </RadioButtonGroup>
      </div>
      <br />
      <div style={{ marginBottom: '1rem' }}>
        <DatePicker dateFormat="d/m/Y" datePickerType="single" light>
          <DatePickerInput
            id="birthdate"
            name="birthdate"
            placeholder="dd/mm/yyyy"
            labelText="Date of Birth"
            {...field}
            invalid={!!(meta.touched && meta.error)}
            invalidText={meta.error}
          />
        </DatePicker>
      </div>
    </div>
  );
};
