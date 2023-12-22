import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

export default PrevArrow;