import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

export default NextArrow;