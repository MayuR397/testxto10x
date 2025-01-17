import React from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';

// Styled-components for the section
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 25vh; /* Adjusted height to 25% of the viewport height */
  background-image: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

const TypingText = styled.h2`
  font-size: 40px;
`;

const TenXSection = () => {
  return (
    <Section>
      <Title>Unleash Your Inner 10x</Title>
      <ReactTypingEffect
        text={["Developer", "Analyst", "Tester"]} // Text to type
        speed={100} // Speed of typing (ms)
        eraseSpeed={100} // Speed of erasing (ms)
        typingDelay={500} // Delay before typing starts
        eraseDelay={1500} // Delay before erasing starts
        cursor={'_'} // Cursor character
        displayTextRenderer={(text, i) => {
          return <TypingText>{text}</TypingText>;
        }}
      />
    </Section>
  );
};

export default TenXSection;
