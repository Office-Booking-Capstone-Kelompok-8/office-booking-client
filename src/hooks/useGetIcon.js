/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGetIconFacilitiesQuery } from "../store/building/buildingApiSLice";

const useGetIcon = () => {
  const {
    data: iconData,
    isError,
    isSuccess,
    error,
  } = useGetIconFacilitiesQuery();

  const [icons, setIconData] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      setIconData(iconData?.data);
    }
  }, [iconData, isSuccess]);

  return icons;
};

export default useGetIcon;
