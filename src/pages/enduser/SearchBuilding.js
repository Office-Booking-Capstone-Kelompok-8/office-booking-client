import React from 'react';
import Navbar from '../../components/landingpage/navbar/Navbar';
import Footer from '../../components/landingpage/navbar/Footer';

const SearchBuilding = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar/>
        <div className='mt-5'>
            <div id="search" className="search">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 mb-3">
                            <div className="card" 
                                style={{ 
                                zIndex: -1, 
                                width: 300, 
                                height: 460,
                                boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                                borderRadius: 10,
                                }}
                                >
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                    className="card-img"
                                    alt="office"
                                    style={{height: 180}}
                                />
                                <div className="card-body">
                                    <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                                    <span className="card-text text-primary">From IDR 2.250.000 per month</span>
                                    <p className="card-text text-gray-dark">Jl. H.R. Rasuna Said Kav. 3-4 Tempo Scan Tower Lantai 32, Jakarta, 12950, IDN</p>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-3 col-lg-3 mb-3">
                            <div className="card" 
                                style={{ 
                                zIndex: -1, 
                                width: 300, 
                                height: 460,
                                boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                                borderRadius: 10,
                                }}
                                >
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                    className="card-img"
                                    alt="office"
                                    style={{height: 180}}
                                />
                                <div className="card-body">
                                    <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                                    <span className="card-text text-primary">From IDR 2.250.000 per month</span>
                                    <p className="card-text text-gray-dark">Jl. H.R. Rasuna Said Kav. 3-4 Tempo Scan Tower Lantai 32, Jakarta, 12950, IDN</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3 mb-3">
                            <div className="card" 
                                style={{ 
                                zIndex: -1, 
                                width: 300, 
                                height: 460,
                                boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                                borderRadius: 10,
                                }}
                                >
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                    className="card-img"
                                    alt="office"
                                    style={{height: 180}}
                                />
                                <div className="card-body">
                                    <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                                    <span className="card-text text-primary">From IDR 2.250.000 per month</span>
                                    <p className="card-text text-gray-dark">Jl. H.R. Rasuna Said Kav. 3-4 Tempo Scan Tower Lantai 32, Jakarta, 12950, IDN</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3 col-lg-3 mb-3">
                            <div className="card" 
                                style={{ 
                                zIndex: -1, 
                                width: 300, 
                                height: 460,
                                boxShadow: "0 8 24 rgba(112, 144, 176, 0.15)",
                                borderRadius: 10,
                                }}
                                >
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                    className="card-img"
                                    alt="office"
                                    style={{height: 180}}
                                />
                                <div className="card-body">
                                    <h3 className="text-md fw-bold">Lily Room Meeting</h3>
                                    <span className="card-text text-primary">From IDR 2.250.000 per month</span>
                                    <p className="card-text text-gray-dark">Jl. H.R. Rasuna Said Kav. 3-4 Tempo Scan Tower Lantai 32, Jakarta, 12950, IDN</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default SearchBuilding