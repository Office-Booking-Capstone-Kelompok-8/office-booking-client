import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

const Settings = () => {
    const [picture, setPicture] = useState(null);
    const img = useRef();
  return (
    <div>
        <div className="mb-2">
            <div className="row mb-3">
                <div className="col-md-12 d-flex justify-content-end">
                    <Link
                        to="/admin/settings/edit-profile/:id"
                        className="btn bg-primary text-white text-sm me-5 px-5 py-2"
                    >
                    Edit profile
                    </Link>
                </div>
            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='row d-felx align-content-center px-2 py-2'>
                <div className='d-flex w-10 h-10' style={{ position:"relative" }}>
                    <img
                      src={picture?picture:"https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"}
                      alt="admins"
                      className="avatar"
                      style={{ width: 120, height: 120}}
                    />
                    <div style={{ position:"absolute",bottom: -30, right: -30 }} 
                        className="avatar bg-primary w-3 h-3" 
                        onClick={() => img.current.click()}>
                        <Icon
                        path={mdiPencil}
                        size={1}
                        className="text-white"
                        />
                    </div>
                </div>
            </div>
            <input ref={img} type="file" hidden accept="image/*" 
                onChange={(e)=> { let pic = URL.createObjectURL(e.target.files[0]);
                setPicture(pic);
            }}/>
        </div>

        {/* Email & PhoneNumber */}
        <div className="row mb-4 pt-5">
            <div className="col-md-6">
                <label className='text-primary-dark' htmlFor="email">
                    Email <span className="text-error">*</span>
                </label>
                <input
                    type="text"
                    className="input-field text-dark"
                    id="email"
                    disabled
                    value="email@mail.com"
                />
            </div>
            <div className="col-md-6">
                <label className='text-primary-dark' htmlFor="email">
                    Phone Number <span className="text-error">*</span>
                </label>
                <input
                    type="number"
                    className="input-field"
                    id="number"
                    disabled
                    value="0852465875235"
                />
            </div>
        </div>
        {/* Username */}
        <div className="row mb-4">
            <div className="col-md-12 col-lg-12">
                <label className='text-primary-dark' htmlFor="email">
                    Username <span className="text-error">*</span>
                </label>
                <input
                    type="text"
                    className="input-field"
                    id="name"
                    disabled
                    value="Melati"
                />
            </div>
        </div>
        <div>
            <h3 className='text-md fw-bold pt-3'>For Transactions</h3>
        </div>
        {/* Bank * */}
        <div className="row mb-4">
            <div className="col-md-6">
                <label className='text-primary-dark' htmlFor="email">
                    Bank <span className="text-error">*</span>
                </label>
                <input
                    type="text"
                    className="input-field text-dark"
                    id="bank"
                    disabled
                    value="BNI"
                />
            </div>
            <div className="col-md-6">
                <label className='text-primary-dark' htmlFor="email">
                    Bank No <span className="text-error">*</span>
                </label>
                <input
                    type="text"
                    className="input-field"
                    id="number"
                    disabled
                    value="43467890876576"
                />
            </div>
        </div>
        {/* Account Name */}
        <div className="row mb-4">
            <div className="col-md-12 col-lg-12">
                <label className='text-primary-dark' htmlFor="email">
                    Account Name <span className="text-error">*</span>
                </label>
                <input
                    type="text"
                    className="input-field"
                    id="account"
                    disabled
                    value="OFFICE ZONE"
                />
            </div>
        </div>
    </div>
  )
}

export default Settings