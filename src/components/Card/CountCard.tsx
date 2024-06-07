import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface CountCardProps {
  value: number;
  name: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  width: 250px;
  height: 250px;
  background: #636262;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Ball = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  margin: 20px 0;
  position: relative;
`;

const Name = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowUpIcon = styled(FiArrowUp)`
  color: green;
  font-size: 2.5rem;
  position: absolute;
  bottom: -30px;
`;

const ArrowDownIcon = styled(FiArrowDown)`
  color: red;
  font-size: 2.5rem;
  position: absolute;
  bottom: -30px;
`;

const CountCard: React.FC<CountCardProps> = ({ value, name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = value / 100;
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(currentCount));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  const increase = count > 0 && count <= 100 && value > 0 && value <= 100 && count < value;
  const decrease = count > 0 && count <= 100 && value > 0 && value <= 100 && count > value;

  return (
    <CardContainer>
      <Name>{name}</Name>
      <Ball
        as={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}%
        {increase && <ArrowUpIcon />}
        {decrease && <ArrowDownIcon />} {/* Usar a seta para baixo quando há diminuição */}
      </Ball>
    </CardContainer>
  );
};

export default CountCard;
