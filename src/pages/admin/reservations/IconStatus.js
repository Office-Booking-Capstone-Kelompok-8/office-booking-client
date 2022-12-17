/* eslint-disable react-hooks/exhaustive-deps */
import {
  mdiClockTimeFourOutline,
  mdiCloseCircleOutline,
  mdiCurrencyUsd,
  mdiEyeOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import React, { useEffect, useState } from 'react';

const IconStatus = ({ status }) => {
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
      default:
        break;
    }
  }, [status]);
  return (
    <div
      className={`d-flex align-items-center text-${color} bg-${color}-light py-1 px-2 rounded justify-content-center`}
      style={{ fontSize: '.6rem' }}
    >
      <Icon path={iconStatus} size={0.7} className="me-1" />
      <span>{status.status}</span>
    </div>
  );
};

export default IconStatus;
