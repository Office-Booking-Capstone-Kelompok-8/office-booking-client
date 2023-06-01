/* eslint-disable react-hooks/exhaustive-deps */
import {
  mdiCheck,
  mdiClockTimeFourOutline,
  mdiCloseCircleOutline,
  mdiCurrencyUsd,
  mdiEyeOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react';

const IconStatus = ({ status, total, count }) => {
  const [color, setColor] = useState('');
  const [iconStatus, setIcon] = useState(mdiClockTimeFourOutline);

  useEffect(() => {
    switch (status.id) {
      case 1:
        setColor('warning');
        setIcon(mdiClockTimeFourOutline);
        break;
      case 2:
        setColor('error');
        setIcon(mdiCloseCircleOutline);
        break;
      case 3:
        setColor('error');
        setIcon(mdiCloseCircleOutline);
        break;
      case 4:
        setColor('primary');
        setIcon(mdiCurrencyUsd);
        break;
      case 5:
        setColor('success');
        setIcon(mdiEyeOutline);
        break;
      case 6:
        setColor('success');
        setIcon(mdiCheck);
        break;
      default:
        break;
    }
  }, [status]);
  return (
    <div
      className={`d-flex ${
        total && 'shadow-sm'
      } align-items-center text-${color} bg-${
        total || color
      }-light py-1 px-2 rounded justify-content-between`}
      style={{ fontSize: '.6rem' }}
    >
      <div className="d-flex justify-content-center w-100 align-items-center">
        <Icon path={iconStatus} size={0.7} className="me-1" />
        <span>{status.status}</span>
      </div>
      {total && <span className="text-md fw-bold ms-1">{count}</span>}
    </div>
  );
};

export default IconStatus;
