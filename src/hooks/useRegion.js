import { useEffect, useState } from 'react';

const useRegion = () => {
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const getCity = async () => {
    await fetch(
      'https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=31'
    )
      .then((res) => res.json())
      .then((response) => setCity(response?.kota_kabupaten))
      .catch((err) => console.log(err));
  };

  const getDistrict = async (id) => {
    await fetch(
      `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`
    )
      .then((res) => res.json())
      .then((res) => setDistrict(res?.kecamatan))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCity();
  }, []);

  return { city, getDistrict, district };
};

export default useRegion;
