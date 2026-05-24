import React from 'react'
import './CoverImage.css'
import cover from '../../assets/awais4.webp'

const CoverImage = () => {
  return (
    <div className="cover-image-container">

      {/* Glow Background */}
      <div className="image-bg"></div>

      {/* Image Card */}
      <div className="image-wrapper">
        <img
          src={cover}
          alt="Awais"
          className="cover-image"
          fetchpriority="high"
          loading="eager"
          width="420"
          height="520"
        />
      </div>

    </div>
  )
}

export default CoverImage
