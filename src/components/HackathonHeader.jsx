import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-image: linear-gradient(to right, #6a11cb, #2575fc);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
`;

const ProgressBarBackground = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: #61dafb;
  transition: width 1s linear;
`;

const HackathonName = styled.h1`
  font-size: 2.5em;
  margin: 10px 0;
`;

const Tagline = styled.p`
  font-size: 1.2em;
  margin: 5px 0 20px;
  font-style: italic;
`;

const CountdownContainer = styled.div`
  margin-top: 20px;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Funky font */
  font-size: 2.5em;
`;

const HackathonHeader = () => {
  const hackathonName = "Hackathon 2025";
  const tagline = "Code, Collaborate, Conquer!";
  const startTime = new Date('2025-01-17T11:00:00');
  const endTime = new Date('2025-01-19T11:00:00');
  const totalDuration = endTime - startTime;

  const [timeLeft, setTimeLeft] = useState(endTime - new Date());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeRemaining = endTime - now;

      if (timeRemaining <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
        setProgress(100);
      } else {
        setTimeLeft(timeRemaining);
        setProgress(((totalDuration - timeRemaining) / totalDuration) * 100);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, totalDuration]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days > 0 ? `${days}d ` : ''}${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Container>
      {/* <ProgressBarBackground>
        <ProgressBarFill style={{ width: `${progress}%` }} />
      </ProgressBarBackground> */}
      <HackathonName>{hackathonName}</HackathonName>
      <Tagline>{tagline}</Tagline>
      <CountdownContainer>
        {timeLeft > 0 ? formatTime(timeLeft) : "Hackathon Over!"}
      </CountdownContainer>
    </Container>
  );
};

export default HackathonHeader;
