import { mdiCloseCircle, mdiFileImagePlus, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import Select from 'react-select';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Spinner from '../../../components/admin/Spinner';

const AddBuilding = () => {
  const [selectedMainImg, setSelectedMainImg] = useState('');
  const [selectedMoreImg, setSelectedMoreImg] = useState([]);
  const [showIconList, setShowIconList] = useState(false);

  const [errorImg, setErrorImg] = useState('');

  // CONFIG FORM
  const initialValues = {
    images: [],
  };

  const validationSchema = yup.object({
    images: yup.array().min(1).max(10).required(),
  });

  const onSubmit = (values, props) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          return (
            <Form>
              {/* IMAGES */}
              <div className="row mb-4">
                <p className="col-3">
                  Building Images <span className="text-error">*</span>
                </p>
                <div className="col-9">
                  <div className="d-flex flex-wrap">
                    {selectedMainImg && (
                      <div className="img-wrap">
                        <img
                          src={selectedMainImg}
                          alt="images-preview"
                          className="img-preview"
                        />
                        <div
                          className="delete-img"
                          onClick={() => setSelectedMainImg('')}
                        >
                          <Icon path={mdiCloseCircle} />
                        </div>
                        <span className="label-main-img bg-primary">
                          Main Image
                        </span>
                      </div>
                    )}
                    {Boolean(selectedMainImg) || (
                      <label
                        htmlFor="image"
                        className="img-upload d-flex flex-column align-items-center text-gray-dark text-sm"
                      >
                        <Icon path={mdiFileImagePlus} size={1} />
                        <span>Main Image</span>
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={(e) => {
                            // get file
                            const selectedImg = e.target.files[0];
                            // add values images
                            const urlImg = URL.createObjectURL(selectedImg);
                            setSelectedMainImg(urlImg);
                          }}
                        />
                      </label>
                    )}
                    {selectedMoreImg &&
                      selectedMoreImg.map((urlImg, i) => (
                        <div className="img-wrap" key={i}>
                          <img
                            src={urlImg}
                            alt="images-preview"
                            className="img-preview"
                          />
                          <div
                            className="delete-img"
                            onClick={(e) => {
                              const filterImg = selectedMoreImg.filter(
                                (img) => img !== urlImg
                              );
                              setSelectedMoreImg(filterImg);
                            }}
                          >
                            <Icon path={mdiCloseCircle} />
                          </div>
                        </div>
                      ))}
                    {selectedMoreImg.length < 9 && (
                      <label
                        htmlFor="moreImage"
                        className="img-upload d-flex flex-column align-items-center text-gray-dark text-sm"
                      >
                        <Icon path={mdiFileImagePlus} size={1} />
                        <span>More Images</span>
                        <input
                          type="file"
                          multiple
                          id="moreImage"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files.length > 9) {
                              setErrorImg('Maximum image is 10');
                              return;
                            }
                            setErrorImg('');
                            for (let file of e.target.files) {
                              const urlFileBlob = URL.createObjectURL(file);
                              setSelectedMoreImg((prev) => [
                                ...prev,
                                urlFileBlob,
                              ]);
                            }
                          }}
                        />
                      </label>
                    )}
                  </div>
                  {errorImg && (
                    <span className="text-sm text-error">{errorImg}</span>
                  )}
                </div>
              </div>

              {/* Name Building */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Building Name <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <input
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Ex: Melati Meeting Room"
                  />
                </div>
              </div>

              {/* City */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  City <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <Select
                    type="text"
                    id="nameBuilding"
                    className="react-select__control"
                    placeholder="Select One..."
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: '1px',
                        borderColor: state.isFocused ? '#3583EF' : '#3583EF',
                      }),
                    }}
                    options={[{ value: 'jaja', label: 'jaja' }]}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '10px',
                    })}
                  />
                </div>
              </div>

              {/* District */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  District <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <Select
                    type="text"
                    id="nameBuilding"
                    className="react-select__control"
                    placeholder="Select One..."
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: '1px',
                        borderColor: state.isFocused ? '#3583EF' : '#3583EF',
                      }),
                    }}
                    options={[{ value: 'jaja', label: 'jaja' }]}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '10px',
                    })}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Full Address <span className="text-error">*</span>
                </label>
                <div className="col-9 d-flex">
                  <Field
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Ex: Jl Melati Raya no 23 RT 12 RW 2, Tebet"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Size <span className="text-error">*</span>
                </label>
                <div className="col-9 d-flex">
                  <Field
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Size"
                  />
                  <div className="p-3 bg-gray-light fw-bold text-sm ms-2 rounded">
                    M2
                  </div>
                </div>
              </div>

              {/* Capacity */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Capacity <span className="text-error">*</span>
                </label>
                <div className="col-9 d-flex">
                  <Field
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Capacity"
                  />
                  <div className="p-3 bg-gray-light fw-bold text-sm ms-2 rounded">
                    People
                  </div>
                </div>
              </div>

              {/* Facility */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="fasilitas">
                  Facilities <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <div className="d-flex w-100 mb-3">
                    <Field
                      type="text"
                      className="input-field"
                      id="fasilitas"
                      placeholder="Facility"
                    />
                    <div
                      onClick={() => setShowIconList(!showIconList)}
                      className="icon-select d-flex p-2 mx-2 text-sm"
                    >
                      {showIconList && (
                        <div className="icon-list">
                          <Spinner />
                        </div>
                      )}
                      <span>Icon</span>
                      <Icon path={mdiMenuDown} size={1} />
                    </div>
                  </div>
                  <div>
                    <Field
                      type="text"
                      className="input-field"
                      id="fasilitas"
                      placeholder="Deskripsi Facility"
                    />
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Price per month <span className="text-error">*</span>
                </label>
                <div className="col-9 d-flex">
                  <div className="p-3 bg-gray-light fw-bold text-sm me-2 rounded">
                    Rp
                  </div>
                  <Field
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Price per year <span className="text-error">*</span>
                </label>
                <div className="col-9 d-flex">
                  <div className="p-3 bg-gray-light fw-bold text-sm me-2 rounded">
                    Rp
                  </div>
                  <Field
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Price per year <span className="text-error">*</span>
                </label>
                <div className="col-9 d-flex">
                  <textarea
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Description"
                  />
                </div>
              </div>

              {/* Button */}
              <div className="row justify-content-end">
                <button
                  type="button"
                  className="col-3 button button-outline me-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="col-3 button button-container me-3"
                >
                  Save
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddBuilding;
