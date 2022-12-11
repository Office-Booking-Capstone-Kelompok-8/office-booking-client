/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';

const useRegion = ({ cityName }) => {
  useEffect(() => {
    getCity();
    getCityByName();
  }, [cityName]);

  const [city, setCity] = useState([]);
  const [cityByName, setCityByName] = useState({});
  const [district, setDistrict] = useState([]);
  const getCity = async () => {
    await fetch(`${BASE_URL}/locations/cities`)
      .then((res) => res.json())
      .then((response) => {
        setCity(response?.data);
      })
      .catch((err) => console.log(err));
  };

  const getDistrict = async (id) => {
    await fetch(`${BASE_URL}/locations/districts?cityId=${id}`)
      .then((res) => res.json())
      .then((res) => setDistrict(res?.data))
      .catch((err) => console.log(err));
  };

  // Set City By Name
  const getCityByName = () => {
    const cityFilter = city
      .filter((c) => c?.name === cityName)
      .map((c) => ({ label: c?.name, value: c?.id }));
    setCityByName(cityFilter[0]);
  };

  return { city, getDistrict, district, cityByName };
};

export default useRegion;
