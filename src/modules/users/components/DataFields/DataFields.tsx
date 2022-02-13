import React, { createRef, PropsWithChildren, useCallback } from 'react';
import { Formik, FormikProps } from 'formik';

import { Button, ToolWrapper } from '../../../common/components';
import { DataFieldStatus } from './components';

import styles from './DataFields.module.css';

type DataFieldsProps = PropsWithChildren<{
  title: React.ReactElement;
}>;

export const DataFields = <T,>({ children, title }: DataFieldsProps) => {
  const formRef: React.Ref<FormikProps<T>> = createRef();
  const handleSubmit = useCallback(() => {
    formRef?.current?.setStatus(null);
  }, [formRef]);

  return (
    <Formik<T>
      onSubmit={handleSubmit}
      initialValues={{} as T}
      innerRef={formRef}
      enableReinitialize
    >
      {({ handleSubmit, status }) => (
        <ToolWrapper title={title}>
          <>
            <div>
              {React.Children.map(children, (child) => {
                return <div className={styles.field}>{child}</div>;
              })}
            </div>
            {status === DataFieldStatus.Edit && (
              <Button onClick={() => handleSubmit()}>Save</Button>
            )}
          </>
        </ToolWrapper>
      )}
    </Formik>
  );
};
