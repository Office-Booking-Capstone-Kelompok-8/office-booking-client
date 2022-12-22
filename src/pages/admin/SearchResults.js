import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/admin/Spinner';
import { useGetBuildingQuery } from '../../store/building/buildingApiSLice';
import result from './../.././assets/img/result-found-search.png';
import BuildingCardResult from './BuildingCardResult';

const SearchResults = () => {
  const { input } = useParams();
  console.log(input);
  const { data, isLoading, error } = useGetBuildingQuery({
    buildingName: input,
    page: 1,
    limit: 20,
  });
  console.log(data, error);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div id="search" className="search">
        <div className="container">
          <div className="row">
            {data?.data !== null ? (
              data?.data?.map((build) => (
                <BuildingCardResult key={build?.id} building={build} />
              ))
            ) : (
              <>
                <div className="justify-content-center pt-2">
                  <img
                    src={result}
                    className="mx-auto d-block pt-5 w-20"
                    alt="notfound"
                  />
                  <h4 className=" text-center pt-2 fw-bold pt-3">
                    Ups!... no results found
                  </h4>
                  <h5 className=" text-center pt-2">
                    please try another search
                  </h5>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
