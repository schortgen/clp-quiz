
import React, { useState, useEffect } from 'react';
import type { Quiz, MissedQuestionInfo, Question } from '../types';

interface QuizProps {
  quiz: Quiz;
  onFinishQuiz: (score: number, missedQuestions: MissedQuestionInfo[], total: number) => void;
}

const QuizComponent: React.FC<QuizProps> = ({ quiz, onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestionInfo[]>([]);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm to randomize questions
    const array = [...quiz.questions];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    setShuffledQuestions(array);
    
    // Reset state for new quiz
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setMissedQuestions([]);
  }, [quiz]);

  if (shuffledQuestions.length === 0) {
    return null; // Or a loading component
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.correctAnswer;
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      setMissedQuestions(prev => [
        ...prev,
        {
          question: currentQuestion.question,
          correctAnswer: currentQuestion.correctAnswer,
          explanation: currentQuestion.explanation,
        }
      ]);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onFinishQuiz(score, missedQuestions, shuffledQuestions.length);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };
  
  const getOptionClasses = (option: string) => {
    if (!isAnswered) {
      return "border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700";
    }
    if (option === currentQuestion.correctAnswer) {
      return "border-green-500 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 font-bold";
    }
    if (option === selectedOption && option !== currentQuestion.correctAnswer) {
      return "border-red-500 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200";
    }
    return "border-slate-300 dark:border-slate-600 opacity-60";
  };


  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="mb-6">
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{quiz.name}</p>
        <h2 className="text-xl font-bold text-slate-600 dark:text-slate-300">
          Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
        </h2>
      </div>

      <p className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
        {currentQuestion.question}
      </p>

      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            disabled={isAnswered}
            className={`w-full text-left flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${getOptionClasses(option)}`}
          >
            <span className="flex-1 text-lg text-slate-700 dark:text-slate-200">{option}</span>
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
          {isCorrect ? (
             <p className="text-lg font-bold text-green-600 dark:text-green-400">Correct!</p>
          ) : (
            <div>
              <p className="text-lg font-bold text-red-600 dark:text-red-400">Incorrect</p>
              <p className="text-md text-slate-700 dark:text-slate-300 mt-2">
                The correct answer is: <strong className="text-slate-900 dark:text-white">{currentQuestion.correctAnswer}</strong>
              </p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{currentQuestion.explanation}</p>
            </div>
          )}
           <div className="mt-6 flex justify-center">
            <button onClick={handleNext} className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-transform duration-200">
              {isLastQuestion ? 'Calculate Score' : 'Next Question'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;