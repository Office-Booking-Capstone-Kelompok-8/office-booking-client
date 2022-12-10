import { useState } from 'react';
import { useUpdateBuildingMutation } from '../store/building/buildingApiSLice';
import Auth from '../utils/auth';
import { BASE_URL } from '../utils/constants';

const useUploadImgBuilding = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [updateBuilding, { isError, error }] = useUpdateBuildingMutation();

  const uploadPicture = async (
    imgData,
    name,
    city,
    district,
    address,
    capacity
  ) => {
    try {
      setIsUpload(true);
      await fetch(`${BASE_URL}/admin/buildings/id`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Auth.getAccessToken()}`,
        },
      })
        .then((res) => res.json())
        .then(async (res) => {
          // Upload Gambar
          await imgData.forEach(async (formData) => {
            await fetch(
              `${BASE_URL}/admin/buildings/${res?.data?.id}/pictures`,
              {
                method: 'POST',
                body: formData,
                headers: {
                  Authorization: `Bearer ${Auth.getAccessToken()}`,
                },
              }
            )
              .then(async (res) => await res.json())
              .catch((err) => console.log(err));
          });
          await updateBuilding({
            buildingID: res?.data?.id,
            name: name,
            location: { districtId: district, cityId: city, address: address },
            capacity: capacity,
          });
        })
        .catch((err) => console.log(err));
      setIsUpload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { uploadPicture, isUpload };
};

export default useUploadImgBuilding;
