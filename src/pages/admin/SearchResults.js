import React from 'react'
import result from './../.././assets/img/result-found-search.png';

const SearchResults = () => {
  return (
    <div>
      <div id="search" className="search">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card" 
                style={{ 
                  zIndex: -1, 
                  width: 267, 
                  height: 250,
                  boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                  borderRadius: 10,
                  }}
                >
                  <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                    className="card-img"
                    alt="office"
                  />
                <div className="card-body">
                  <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                  <p className="card-text">Jakarta Utara</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card" 
                style={{ 
                  zIndex: -1, 
                  width: 267, 
                  height: 250,
                  boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                  borderRadius: 10,
                  }}
                >
                  <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                    className="card-img"
                    alt="office"
                  />
                <div className="card-body">
                  <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                  <p className="card-text">Jakarta Utara</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card" 
                style={{ 
                  zIndex: -1, 
                  width: 267, 
                  height: 250,
                  boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                  borderRadius: 10,
                  }}
                >
                  <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                    className="card-img"
                    alt="office"
                  />
                <div className="card-body">
                  <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                  <p className="card-text">Jakarta Utara</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card" 
                style={{ 
                  zIndex: -1, 
                  width: 267, 
                  height: 250,
                  boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                  borderRadius: 10,
                  }}
                >
                  <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                    className="card-img"
                    alt="office"
                  />
                <div className="card-body">
                  <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                  <p className="card-text">Jakarta Utara</p>
                </div>
              </div>
            </div>
            
            {
                <>  
                    <div className='justify-content-center pt-2'>
                        <img src={result}  
                        className="mx-auto d-block pt-5 w-20" 
                        alt="notfound"
                        />
                        <h4 
                          className=' text-center pt-2 fw-bold pt-3'>
                          Ups!... no results found
                        </h4>
                        <h5 
                          className=' text-center pt-2'>
                          please try another search
                        </h5>
                    </div>  
                </>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResults