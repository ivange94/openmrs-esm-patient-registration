import React from 'react';

export const AddressField = () => (
  <div>
    <h4>Address Line 1</h4>
    <label htmlFor="addressline1">Address Line 1</label>
    <br />
    <input type="text" name="addressline1" id="addressline1" />
    <br />
    <label htmlFor="addressline2">Address Line 2</label>
    <br />
    <input type="text" name="addressline2" id="addressline2" />
    <br />
    <button>Add Address Line</button>
    <br />
    <label htmlFor="town">Town</label>
    <br />
    <input type="text" name="town" id="town" />
    <br />
    <label htmlFor="Region">Region</label>
    <br />
    <input type="text" name="region" id="region" />
    <br />
    <label htmlFor="postcode">Post Code</label>
    <br />
    <input type="text" name="postcode" id="postcode" />
    <br />
    <label htmlFor="county">County</label>
    <br />
    <input type="text" name="county" id="county" />
    <br />
    <label htmlFor="country">Country</label>
    <br />
    <input type="text" name="country" id="country" />
    <br />
    <h4>Phone, Email, etc.</h4>
    <label htmlFor="phone">Phone number(optional)</label>
    <br />
    <input type="text" id="phone" name="phone" />
    <br />
    <label htmlFor="email">Email</label>
    <br />
    <input type="email" name="email" id="email" />
  </div>
);
