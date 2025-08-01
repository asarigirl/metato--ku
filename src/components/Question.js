
import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const Question = ({ question, onAnswer }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {question.question}
      </Typography>
      {question.options.map((option, index) => (
        <Button
          key={index}
          variant="contained"
          color="primary"
          onClick={() => onAnswer(option)}
          sx={{ m: 1 }}
        >
          {option}
        </Button>
      ))}
    </Container>
  );
};

export default Question;
