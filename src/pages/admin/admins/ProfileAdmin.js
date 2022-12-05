import React from 'react';

const ProfileAdmin = () => {
  return (
    <div>
      <div className='profileadmin'>
        <div className="profile-text row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="row mb-3">
              <div className="col-6 ">
                <div className=" row rounded align-items-center">
                  <div className="col-4">
                    <img
                        src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                        alt="user"
                        className="w-15 h-15 avatar"
                    />
                  </div>
                  <div className="col-8">
                    <h3>Profile</h3>
                    <span className="text-md text-gray-dark">update your personal details</span>
                  </div>
                </div>
              </div>
              <div className="col-6 pt-5 d-flex justify-content-end">
                <div className="row d-flex justify-content-end">
                  <div className='col-3 me-5'>
                    <button
                      type="button"
                      className=" button button-outline me-5 px-5 py-2"
                    >Cancel
                    </button>
                  </div>
                  <div className='col-3 me-5'>
                  <button
                      type="submit"
                      className="button button-container px-5 py-2 "
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <label className='text-primary-dark' htmlFor="notlp">
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
        {/* Username & Old Password*/}
        <div className="row mb-4">
          <div className="col-md-6">
              <label className='text-primary-dark' htmlFor="username">
                Username <span className="text-error">*</span>
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
              <label className='text-primary-dark' htmlFor="oldpass">
                Old Password <span className="text-error">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                id="oldpass"
                disabled
                value="hjhfgfh"
              />
              
          </div>
        </div>
        {/* New Password Confirm Password * */}
        <div className="row mb-4">
          <div className="col-md-6">
              <label className='text-primary-dark' htmlFor="newpass">
                New Password <span className="text-error">*</span>
              </label>
              <input
                type="text"
                className="input-field text-dark"
                id="newpass"
                placeholder='update your password'
              />
          </div>
          <div className="col-md-6">
              <label className='text-primary-dark' htmlFor="confpass">
                Confirm Password <span className="text-error">*</span>
              </label>
              <input
                  type="text"
                  className="input-field"
                  id="confpass"
                  placeholder='same as new password'
              />
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default ProfileAdmin