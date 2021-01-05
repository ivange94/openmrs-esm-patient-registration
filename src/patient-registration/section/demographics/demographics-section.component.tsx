import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FormValues } from '../../patient-registration.component';
import { NameInput } from '../../input/custom-input/name/name-input.component';
import { UnidentifiedPatientInput } from '../../input/custom-input/unidentified-patient/unidentified-patient-input.component';
import { SelectInput } from '../../input/basic-input/select/select-input.component';
import { EstimatedAgeInput } from '../../input/custom-input/estimated-age/estimated-age-input.component';
import { Input } from '../../input/basic-input/input/input.component';
import styles from './../section.scss';
import { useField } from 'formik';
import { NameField } from '../../field/name/name-field.component';
import { GenderField } from '../../field/gender/gender-field.component';
import { IdField } from '../../field/id/id-field.component';

interface DemographicsSectionProps {
  setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
  values: FormValues;
  fields: Array<string>;
  fieldConfigs: any;
}

export const DemographicsSection: React.FC<DemographicsSectionProps> = ({
  setFieldValue,
  values,
  fields,
  fieldConfigs,
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
      <h5 className={`omrs-type-title-5 ${styles.formSectionTitle}`}>{t('demographics', 'Demographics')}</h5>
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
                <IdField />
              </section>
            );
        }
      })}
    </section>
  );
};
