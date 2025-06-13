import React, { useRef } from 'react';
import './Work Experiences.css';
import { WORK_EXPERIENCES } from '../../utils/data.js';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h5>

      <motion.div
        className='experience-content'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className='arrow arrow-left'
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={slideLeft}
        >
          <ArrowLeft size={24} />
        </motion.div>

        <motion.div
          className='arrow arrow-right'
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={slideRight}
        >
          <ArrowRight size={24} />
        </motion.div>

        <Slider ref={slideRef} {...settings}>
          {WORK_EXPERIENCES.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <ExperienceCard details={item} />
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
