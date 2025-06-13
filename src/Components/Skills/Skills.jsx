import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import Skillcard from './Skillcard/Skillcard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className='skills-container' id='Skills'>
      <motion.h5
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Proficiency
      </motion.h5>

      <motion.div
        className='skills-content'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className='skills'
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {SKILLS.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Skillcard
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='skills-info'
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
