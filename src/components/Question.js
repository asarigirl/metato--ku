
import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';

const Question = ({ question, onAnswer }) => {
  return (
    <Container>
      <Typography variant="h5" component="h1" gutterBottom>
        <Box component="span" sx={{ mr: 1 }}>💧</Box>
        {question.question}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            onClick={() => onAnswer(option)}
            sx={{ m: 1, width: '80%' }}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default Question;
