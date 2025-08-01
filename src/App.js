import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Question from './components/Question';
import Result from './components/Result';
import { quizData } from './quizData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: ['"M PLUS Rounded 1c"' ,'sans-serif'].join(','),
  },
});

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            メタトーーク！ メタメタ大作戦大好き芸人度診断
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        {showResult ? (
          <Result score={score} onRestart={handleRestart} />
        ) : (
          <Question
            question={quizData[currentQuestion]}
            onAnswer={handleAnswer}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;

