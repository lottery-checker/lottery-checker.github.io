import React from 'react';
import './Banner.css';

export const Banner = () => {
  const imageURL = process.env.PUBLIC_URL+"/images/banner.jpg";
  return (
    <div className="banner">
      <div className="banner__image" style={{ backgroundImage: `url(${imageURL})` }}>
        <div className="banner--layer">
          zz
        </div>
      </div>
    </div>
  )
}
export default Banner;
