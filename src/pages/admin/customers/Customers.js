import React from 'react'
import { Link } from 'react-router-dom';
import customers from './../../../assets/img/customers.png';

const Customers = () => {
  return (
    <div>
      <div className="mb-2">
      <div className="row mb-3">
        <h2>Customers</h2>
          <div className="col-md-6 text-gray-dark">
            <span>OfficeZone</span>
            <span className="breadcrumb-arrow">&gt;</span>
            <span>Customers</span>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="/admin/customers/add-customer" className="btn bg-primary text-white text-sm me-5 px-5 py-2">Add customers</Link>
          </div>
          
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={customers} className="w-100" alt="customers" />
                </div>
                <div className="col-8">
                  <h3 className="fw-bold">12.000</h3>
                  <span className="text-sm ">Total Customers</span>
                  <div className="justify-content-between rounded d-flex flex-column flex-lg-row">
                    <h3 className="text-primary text-sm px-2 py-2" style={{background: "rgba(202, 222, 251, 0.6)", borderRadius: 9 }}>+ 100</h3>
                    <span className="text-sm text-gray-dark me-4 pt-2">new customers this month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)", borderRadius: 9}}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th className='text-sm text-gray-dark'>Name</th>
                <th className='text-sm text-gray-dark'>Email</th>
                <th className='text-sm text-gray-dark'>No. Telp</th>
                <th className='text-sm text-gray-dark'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1 className='text-primary-dark text-sm'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"  alt="name" className='img-building 4 h-4 m-2'/>
                    Ningsih Widiyati
                  </h1>
                </td>
                <td className='text-primary-dark text-sm'>mail@gmail.com</td>
                <td className='text-primary-dark text-sm'>0858462598657</td>
                <td>
                  <Link to="/" className="btn bg-success text-sm me-4 text-white px-4 py-2">Update</Link>
                  <button to="/" className="btn bg-error text-sm me-4 text-white px-4 py-2">Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className='text-primary-dark text-sm'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"  alt="name" className='img-building 4 h-4 m-2'/>
                    Ningsih Widiyati
                  </h1>
                </td>
                <td className='text-primary-dark text-sm'>mail@gmail.com</td>
                <td className='text-primary-dark text-sm'>0858462598657</td>
                <td>
                  <Link to="/" className="btn bg-success text-sm me-4 text-white px-4 py-2">Update</Link>
                  <button to="/" className="btn bg-error text-sm me-4 text-white px-4 py-2">Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className='text-primary-dark text-sm'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"  alt="name" className='img-building 4 h-4 m-2'/>
                    Ningsih Widiyati
                  </h1>
                </td>
                <td className='text-primary-dark text-sm'>mail@gmail.com</td>
                <td className='text-primary-dark text-sm'>0858462598657</td>
                <td>
                  <Link to="/" className="btn bg-success text-sm me-4 text-white px-4 py-2">Update</Link>
                  <button to="/" className="btn bg-error text-sm me-4 text-white px-4 py-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link">Previous</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">1</Link>
              </li>
              <li className="page-item active" aria-current="page">
                <Link className="page-link" to="#">2</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">3</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Customers