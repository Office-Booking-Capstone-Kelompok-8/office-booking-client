import { useState } from 'react';
import { useUpdateBuildingMutation } from '../store/building/buildingApiSLice';
import Auth from '../utils/auth';
import { BASE_URL } from '../utils/constants';

const useUploadImgBuilding = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [updateBuilding, { isError, error }] = useUpdateBuildingMutation();
  console.log(error);

  const uploadPicture = async (
    imgData,
    name,
    city,
    district,
    address,
    capacity,
    description,
    annual,
    monthly
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
          console.log(description);
          await updateBuilding({
            buildingID: res?.data?.id,
            name: name,
            description: description,
            capacity: capacity,
            location: { districtId: district, cityId: city, address: address },
            price: { annual, monthly },
          });
          for (let formData of imgData) {
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
          }
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
