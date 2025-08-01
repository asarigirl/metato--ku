
import React from 'react';
import { Typography, Button, Container, Box } from '@mui/material';

const Result = ({ score, onRestart }) => {
  const getRank = () => {
    if (score >= 18) {
      return 'メタメタ大作戦大好き芸人';
    } else if (score >= 15) {
      return 'アメトーーク！大好き芸人';
    } else if (score >= 10) {
      return 'テレビ朝日大好き芸人';
    } else if (score >= 5) {
      return 'テレビ大好き芸人';
    } else {
      return 'まだまだこれから芸人';
    }
  };

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        診断結果
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        あなたの「メタメタ大作戦大好き芸人度」は...
      </Typography>
      <Typography variant="h3" component="p" gutterBottom color="primary">
        {getRank()}
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        <Box component="span" sx={{ mr: 1 }}>💧</Box>
        {score} / 20問正解
        <Box component="span" sx={{ ml: 1 }}>💧</Box>
      </Typography>
      <Button variant="contained" color="primary" onClick={onRestart} sx={{ mt: 2 }}>
        もう一度診断する
      </Button>
    </Container>
  );
};

export default Result;
