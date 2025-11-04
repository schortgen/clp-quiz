
import React, { useState } from 'react';
import type { Quiz } from '../types';

interface TestSelectionProps {
  quizzes: Quiz[];
  onStartQuiz: (quizId: string) => void;
}

const TestSelection: React.FC<TestSelectionProps> = ({ quizzes, onStartQuiz }) => {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedQuiz(event.target.value);
  };

  const handleNextClick = () => {
    if (selectedQuiz) {
      onStartQuiz(selectedQuiz);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8 transform transition-all duration-500">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">
          CLP Quiz
        </h1>
        <h2 className="text-2xl text-slate-500 dark:text-slate-400 mb-8">
          Choose your test...
        </h2>
      </div>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <label
            key={quiz.id}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors duration-200 max-w-sm mx-auto ${
              selectedQuiz === quiz.id
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/50'
                : 'border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            <input
              type="radio"
              name="quiz"
              value={quiz.id}
              checked={selectedQuiz === quiz.id}
              onChange={handleSelectionChange}
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="ml-4 text-lg font-medium text-slate-700 dark:text-slate-200">{quiz.name}</span>
          </label>
        ))}
      </div>
      {selectedQuiz && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleNextClick}
            className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-transform duration-200"
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
};

export default TestSelection;
