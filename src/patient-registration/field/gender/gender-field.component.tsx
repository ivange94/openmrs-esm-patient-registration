import React from 'react';

export const GenderField = () => (
  <div>
    <h4>Sex &amp; Birth</h4>
    <div>
      <p>Sex</p>
      <input type="radio" id="male" name="gender" value="Male" />
      <label htmlFor="male">Male</label>
      <br />
      <input type="radio" id="female" name="gender" value="Female" />
      <label htmlFor="female">Female</label>
      <br />
      <input type="radio" id="other" name="gender" value="Other" />
      <label htmlFor="other">Other</label>
    </div>
    <br />
    <div>
      <p>Birth</p>
      <label htmlFor="dob">Date of Birth</label>
      <br />
      <input type="date" name="dob" id="dob" />
    </div>
  </div>
);
