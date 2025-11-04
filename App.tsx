import React, { useState, useEffect } from 'react';
import TestSelection from './components/TestSelection';
import Quiz from './components/Quiz';
import Score from './components/Score';
import { parseQuizText } from './parser';
import type { Quiz as QuizType, MissedQuestionInfo } from './types';

// NOTE: The application now dynamically loads quiz data from the .txt files
// in the /data directory. The old .ts data files (e.g., generalKnowledge.ts,
// airBrakes.ts, quizzes.ts, etc.) are no longer used and can be deleted.

// Define metadata for quizzes
const quizMetadata = [
  { id: 'general_knowledge', name: 'General Knowledge', file: '/data/generalKnowledge.txt' },
  { id: 'air_brakes', name: 'Air Brakes', file: '/data/airBrakes.txt' },
  { id: 'combination', name: 'Combination', file: '/data/combination.txt' },
  { id: 'passenger', name: 'Passenger', file: '/data/passenger.txt' },
  { id: 'school_bus', name: 'School Bus', file: '/data/schoolBus.txt' },
  { id: 'doubles_triples', name: 'Doubles/Triples', file: '/data/doublesTriples.txt' },
  { id: 'tanker', name: 'Tanker', file: '/data/tanker.txt' },
  { id: 'hazardous_materials', name: 'Hazardous Materials', file: '/data/hazardousMaterials.txt' },
];


const App: React.FC = () => {
  const [page, setPage] = useState<'selection' | 'quiz' | 'score'>('selection');
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [finalScore, setFinalScore] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestionInfo[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [quizzes, setQuizzes] = useState<QuizType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizPromises = quizMetadata.map(async (meta) => {
          const response = await fetch(meta.file);
          if (!response.ok) {
            throw new Error(`Failed to load quiz: ${meta.name}`);
          }
          const text = await response.text();
          return parseQuizText(text, meta.id, meta.name);
        });

        const loadedQuizzes = await Promise.all(quizPromises);
        setQuizzes(loadedQuizzes);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unknown error occurred while loading quizzes.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, []);

  const startQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    setPage('quiz');
  };

  const finishQuiz = (score: number, missed: MissedQuestionInfo[], total: number) => {
    setFinalScore(score);
    setMissedQuestions(missed);
    setTotalQuestions(total);
    setPage('score');
  };

  const restartQuiz = () => {
    setPage('selection');
    setSelectedQuizId(null);
    setFinalScore(0);
    setMissedQuestions([]);
    setTotalQuestions(0);
  };
  
  const renderLoading = () => (
    <div className="flex justify-center items-center p-8">
        <div className="text-xl font-semibold text-slate-700 dark:text-slate-200">Loading Quizzes...</div>
    </div>
  );

  const renderError = () => (
    <div className="text-center p-8 bg-red-100 dark:bg-red-900/50 rounded-lg">
        <h2 className="text-2xl font-bold text-red-700 dark:text-red-300">Error</h2>
        <p className="mt-2 text-red-600 dark:text-red-400">{error}</p>
    </div>
  );

  const renderPage = () => {
    if (loading) return renderLoading();
    if (error) return renderError();
    if (!quizzes) return renderError(); // Should not happen if no error, but for type safety

    switch (page) {
      case 'quiz':
        const selectedQuiz = quizzes.find(q => q.id === selectedQuizId);
        if (!selectedQuiz) {
            return <TestSelection quizzes={quizzes} onStartQuiz={startQuiz} />;
        }
        return <Quiz quiz={selectedQuiz} onFinishQuiz={finishQuiz} />;
      case 'score':
        return (
          <Score
            score={finalScore}
            totalQuestions={totalQuestions}
            missedQuestions={missedQuestions}
            onRestart={restartQuiz}
          />
        );
      case 'selection':
      default:
        return <TestSelection quizzes={quizzes} onStartQuiz={startQuiz} />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 print:p-0 print:block print:bg-white">
       <div className="w-full max-w-2xl print:w-full print:max-w-none">
        {renderPage()}
       </div>
    </main>
  );
};

export default App;