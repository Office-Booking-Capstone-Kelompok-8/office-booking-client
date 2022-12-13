/* eslint-disable react-hooks/exhaustive-deps */
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { ToastContainer } from 'react-toastify';
import {
  useGetBanksQuery,
  useGetPaymentDetailsQuery,
  useUpdatePaymentsMutation,
} from '../../../store/payments/paymentsApiSlice';
import * as yup from 'yup';
import { useParams } from 'react-router-dom';
import Spinner from '../../../components/admin/Spinner';
import { notifySuccess } from '../../../utils/helpers';

const UpdateSetting = () => {
  const { id } = useParams();
  const { data: banks, isSuccess: successGetBank } = useGetBanksQuery();
  const { data: payments, isLoading } = useGetPaymentDetailsQuery({ id: id });
  const [updatePayment, { isSuccess: successUpdate, error: errorUpdate }] =
    useUpdatePaymentsMutation();

  useEffect(() => {
    if (successGetBank) {
      setBanksOptions(
        banks?.data?.map((bank) => ({ value: bank?.id, label: bank?.name }))
      );
    }
    if (successUpdate) notifySuccess('Payment Updated');
  }, [successGetBank, successUpdate]);

  if (errorUpdate) {
    console.log(errorUpdate);
  }

  // CONFIG FORM
  const initialValues = {
    bank: '',
    accountName: payments?.data?.accountName,
    accountNumber: payments?.data?.accountNumber,
  };

  const validationSchema = yup.object({
    bank: yup.string().required().trim(),
    accountName: yup.string().required().trim(),
    accountNumber: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'number is invalid'),
  });

  const onSubmit = (values) => {
    console.log(values);
    updatePayment({
      buildingID: id,
      bankId: values.bank,
      accountName: values.accountName,
      accountNumber: values.accountNumber,
    });
  };

  const [banksOptions, setBanksOptions] = useState([]);

  if (isLoading) return <Spinner />;
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      {/* Bank * */}
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <Form>
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="text-primary-dark" htmlFor="bank">
                    Bank <span className="text-error">*</span>
                  </label>
                  <Select
                    type="text"
                    id="nameBuilding"
                    className="react-select__control text-sm"
                    placeholder="Choose Bank"
                    options={banksOptions}
                    onChange={(e) => props.setFieldValue('bank', e.value)}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: '1px',
                        borderColor: state.isFocused ? '#3583EF' : '#3583EF',
                      }),
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '10px',
                    })}
                  />
                  <ErrorMessage name="bank">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
                <div className="col-md-6">
                  <label className="text-primary-dark" htmlFor="nobank">
                    Account Number <span className="text-error">*</span>
                  </label>
                  <Field
                    name="accountNumber"
                    type="text"
                    className="input-field"
                    id="number"
                    placeholder="Account Number"
                  />
                  <ErrorMessage name="accountNumber">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              {/* Account Name */}
              <div className="row mb-4">
                <div className="col-md-12 col-lg-12">
                  <label className="text-primary-dark" htmlFor="accountname">
                    Account Name <span className="text-error">*</span>
                  </label>
                  <Field
                    name="accountName"
                    type="text"
                    className="input-field"
                    id="account"
                    placeholder="Account Name"
                  />
                  <ErrorMessage name="accountName">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="mb-2">
                <div className="col-md-12">
                  <button
                    type="submit"
                    to="/admin/settings/edit"
                    className="btn bg-primary text-white text-sm me-5 px-5 py-2"
                  >
                    Update
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateSetting;
