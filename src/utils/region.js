import { BASE_URL } from './constants';

export const getSelectCity = async (cityName) => {
  let city = [];
  const cities = await fetch(`${BASE_URL}/locations/cities`).then((res) =>
    res.json()
  );

  city = cities?.data;
  const filterCity = city?.filter((c) => c?.name === cityName);
  return {
    label: filterCity[0]?.name,
    value: filterCity[0]?.id,
  };
  // cities.
};
