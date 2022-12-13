/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Spinner from '../../../components/admin/Spinner';
import {
  useAddPaymentsMutation,
  useGetBanksQuery,
  useGetPaymentsQuery,
} from '../../../store/payments/paymentsApiSlice';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import Select from 'react-select';
import BankItem from './BankItem';
import { ToastContainer } from 'react-toastify';
import { notifySuccess } from '../../../utils/helpers';

const Settings = () => {
  // const navigate = useNavigate();
  const { data: payments, isLoading } = useGetPaymentsQuery();
  const [addPayment, { error: addError, isSuccess: addSuccess }] =
    useAddPaymentsMutation();
  const { data: banks, isSuccess: successGetBank } = useGetBanksQuery();

  const [banksOptions, setBanksOptions] = useState([]);

  useEffect(() => {
    if (addSuccess) notifySuccess('Add Payment Successfully');
    if (successGetBank) {
      setBanksOptions(
        banks?.data?.map((bank) => ({ value: bank?.id, label: bank?.name }))
      );
    }
  }, [successGetBank, addSuccess]);

  if (addError) console.log(addError);

  // CONFIG FORM
  const initialValues = {
    bank: '',
    accountName: '',
    accountNumber: '',
    description: 'Test',
  };

  const validationSchema = yup.object({
    bank: yup.string().required().trim(),
    accountName: yup.string().required().trim(),
    accountNumber: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'number is invalid'),
  });

  const onSubmit = async (values, props) => {
    await addPayment({
      bankId: values.bank,
      accountName: values.accountName,
      accountNumber: values.accountNumber,
    });
    props.resetForm();
  };

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
                    className="col-3 button text-white me-3 bg-primary"
                  >
                    {props.isSubmitting ? 'Please Wait' : 'Add Payment'}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>

      {/* Table */}
      <div
        className="card"
        style={{
          boxShadow: '0px 8px 24px rgba(112, 144, 176, 0.25)',
          borderRadius: 9,
          marginTop: '3rem',
        }}
      >
        <div className="card-body">
          {isLoading ? (
            <Spinner />
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th className="text-sm text-gray-dark">Bank</th>
                  <th className="text-sm text-gray-dark">Account Number</th>
                  <th className="text-sm text-gray-dark">Account Name</th>
                  <th className="text-sm text-gray-dark">Action</th>
                </tr>
              </thead>
              <tbody>
                {payments?.data?.map((payment) => (
                  <BankItem key={payment.id} payment={payment} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
