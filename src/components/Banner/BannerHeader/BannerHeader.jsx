import React from 'react';
import './BannerHeader.css';

export const BannerHeader = ({title}) => {
  return (
    <div className="banner__header">
      <h3 className="banner__header--yellow">{title}</h3>
    </div>
  )
}
export default BannerHeader;
