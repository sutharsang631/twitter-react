// Carousel.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

function Carousel({ tweetId }) {
  const [tweetData, setTweetData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://react-tweet.vercel.app/api/tweet/${tweetId}`
        );
        setTweetData(response.data.data);
      } catch (error) {
        console.error(`Error fetching tweet data for ID ${tweetId}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tweetId]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings}>
          {tweetData.mediaDetails.map((media, index) => (
            <div key={index} className="tweet-slide">
              <div className="tweet-info">
                <img
                  src={tweetData.user.profile_image_url_https}
                  alt={`Profile ${tweetData.user.screen_name}`}
                  className="profile-image"
                />
                <div className="user-info">
                  <p className="user-name">@{tweetData.user.screen_name}</p>
                  <p className="tweet-text">{tweetData.text}</p>
                  <p className="hashtags">
                    Hashtags: {tweetData.entities.hashtags.map((tag) => `#${tag.text}`).join(' ')}
                  </p>
                </div>
              </div>
              <img
                src={media.media_url_https}
                alt={`Tweet Media ${index + 1}`}
                className="tweet-media"
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Carousel;
