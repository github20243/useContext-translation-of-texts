import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';
import texts from './texts';

const Paragraph = styled.p`
  background-color: ${({ theme }) => theme.body === '#FFF' ? '#f0f0f0' : '#333'};
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.body === '#FFF' ? '#ccc' : '#555'};
  margin-top: 1rem;
`;

const TextBlocks = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      {texts[language].map((text, index) => (
        <Paragraph key={index}>{text}</Paragraph>
      ))}
    </div>
  );
};

export default TextBlocks;
