import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { Ball, CardContainer, Name } from './style';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface CountCardProps {
  value: number;
  name: string;
}





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
