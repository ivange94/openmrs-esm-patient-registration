import React from 'react';
import { TextInput, Button } from 'carbon-components-react';
import fieldStyles from '../field.scss';

export const IdField = () => (
  <div>
    <h4>ID Numbers</h4>
    <TextInput id="identifier" name="identifier" labelText="Preferred ID Number" />
    <Button kind="ghost">Add an ID Number</Button>
  </div>
);
