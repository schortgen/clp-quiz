import React from 'react';
import type { MissedQuestionInfo } from '../types';
import { PrintIcon, EmailIcon } from './Icons';

interface ScoreProps {
  score: number;
  totalQuestions: number;
  missedQuestions: MissedQuestionInfo[];
  onRestart: () => void;
}

const Score: React.FC<ScoreProps> = ({ score, totalQuestions, missedQuestions, onRestart }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent! You're ready for the road!";
    if (percentage >= 70) return "Good job! A little more practice and you'll be an expert.";
    if (percentage >= 50) return "You're on the right track. Review the missed questions to improve.";
    return "Keep studying! Reviewing these topics will help you succeed.";
  };
  
  const handlePrint = () => {
      window.print();
  };
  
  const handleEmail = () => {
    const subject = "My CLP Quiz Results - Missed Questions";
    let body = `I missed the following questions on the CLP practice quiz:\n\n`;
    missedQuestions.forEach((q, index) => {
        body += `${index + 1}. Question: ${q.question}\n`;
        body += `   Correct Answer: ${q.correctAnswer}\n`;
        body += `   Explanation: ${q.explanation}\n\n`;
    });
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  const handleExit = () => {
    // Note: window.close() may not work in all browsers due to security restrictions.
    // It's generally better to let users close their own tabs.
    // This button is included to meet the prompt's requirements.
    alert("You can now close this browser tab.");
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-6 md:p-8 score-card print:shadow-none print:p-0 print:m-0">
      <div className="text-center print:hidden">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Quiz Complete!</h1>
        <p className="text-7xl font-bold text-indigo-600 dark:text-indigo-400 my-4">{percentage}%</p>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          You answered {score} out of {totalQuestions} questions correctly.
        </p>
        <p className="mt-2 text-lg font-medium text-slate-500 dark:text-slate-400">{getPerformanceMessage()}</p>
      </div>

      {missedQuestions.length > 0 && (
        <div className="mt-10 print:mt-0" id="missed-questions-section">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b-2 border-slate-200 dark:border-slate-700 pb-2 print:text-black">
            Review Your Missed Questions
          </h2>
          <div className="space-y-6">
            {missedQuestions.map((q, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg print:bg-transparent print:p-0 print:pb-4 print:border-b print:border-gray-300">
                <p className="font-semibold text-slate-700 dark:text-slate-200 print:text-black">{index + 1}. {q.question}</p>
                <p className="mt-2 text-green-700 dark:text-green-400 print:text-black">
                  <span className="font-bold">Correct Answer:</span> {q.correctAnswer}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 print:text-black">
                  <span className="font-bold">Explanation:</span> {q.explanation}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 print:hidden">
            <button onClick={handlePrint} className="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PrintIcon />
                Print
            </button>
            <button onClick={handleEmail} className="flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <EmailIcon />
                Email
            </button>
          </div>
        </div>
      )}

      <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 print:hidden">
        <button
          onClick={onRestart}
          className="w-full px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-transform duration-200"
        >
          Take Another Test
        </button>
        <button
            onClick={handleExit}
            className="w-full px-8 py-3 bg-slate-500 text-white font-bold rounded-lg shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
        >
          Exit App
        </button>
      </div>
       <style>
        {`
          @media print {
            .score-card {
                color: black !important;
            }
            #missed-questions-section div[key] {
              page-break-inside: avoid;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Score;