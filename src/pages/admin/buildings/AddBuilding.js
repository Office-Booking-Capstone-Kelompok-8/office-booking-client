import { mdiCloseCircle, mdiFileImagePlus, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import Select from 'react-select';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Spinner from '../../../components/admin/Spinner';
import useGetIcon from '../../../hooks/useGetIcon';
import useRegion from '../../../hooks/useRegion';
import { useGetBuildingDetailQuery } from '../../../store/building/buildingApiSLice';
import { BASE_URL } from '../../../utils/constants';
import Auth from '../../../utils/auth';

const AddBuilding = () => {
  const [selectedMainImg, setSelectedMainImg] = useState('');
  const [selectedMoreImg, setSelectedMoreImg] = useState([]);

  // Get Building
  // const { data: buildingDetail } = useGetBuildingDetailQuery({
  //   id: 'd1f1b859-e5d3-4cd5-b6d2-3c3ae161a726',
  // });

  // Region Features
  const { city, getDistrict, district } = useRegion();
  const optionCity = city.map((c) => ({ value: c?.id, label: c?.nama }));
  const optionDistrict = district.map((d) => ({
    value: d?.id,
    label: d?.nama,
  }));

  // Facility Features
  const [selectIcon, setSelectIcon] = useState('');
  const [showIconList, setShowIconList] = useState(false);
  const [listFacilities, setListFacilities] = useState([]);
  const [formStateFacilities, setFormStateFacilities] = useState({
    name: '',
    icon: '',
    desc: '',
    idIcon: null,
  });
  const icons = useGetIcon();

  // Images
  const [errorImg, setErrorImg] = useState('');
  const [formDataImages, setFormDataImages] = useState([]);
  console.log(formDataImages);

  // CONFIG FORM
  const initialValues = {
    images: [],
    buildingName: '',
    city: '',
    district: '',
    address: '',
    size: '',
    capacity: '',
    facilities: [],
    annual: '',
    monthly: '',
    description: '',
  };

  const validationSchema = yup.object({
    images: yup.array().min(1).max(10).required(),
    // buildingName: yup.string().required('name is a required field').trim(),
    // city: yup.string().required(),
    // district: yup.string().required(),
    // address: yup.string().required().trim(),
    // size: yup.string().required(),
    // capacity: yup.number('not a number').required(),
    facilities: yup.array().min(1),
    // annual: yup.number().required(),
    // monthly: yup.number().required(),
    // description: yup.string().required().trim(),
  });

  const onSubmit = async (values, props) => {
    console.log(values);

    // Get Empty Building
    await fetch(`${BASE_URL}/admin/buildings/id`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Auth.getAccessToken()}`,
      },
    })
      .then((res) => res.json())
      .then(async (res) => {
        // Upload Gambar
        console.log(res?.data?.id);
        formDataImages.forEach(async (file) => {
          await fetch(`${BASE_URL}/admin/buildings/${res?.data?.id}/pictures`, {
            method: 'PUSH',
            body: file,
            headers: {
              Authorization: `Bearer ${Auth.getAccessToken()}`,
            },
          })
            .then((res) => res.json())
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => {
          // console.log(props.errors);
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
                            setFormDataImages([
                              ...formDataImages,
                              {
                                index: 0,
                                picture: selectedImg,
                                alt: selectedImg.name,
                              },
                            ]);
                            // add values images
                            const urlImg = URL.createObjectURL(selectedImg);
                            props.setFieldValue('images', [urlImg]);
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
                              setFormDataImages([
                                ...formDataImages,
                                { index: Date.now(), pictures: file },
                              ]);
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
                  <ErrorMessage name="images">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>

              {/* Name Building */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Building Name <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <Field
                    name="buildingName"
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Ex: Melati Meeting Room"
                  />
                  <ErrorMessage name="buildingName">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
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
                    options={optionCity}
                    onChange={async (e) => {
                      getDistrict(e.value);
                      props.setFieldValue('city', e.label);
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '10px',
                    })}
                  />
                  <ErrorMessage name="city">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
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
                    options={optionDistrict}
                    onChange={(e) => props.setFieldValue('district', e.label)}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: '10px',
                    })}
                  />
                  <ErrorMessage name="district">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>

              {/* Address */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Full Address <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <Field
                    name="address"
                    as="textarea"
                    className="input-field"
                    placeholder="Ex: Jl Melati Raya no 23 RT 12 RW 2, Tebet"
                  />
                  <ErrorMessage name="address">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Size <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <div className="d-flex">
                    <Field
                      name="size"
                      type="text"
                      className="input-field"
                      placeholder="Size"
                    />
                    <div className="p-3 bg-gray-light fw-bold text-sm ms-2 rounded">
                      M2
                    </div>
                  </div>
                  <ErrorMessage name="size">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>

              {/* Capacity */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Capacity <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <div className="d-flex">
                    <Field
                      name="capacity"
                      type="number"
                      className="input-field"
                      id="nameBuilding"
                      placeholder="Capacity"
                    />
                    <div className="p-3 bg-gray-light fw-bold text-sm ms-2 rounded">
                      People
                    </div>
                  </div>
                  <ErrorMessage name="capacity">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>

              {/* Facility */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="fasilitas">
                  Facilities <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  {listFacilities.length !== 0
                    ? listFacilities.map((list, i) => (
                        <div
                          key={i}
                          style={{
                            borderBottom: 'solid 1px black',
                            marginBottom: '1rem',
                          }}
                        >
                          <div
                            className="title-facility fw-bold d-flex"
                            style={{ gap: '.5rem' }}
                          >
                            <img
                              src={list?.icon}
                              alt="icons"
                              style={{ width: '1.5rem' }}
                            />
                            <span>{list?.name}</span>
                          </div>
                          <p className="text-sm mt-2">{list?.desc}</p>
                        </div>
                      ))
                    : null}
                  <div className="d-flex w-100 mb-3">
                    <input
                      onChange={(e) =>
                        setFormStateFacilities({
                          ...formStateFacilities,
                          name: e.target.value,
                        })
                      }
                      value={formStateFacilities.name}
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
                          {icons?.length === 0 ? (
                            <Spinner />
                          ) : (
                            icons?.map((icon) => (
                              <React.Fragment key={icon?.id}>
                                <img
                                  src={icon?.url}
                                  alt={icon?.name}
                                  onClick={() => {
                                    setSelectIcon(icon?.url);
                                    setFormStateFacilities({
                                      ...formStateFacilities,
                                      icon: icon?.url,
                                      idIcon: icon?.id,
                                    });
                                  }}
                                />
                              </React.Fragment>
                            ))
                          )}
                        </div>
                      )}
                      {selectIcon ? (
                        <img
                          src={selectIcon}
                          className="select-icon"
                          alt="icon"
                        />
                      ) : (
                        <span>Icon</span>
                      )}
                      <Icon path={mdiMenuDown} size={1} />
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={(e) =>
                        setFormStateFacilities({
                          ...formStateFacilities,
                          desc: e.target.value,
                        })
                      }
                      value={formStateFacilities.desc}
                      type="text"
                      className="input-field"
                      id="fasilitas"
                      placeholder="Description Facility"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-3 text-sm"
                    onClick={() => {
                      console.log(formStateFacilities);
                      if (
                        formStateFacilities.desc &&
                        formStateFacilities.name &&
                        formStateFacilities.icon
                      ) {
                        setListFacilities([
                          ...listFacilities,
                          formStateFacilities,
                        ]);
                        setFormStateFacilities({
                          name: '',
                          icon: '',
                          desc: '',
                        });
                        props.setFieldValue('facilities', [
                          ...props.values.facilities,
                          {
                            name: formStateFacilities.name,
                            icon: formStateFacilities.idIcon,
                            description: formStateFacilities.desc,
                          },
                        ]);
                        setSelectIcon('');
                      }
                    }}
                    type="button"
                  >
                    Add Facility
                  </button>
                  <div>
                    <ErrorMessage name="facilities">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Price per month <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <div className="d-flex">
                    <div className="p-3 bg-gray-light fw-bold text-sm me-2 rounded">
                      Rp
                    </div>
                    <Field
                      name="monthly"
                      type="number"
                      className="input-field"
                      id="nameBuilding"
                      placeholder="Price"
                    />
                  </div>
                  <ErrorMessage name="monthly">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Price per year <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <div className="d-flex">
                    <div className="p-3 bg-gray-light fw-bold text-sm me-2 rounded">
                      Rp
                    </div>
                    <Field
                      name="annual"
                      type="number"
                      className="input-field"
                      id="nameBuilding"
                      placeholder="Price"
                    />
                  </div>
                  <ErrorMessage name="annual">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="row mb-4">
                <label className="col-3" htmlFor="nameBuilding">
                  Description <span className="text-error">*</span>
                </label>
                <div className="col-9">
                  <Field
                    as="textarea"
                    name="description"
                    type="text"
                    className="input-field"
                    id="nameBuilding"
                    placeholder="Description"
                  />
                  <ErrorMessage name="description">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
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
