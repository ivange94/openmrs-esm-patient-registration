import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import { find } from 'lodash';
import { PatientIdentifierType } from '../../../patient-registration-helper';
import * as Yup from 'yup';
import { SelectInput } from '../../basic-input/select/select-input.component';
import { Input } from '../../basic-input/input/input.component';
import { Grid, Row, Column } from 'carbon-components-react';

interface IdentifierInputProps {
  identifierType: PatientIdentifierType;
  validationSchema: Yup.ObjectSchema;
  setValidationSchema(value: any): void;
}

export const IdentifierInput: React.FC<IdentifierInputProps> = ({
  identifierType,
  setValidationSchema,
  validationSchema,
}) => {
  const sources = identifierType.identifierSources;
  const name = identifierType.fieldName;

  const [option, setAutoGenerationOption] = useState({
    manualEntryEnabled: sources.length == 0 ? true : undefined,
    automaticGenerationEnabled: undefined,
  });
  const [selectSourceField] = useField('source-for-' + name);
  const [identifierValidationSchema, setIdentifierValidationSchema] = useState(Yup.object({}));

  useEffect(() => {
    if (sources.length == 1) {
      if (sources[0].autoGenerationOption && sources[0].autoGenerationOption.automaticGenerationEnabled) {
        identifierType.autoGenerationSource = sources[0];
      }
    }
  }, []);

  useEffect(() => {
    let validatorProps = Yup.string();
    if (identifierType.required) {
      validatorProps = validatorProps.required("Identifier can't be blank!");
    }
    if (identifierType.format) {
      validatorProps = validatorProps.matches(new RegExp(identifierType.format), 'Invalid identifier format!');
    }
    let schemaBuilder = {};
    schemaBuilder[identifierType.fieldName] = validatorProps;
    identifierValidationSchema[identifierType.fieldName] = validatorProps;
    setIdentifierValidationSchema(Yup.object(schemaBuilder));
  }, []);

  useEffect(() => {
    if (selectSourceField.value) {
      const selectedSource = find(sources, { name: selectSourceField.value });
      if (selectedSource && selectedSource.autoGenerationOption) {
        setAutoGenerationOption(selectedSource.autoGenerationOption);
        if (selectedSource.autoGenerationOption.automaticGenerationEnabled) {
          identifierType.autoGenerationSource = selectedSource;
          if (validationSchema.fields[identifierType.fieldName]) {
            validationSchema.fields[identifierType.fieldName] = Yup.string();
          }
        } else {
          setValidationSchema(validationSchema.concat(identifierValidationSchema));
        }
      } else {
        setValidationSchema(validationSchema.concat(identifierValidationSchema));
        setAutoGenerationOption({
          manualEntryEnabled: true,
          automaticGenerationEnabled: false,
        });
      }
    }
  }, [selectSourceField.value]);

  return (
    <>
      {sources.length > 1 && (
        <Row>
          <Column lg={1}>
            <SelectInput
              name={'source-for-' + name}
              options={sources.map(source => source.name)}
              label={identifierType.name}
            />
          </Column>
          <Column lg={{ span: 7, offset: 3 }}>
            <Input
              id={name}
              light
              placeholder={
                !option.manualEntryEnabled
                  ? 'Auto-generated'
                  : option.manualEntryEnabled && option.automaticGenerationEnabled
                  ? 'Auto-generated'
                  : 'Enter identifier'
              }
              labelText={sources.length <= 1 ? identifierType.name : ''}
              name={name}
              disabled={!option.manualEntryEnabled}
            />
          </Column>
        </Row>
      )}
    </>
  );
};
