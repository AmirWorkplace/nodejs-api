import React from 'react';
import { icons } from '../../assets/images';

export const LoadingCircle = () => {
  return (
    <div className="loader-body">
      <div className="loader">
        <div className="loader_inner">
          <div className="loader_logo">
            <img src={icons.logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCircle;
