import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormValues } from '../../patient-registration.component';
import styles from './../section.scss';
import { useField } from 'formik';
import { NameField } from '../../field/name/name-field.component';
import { GenderField } from '../../field/gender/gender-field.component';
import { IdField } from '../../field/id/id-field.component';
import { PatientIdentifierType } from '../../patient-registration-helper';

interface DemographicsSectionProps {
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  values: FormValues;
  fields: Array<string>;
  fieldConfigs: any;
  identifierTypes: PatientIdentifierType[];
  validationSchema: any;
  inEditMode: boolean;
  setValidationSchema(value: any): void;
}

export const DemographicsSection: React.FC<DemographicsSectionProps> = ({
  setFieldValue,
  values,
  fields,
  fieldConfigs,
  identifierTypes,
  validationSchema,
  inEditMode,
  setValidationSchema,
}) => {
  const { t } = useTranslation();
  const [field, meta] = useField('addNameInLocalLanguage');

  useEffect(() => {
    if (!field.value && meta.touched) {
      setFieldValue('additionalGivenName', '');
      setFieldValue('additionalMiddleName', '');
      setFieldValue('additionalFamilyName', '');
    }
  }, [field.value, meta.touched]);
  return (
    <section className={styles.formSection} aria-label="Demographics Section">
      {fields.map(field => {
        switch (field) {
          case 'name':
            return (
              <section className={styles.fieldGroup}>
                <NameField fieldConfigs={fieldConfigs[field]} />
              </section>
            );
          case 'gender':
            return (
              <section className={styles.fieldGroup}>
                <GenderField />
              </section>
            );
          case 'id':
            return (
              <section className={styles.fieldGroup}>
                <IdField
                  identifierTypes={identifierTypes}
                  validationSchema={validationSchema}
                  setValidationSchema={setValidationSchema}
                  inEditMode
                  values={values}
                />
              </section>
            );
        }
      })}
    </section>
  );
};
