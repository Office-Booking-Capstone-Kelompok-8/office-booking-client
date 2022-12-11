import { useState } from 'react';
import {
  useAddFacilitiesMutation,
  useUpdateBuildingMutation,
} from '../store/building/buildingApiSLice';
import Auth from '../utils/auth';
import { BASE_URL } from '../utils/constants';

const useUploadImgBuilding = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [updateBuilding, { error }] = useUpdateBuildingMutation();
  const [addFacilities, { error: errorFacility }] = useAddFacilitiesMutation();

  if (error || errorFacility) {
    console.log(error, errorFacility);
  }

  const uploadPicture = async (
    imgData,
    name,
    city,
    district,
    address,
    capacity,
    description,
    annual,
    monthly,
    facilities
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
          // Update Building
          await updateBuilding({
            buildingID: res?.data?.id,
            name: name,
            description: description,
            capacity: capacity,
            location: { districtId: district, cityId: city, address: address },
            price: { annual, monthly },
          });

          // Add facilities
          await addFacilities({
            id: res?.data?.id,
            facility: facilities,
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
