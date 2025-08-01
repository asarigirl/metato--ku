
import React from 'react';
import { Typography, Button, Container } from '@mui/material';

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
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        診断結果
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        あなたの「メタメタ大作戦大好き芸人度」は...
      </Typography>
      <Typography variant="h3" component="p" gutterBottom>
        {getRank()}
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        {score} / 20問正解
      </Typography>
      <Button variant="contained" color="primary" onClick={onRestart}>
        もう一度診断する
      </Button>
    </Container>
  );
};

export default Result;
