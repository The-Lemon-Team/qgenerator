import React, { useCallback, useEffect } from 'react';
import { useFormikContext, Field, FieldProps } from 'formik';
import { Box, Typography, IconButton } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { random } from 'lodash';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';

import { TextField } from '../../../../../common/components';

import styles from './DataField.module.css';
import { DataFieldStatus } from './DataFieldStatus';
import classNames from 'classnames';

interface DataFieldProps {
  name: string;
  value: string | number;
  label: React.ReactElement;
  isLoading?: boolean;
  editable?: boolean;
}

export const DataField: React.FC<DataFieldProps> = ({
  editable,
  name,
  value,
  label,
  isLoading,
}) => {
  const form = useFormikContext();
  const isEditMode = form.status === DataFieldStatus.Edit;
  const setEditMode = useCallback(() => {
    form.setStatus(DataFieldStatus.Edit);
  }, [form]);
  const handleSubmit = useCallback(() => {
    form.submitForm();
  }, [form]);

  useEffect(() => {
    form.registerField(name, {});
    form.setFieldValue(name, value);
  }, [name, value]);

  return (
    <Box>
      {isLoading && <Skeleton width={random(100, 150)} height={24} />}

      {!isLoading && (
        <Field name={name}>
          {({ field }: FieldProps) => (
            <div className={styles.root}>
              {editable && isEditMode ? (
                <TextField {...field} variant="filled" label={name} />
              ) : (
                <Typography>
                  {label}
                  {': '}
                  {field.value}
                </Typography>
              )}

              {editable && !isEditMode && (
                <div className={classNames(styles.editBtn, styles.btnWrapper)}>
                  <IconButton size="small" onClick={setEditMode}>
                    <EditIcon
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </IconButton>
                </div>
              )}

              {editable && isEditMode && (
                <div className={classNames(styles.editBtn, styles.btnWrapper)}>
                  <IconButton
                    size="small"
                    className={styles.confirmBtn}
                    onClick={handleSubmit}
                  >
                    <DoneIcon
                      color="primary"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </IconButton>
                </div>
              )}
            </div>
          )}
        </Field>
      )}
    </Box>
  );
};
