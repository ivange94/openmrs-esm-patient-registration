import React from 'react';
import { RadioButton, RadioButtonGroup, DatePicker, DatePickerInput } from 'carbon-components-react';

export const GenderField = () => (
  <div>
    <h4>Sex &amp; Birth</h4>
    <div style={{ marginBottom: '1rem' }}>
      <p className="bx--label">Sex</p>
      <RadioButtonGroup name="gender" orientation="vertical">
        <RadioButton id="male" labelText="Male" value="male" />
        <RadioButton id="female" labelText="Female" value="female" />
        <RadioButton id="other" labelText="Other" value="other" />
      </RadioButtonGroup>
    </div>
    <br />
    <div style={{ marginBottom: '1rem' }}>
      <DatePicker dateFormat="m/d/Y" datePickerType="simple">
        <DatePickerInput id="dob" placeholder="mm/dd/yyyy" labelText="Date of Birth" />
      </DatePicker>
    </div>
  </div>
);
