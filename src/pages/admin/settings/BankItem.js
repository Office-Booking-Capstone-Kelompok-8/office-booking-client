import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeletePaymentsMutation } from '../../../store/payments/paymentsApiSlice';
import { notifySuccess } from '../../../utils/helpers';
import Swal from 'sweetalert2';

const BankItem = ({ payment }) => {
  const navigate = useNavigate();
  const [deletePayment, { isSuccess: successDelete }] = useDeletePaymentsMutation();

  useEffect(() => {
    if (successDelete) notifySuccess('payment deleted successfully');
  });

  const deleteHandler = () => {
    Swal.fire({
        title: "Delete this payment?",
        text: "this item will be removed permanently",
        confirmButtonColor: "#3085D6",
        confirmButtonText: "Delete",
        showCancelButton: true
    })
    .then((window) => {
      if (window.isConfirmed) {
        deletePayment({ id: payment.id })
      }    
    })
  };

  return (
    <tr>
      <td className="text-primary-dark text-sm">{payment.bankName}</td>
      <td className="text-primary-dark text-sm">{payment.accountNumber}</td>
      <td className="text-primary-dark text-sm">{payment.accountName}</td>
      <td>
        <button
          to="/"
          className="btn bg-success text-sm me-4 text-white px-4 py-2"
          onClick={() => navigate(`update/${payment.id}`)}
        >
          Update
        </button>
        <button
          to="/"
          className="btn bg-error text-sm text-white px-4 py-2"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BankItem;
