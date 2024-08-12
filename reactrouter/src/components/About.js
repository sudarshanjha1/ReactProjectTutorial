import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/Contact');
    
  };

  return (
    <>
      <section>
        <h1>About page</h1>
        <button onClick={goToContact}>Go to Contact Page</button>
      </section>
    </>
  );
};

export default About;
