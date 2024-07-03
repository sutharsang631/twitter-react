import React from 'react';
import Slider from 'react-slick';
import Carousel from './components/Carousel';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './components/NextArrow';
import PrevArrow from './components/PrevArrow';

function App() {
  const tweetIds = [
    '1735895062792548532',
    '1737807672832061644',
    '1737813838081253832',
    '1737866443948167277',
    '1738114123827990937',
    '1736695173592342735',
    '1736598695284719725',
    '1738066319457550392',
    '1737826819045240873',
  ];

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
    <div className="App">
      <h1>Twitter Tweets</h1>
      <Slider {...settings}>
        {tweetIds.map((tweetId) => (
          <div key={tweetId} className="tweet-container">
            <Carousel tweetId={tweetId} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;