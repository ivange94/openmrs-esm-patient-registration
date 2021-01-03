import React, { useEffect, useState } from 'react';
import styles from '../field.scss';
import { Input } from '../../input/basic-input/input/input.component';
import { getAddressTemplate } from '../../patient-registration.resource';

export const AddressField: React.FC = () => {
  const [addressFields, setAddressFields] = useState([]);
  const [addressTemplate, setAddressTemplate] = useState('');

  useEffect(() => {
    const abortController = new AbortController();
    getAddressTemplate(abortController).then(({ data }) => {
      setAddressTemplate(data.results[0].value);
    });
  }, []);

  useEffect(() => {
    const templateXmlDoc = parseString(addressTemplate);
    const nameMappings = getTagAsDocument('nameMappings', templateXmlDoc);
    const elementDefaults = getTagAsDocument('elementdefaults', templateXmlDoc);
    const properties = nameMappings.getElementsByTagName('property');
    const propertiesObj = Array.prototype.map.call(properties, (property: Element) => {
      const name = property.getAttribute('name');
      const labelText = property.getAttribute('value');
      const value = getFieldValue(name, elementDefaults);
      return {
        id: name,
        name,
        labelText,
        value,
      };
    });
    setAddressFields(propertiesObj);
  }, [addressTemplate]);

  const parseString = (xmlDockAsString: string) => new DOMParser().parseFromString(xmlDockAsString, 'text/xml');

  const getTagAsDocument = (tagName: string, template: XMLDocument) => {
    const tmp = template.getElementsByTagName(tagName)[0];
    return tmp ? parseString(tmp.outerHTML) : parseString('');
  };

  const getFieldValue = (field: string, doc: XMLDocument) => {
    const fieldElement = doc.getElementsByTagName(field)[0];
    return fieldElement ? fieldElement.getAttribute('value') : null;
  };
  return (
    <div>
      <h4 className={styles.productiveHeading02Light}>Address 1</h4>
      {addressFields.map(attributes => (
        <Input key={attributes.name} {...attributes} light />
      ))}
    </div>
  );
};
