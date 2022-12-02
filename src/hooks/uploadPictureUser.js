import { useState } from 'react';
import Auth from '../utils/auth';

const useUploadPictureUser = () => {
  const [isUpload, setIsUpload] = useState(false);

  const uploadPicture = async (uid, data) => {
    try {
      setIsUpload(true);
      await fetch(
        `https://dev.fortyfourvisual.com/v1/admin/users/${uid}/picture`,
        {
          method: 'PUT',
          body: data,
          headers: {
            Authorization: `Bearer ${Auth.getAccessToken()}`,
          },
        }
      );
      setIsUpload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { uploadPicture, isUpload };
};

export default useUploadPictureUser;
