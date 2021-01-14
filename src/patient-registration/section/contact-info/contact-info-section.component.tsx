import React, { useEffect, useState } from 'react';
import { AddressField } from '../../field/address/address-field.component';
import { PhoneField } from '../../field/phone/phone-field.component';
import { EmailField } from '../../field/email/email-field.component';

interface ContactInfoSectionProps {
  addressTemplate?: string;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ addressTemplate }) => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const templateXmlDoc = parseString(addressTemplate);
    const nameMappings = getTagAsDocument('nameMappings', templateXmlDoc);
    const elementDefaults = getTagAsDocument('elementdefaults', templateXmlDoc);
    const properties = nameMappings.getElementsByTagName('property');
    const propertiesObj = Array.prototype.map.call(properties, (property: Element) => {
      const name = property.getAttribute('name');
      const labelText = property.getAttribute('value');
      const defaultValue = getFieldValue(name, elementDefaults);
      return {
        id: name,
        name,
        labelText,
        defaultValue,
      };
    });
    setFields(propertiesObj);
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
    <section aria-label="Contact Info Section">
      <section>
        <AddressField fields={fields} />
      </section>
      <section>
        <PhoneField />
      </section>
      <section>
        <EmailField />
      </section>
    </section>
  );
};
