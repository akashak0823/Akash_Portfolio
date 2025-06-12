import React, { useRef } from 'react';
import './Work Experiences.css';
import { WORK_EXPERIENCES } from '../../utils/data.js';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react'; 

const WorkExperience = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section className='experience-container' id='work-experience'>
      <h5>Work Experience</h5>
      <div className='experience-content'>
        <div className='arrow arrow-left' onClick={slideLeft}>
          <ArrowLeft size={28} />
        </div>
        <div className='arrow arrow-right' onClick={slideRight}>
          <ArrowRight size={28} />
        </div>

        <Slider ref={slideRef} {...settings}>
          {WORK_EXPERIENCES.map((item, index) => (
            <ExperienceCard key={index} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
