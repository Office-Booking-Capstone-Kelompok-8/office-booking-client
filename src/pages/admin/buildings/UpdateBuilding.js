import { mdiCloseCircle, mdiFileImagePlus, mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Spinner from "../../../components/admin/Spinner";
import useGetIcon from "../../../hooks/useGetIcon";
import useRegion from "../../../hooks/useRegion";
import { useNavigate, useParams } from "react-router-dom";
import useUploadImgBuilding from "../../../hooks/useUploadImgBuilding";
import { notifySuccess } from "../../../utils/helpers";
import { ToastContainer } from "react-toastify";
import {
  useAddFacilitiesMutation,
  useDeleteFacilitiesMutation,
  useGetBuildingDetailQuery,
  useUpdateBuildingMutation,
} from "../../../store/building/buildingApiSLice";
import { BASE_URL } from "../../../utils/constants";
import Auth from "../../../utils/auth";

const UpdateBuilding = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedMainImg, setSelectedMainImg] = useState("");
  const [selectedMoreImg, setSelectedMoreImg] = useState([]);
  const [onUpdate, setOnUpdate] = useState(false);
  const { isUpload } = useUploadImgBuilding();
  const [updateBuilding, { error }] = useUpdateBuildingMutation();
  console.log(error);
  // Get Building
  const {
    data: building,
    // error,
    // isSuccess,
    refetch,
    isLoading,
  } = useGetBuildingDetailQuery({
    id: id,
  });

  useEffect(() => {
    setSelectedMainImg(building?.data?.pictures[0]?.url);
    setSelectedMoreImg(building?.data?.pictures);
  }, [building]);

  // Region Features
  const { city, getDistrict, district } = useRegion();
  const optionCity = city.map((c) => ({ value: c?.id, label: c?.name }));
  const optionDistrict = district.map((d) => ({
    value: d?.id,
    label: d?.name,
  }));

  // Facility Features
  const [addFacilities] = useAddFacilitiesMutation();
  const [deleteFacilities] = useDeleteFacilitiesMutation();
  const [selectIcon, setSelectIcon] = useState("");
  const [showIconList, setShowIconList] = useState(false);
  const [listFacilities, setListFacilities] = useState([]);
  const [formStateFacilities, setFormStateFacilities] = useState({
    Name: "",
    icon: "",
    description: "",
    IconID: null,
  });
  const icons = useGetIcon();

  // Images
  const [errorImg, setErrorImg] = useState("");
  const [formDataImages, setFormDataImages] = useState([]);
  // CONFIG FORM
  const initialValues = {
    images: [],
    buildingName: building?.data?.name,
    city: building?.data?.location?.city?.id,
    district: building?.data?.location?.district?.id,
    address: building?.data?.location?.address,
    capacity: building?.data?.capacity,
    facilities: [],
    annual: building?.data?.price?.annual,
    monthly: building?.data?.price?.monthly,
    description: building?.data?.description,
  };

  const validationSchema = yup.object({
    buildingName: yup.string().required("name is a required field").trim(),
    city: yup.number().required(),
    district: yup.number().required(),
    address: yup.string().required().trim(),
    capacity: yup.number("not a number").required().max(1000),
    annual: yup.number().required(),
    monthly: yup.number().required(),
    description: yup.string().required().trim(),
  });

  const onSubmit = async (values, props) => {
    // Get Empty Building & Upload Picture
    await updateBuilding({
      buildingID: building?.data?.id,
      name: values.buildingName,
      location: {
        cityId: values.city,
        districtId: values.district,
        address: values.address,
      },
      capacity: values.capacity,
      price: {
        annual: values.annual,
        monthly: values.monthly,
      },
      description: values.description,
    });
    refetch();

    // RESET
    notifySuccess("building updated successfully");
    setListFacilities([]);
  };
  if (isLoading) return <Spinner />;

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
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
                    {selectedMainImg ? (
                      <div className="img-wrap">
                        <img
                          src={selectedMainImg}
                          alt="images-preview"
                          className="img-preview"
                        />
                        <div
                          className="delete-img"
                          onClick={() => {
                            setSelectedMainImg("");
                            const formDataNew = formDataImages.filter(
                              (file) => {
                                return file?.get("index") !== "0";
                              }
                            );
                            setFormDataImages(formDataNew);
                          }}
                        >
                          <Icon path={mdiCloseCircle} />
                        </div>
                        <span className="label-main-img bg-primary">
                          Main Image
                        </span>
                      </div>
                    ) : (
                      <Spinner />
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
                            const formData = new FormData();
                            formData.append("picture", selectedImg);
                            formData.append("index", 0);
                            formData.append("alt", "Main photo");
                            setFormDataImages([...formDataImages, formData]);
                            // add values images
                            const urlImg = URL.createObjectURL(selectedImg);
                            props.setFieldValue("images", [urlImg]);
                            setSelectedMainImg(urlImg);
                          }}
                        />
                      </label>
                    )}

                    {selectedMoreImg &&
                      selectedMoreImg
                        ?.filter((img) => img?.index !== 0)
                        .map((urlImg, i) => (
                          <div className="img-wrap" key={i}>
                            <img
                              src={urlImg?.url}
                              alt="images-preview"
                              className="img-preview"
                            />
                            <div
                              className="delete-img"
                              onClick={async (e) => {
                                await fetch(
                                  `${BASE_URL}/admin/buildings/${building?.data?.id}/pictures/${urlImg.id}`,
                                  {
                                    method: "DELETE",
                                    headers: {
                                      Authorization: `Bearer ${Auth.getAccessToken()}`,
                                    },
                                  }
                                )
                                  .then(async (res) => await res.json())
                                  .catch((err) => console.log(err));
                                refetch();
                              }}
                            >
                              <Icon path={mdiCloseCircle} />
                            </div>
                          </div>
                        ))}
                    {onUpdate && (
                      <div className="d-flex justify-content-center align-items-center mx-4">
                        <Spinner />
                      </div>
                    )}
                    {selectedMoreImg?.length < 9 && (
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
                          onChange={async (e) => {
                            if (e.target.files.length > 9) {
                              setErrorImg("Maximum image is 10");
                              return;
                            }
                            const formData = new FormData();
                            formData.append("picture", e.target.files[0]);
                            formData.append("index", 1);
                            formData.append("alt", "Alt photo");
                            setErrorImg("");

                            setOnUpdate(true);
                            await fetch(
                              `${BASE_URL}/admin/buildings/${building?.data?.id}/pictures`,
                              {
                                method: "POST",
                                body: formData,
                                headers: {
                                  Authorization: `Bearer ${Auth.getAccessToken()}`,
                                },
                              }
                            )
                              .then(async (res) => await res.json())

                              .catch((err) => console.log(err));
                            setOnUpdate(false);
                            refetch();
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
                    defaultValue={{
                      value: building?.data?.location?.city?.id,
                      label: building?.data?.location?.city?.name,
                    }}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: "1px",
                        borderColor: state.isFocused ? "#3583EF" : "#3583EF",
                      }),
                    }}
                    options={optionCity}
                    onChange={async (e) => {
                      getDistrict(e.value);
                      props.setFieldValue("city", e.value);
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: "10px",
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
                    defaultValue={{
                      value: building?.data?.location?.district?.id,
                      label: building?.data?.location?.district?.name,
                    }}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        border: "1px",
                        borderColor: state.isFocused ? "#3583EF" : "#3583EF",
                      }),
                    }}
                    options={optionDistrict}
                    onChange={(e) => props.setFieldValue("district", e.value)}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: "10px",
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
                  {building?.data?.facilities?.length !== 0
                    ? building?.data?.facilities?.map((list, i) => (
                        <div
                          key={i}
                          style={{
                            borderBottom: "solid 1px black",
                            marginBottom: "1rem",
                          }}
                        >
                          <div
                            className="title-facility fw-bold d-flex"
                            style={{
                              gap: ".5rem",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <div
                                style={{
                                  gap: ".5rem",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={list?.icon}
                                  alt="icons"
                                  style={{
                                    width: "1.5rem",
                                  }}
                                />
                                <span>{list?.name}</span>
                              </div>
                              <p className="text-sm mt-2 fw-light">
                                {list?.description}
                              </p>
                            </div>
                            <button
                              className="btn bg-error text-sm text-white"
                              onClick={async () => {
                                await deleteFacilities({
                                  buildingId: building?.data?.id,
                                  facilityId: list.id,
                                });
                                refetch();
                              }}
                              type="button"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))
                    : null}
                  <div className="d-flex w-100 mb-3">
                    <input
                      onChange={(e) =>
                        setFormStateFacilities({
                          ...formStateFacilities,
                          Name: e.target.value,
                        })
                      }
                      value={formStateFacilities.Name}
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
                                      IconID: icon?.id,
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
                          description: e.target.value,
                        })
                      }
                      value={formStateFacilities.description}
                      type="text"
                      className="input-field"
                      id="fasilitas"
                      placeholder="Description Facility"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-3 text-sm"
                    onClick={async () => {
                      if (
                        formStateFacilities.description &&
                        formStateFacilities.Name &&
                        formStateFacilities.icon
                      ) {
                        setListFacilities([
                          ...listFacilities,
                          { ...formStateFacilities, id: Date.now() },
                        ]);
                        setFormStateFacilities({
                          Name: "",
                          icon: "",
                          description: "",
                          IconID: null,
                        });
                        const newFacility = [
                          {
                            name: formStateFacilities.Name,
                            iconId: formStateFacilities.IconID,
                            description: formStateFacilities.description,
                          },
                        ];
                        await addFacilities({
                          id: building?.data?.id,
                          facility: newFacility,
                        });

                        refetch();

                        setSelectIcon("");
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
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="col-3 button text-white me-3 bg-primary"
                  disabled={props.isSubmitting && isUpload}
                >
                  {props.isSubmitting && isUpload ? "Please Wait" : "Save"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateBuilding;
