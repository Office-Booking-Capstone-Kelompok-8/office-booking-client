import { useState } from 'react';
import Auth from '../utils/auth';

const useUploadPictureUser = () => {
  const [isUpload, setIsUpload] = useState(false);

  const uploadPicture = async (uid, data) => {
    setIsUpload(true);
    try {
      await fetch(
        `https://api.fortyfourvisual.com/v1/admin/users/${uid}/picture`,
        {
          method: 'PUT',
          body: data,
          headers: {
            Authorization: `Bearer ${Auth.getAccessToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setIsUpload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { uploadPicture, isUpload };
};

export default useUploadPictureUser;
