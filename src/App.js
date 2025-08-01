import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import Question from './components/Question';
import Result from './components/Result';
import { quizData } from './quizData';

const theme = createTheme({
  palette: {
    primary: {
      main: '#65BBE9', // 水色
    },
    background: {
      default: '#ffffff', // 背景色: 白
    },
  },
  typography: {
    fontFamily: ['"M PLUS Rounded 1c"', 'sans-serif'].join(','),
  },
});

const AppTitle = () => (
  <Typography
    variant="h4"
    component="div"
    sx={{
      flexGrow: 1,
      color: 'white',
      textShadow: '2px 2px 4px #000000',
      textAlign: 'center',
    }}
  >
    🌈 メタトーーク！
  </Typography>
);

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
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <AppTitle />
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4, mb: 4 }}>
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

