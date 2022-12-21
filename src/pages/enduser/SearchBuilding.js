import React, { useEffect, useState } from 'react';
import Navbar from '../../components/landingpage/navbar/Navbar';
import Footer from '../../components/landingpage/navbar/Footer';
import Select from 'react-select';
import { Field, Form, Formik } from 'formik';
import useRegion from '../../hooks/useRegion';
import { useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../error/NotFound';
import { useGetBuildingCustomerQuery } from '../../store/building/buildingApiSLice';
import Spinner from '../../components/admin/Spinner';
import result from './../.././assets/img/result-found-search.png';

const SearchBuilding = () => {
  const { city } = useRegion();
  const optionCity = city.map((c) => ({ value: c?.id, label: c?.name }));
  const navigate = useNavigate();

  const optionCapacity = [
    { value: { min: 1, max: 50 }, label: '1 - 50 Person' },
    { value: { min: 50, max: 100 }, label: '50 - 100 Person' },
    { value: { min: 100, max: 200 }, label: '100 - 200 Person' },
    { value: { min: 200, max: 500 }, label: '200 - 500 Person' },
    { value: { min: 500, max: 1000 }, label: '500 - 1000 Person' },
  ];
  const optionDuration = [
    { value: 1, label: '1 Month' },
    { value: 2, label: '2 Month' },
    { value: 3, label: '3 Month' },
    { value: 4, label: '4 Month' },
    { value: 5, label: '5 Month' },
    { value: 6, label: '6 Month' },
    { value: 7, label: '7 Month' },
    { value: 8, label: '8 Month' },
    { value: 9, label: '9 Month' },
    { value: 10, label: '10 Month' },
    { value: 11, label: '11 Month' },
    { value: 12, label: '12 Month' },
  ];

  const { state: values } = useLocation();
  const [formState, setFormState] = useState({
    cityId: values.city.value,
    capacityMin: values.capacity.value.min,
    capacityMax: values.capacity.value.max,
    startDate: values.date,
    duration: values.duration.value,
  });

  const {
    data: building,
    isLoading,
    error,
    refetch,
  } = useGetBuildingCustomerQuery({
    page: 1,
    limit: 20,
    cityId: formState.cityId,
    capacityMin: formState.capacityMin,
    capacityMax: formState.capacityMax,
    startDate: formState.startDate,
    duration: formState.duration,
  });
  useEffect(() => {
    refetch();
  }, [formState]);

  console.log(error);
  console.log(formState.duration, formState.startDate);

  const initialValues = {
    date: formState.startDate,
    capacity: {
      min: formState.capacityMin,
      max: formState.capacityMax,
    },
    duration: formState.duration,
    city: formState.cityId,
  };
  console.log(formState);

  const onSubmit = (values) => {
    console.log(values.date);
    setFormState({
      ...formState,
      cityId: values.city,
      capacityMin: values.capacity.min,
      capacityMax: values.capacity.max,
      startDate: values.date,
      duration: values.duration,
    });
  };
  console.log(building?.data);
  console.log(formState);

  if (values === null) return <NotFound />;
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />

      <div style={{ marginTop: '8rem', padding: '2rem' }}>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {(props) => {
            console.log(props.values);
            return (
              <Form className="d-flex flex-column gap-3">
                <div className="row">
                  <Select
                    placeholder="City"
                    options={optionCity}
                    className="col-8"
                    onChange={(e) => {
                      props.setFieldValue('city', e.value);
                    }}
                    defaultValue={values.city}
                  />
                  <button type="submit" className="btn btn-primary col-4">
                    Search
                  </button>
                </div>
                <div className="row">
                  <Select
                    placeholder="Capacity"
                    className="col-4"
                    options={optionCapacity}
                    defaultValue={{
                      label: values.capacity.label,
                      value: {
                        min: formState.capacityMin,
                        max: formState.capacityMax,
                      },
                    }}
                    onChange={(e) => {
                      props.setFieldValue('capacity', {
                        min: e.value.min,
                        max: e.value.max,
                      });
                    }}
                  />
                  <Field
                    name="date"
                    // defaultValue={values?.date}
                    type="date"
                    className="col-4 rounded"
                    style={{ border: '1px solid #cccccc', outline: 'none' }}
                  />
                  <Select
                    placeholder="Duration"
                    className="col-4"
                    options={optionDuration}
                    defaultValue={values.duration}
                    onChange={(e) => {
                      props.setFieldValue('duration', e.value);
                    }}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
        <div className="d-flex mt-5 justify-content-end align-items-center gap-3">
          <span>Sort By</span>
          <select style={{ padding: '0.5rem 1rem' }}>
            <option value="" key="">
              Pil1
            </option>
          </select>
        </div>
        {isLoading ? (
          <Spinner />
        ) : building?.data === null ? (
          <div className="justify-content-center pt-2">
            <img
              src={result}
              className="mx-auto d-block pt-5 w-20"
              alt="notfound"
            />
            <h4 className=" text-center pt-2 fw-bold pt-3">
              Ups!... no results found
            </h4>
            <h5 className=" text-center pt-2">please try another search</h5>
          </div>
        ) : (
          <div
            style={{
              marginTop: '3rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {building?.data?.map((build) => (
              <div
                key={build.id}
                className="card"
                style={{
                  boxShadow: '0 8 24 rgba(112, 144, 176, 0.15)',
                  borderRadius: 10,
                  cursor: 'pointer',
                }}
                onClick={() => {
                  navigate(`/detail-building/${build.id}`);
                }}
              >
                <img
                  src={build.pictures}
                  className="card-img"
                  alt="office"
                  style={{ cursor: 'pointer' }}
                />
                <div className="card-body">
                  <h3 className="text-md fw-bold">{build.name}</h3>
                  <span className="card-text text-primary">
                    From IDR {build.price.monthly} per month
                  </span>
                  <p className="card-text text-gray-dark">
                    {build.location.district}, {build.location.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchBuilding;
