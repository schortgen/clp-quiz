import type { Quiz, Question } from './types';

export const parseQuizText = (text: string, id: string, name: string): Quiz => {
  const questions: Question[] = [];
  // Split the text into blocks for each question. Questions are separated by one or more blank lines.
  const questionBlocks = text.trim().split(/\n\s*\n/);

  questionBlocks.forEach((block, index) => {
    if (!block.trim().startsWith('Q\\')) return;

    const lines = block.trim().split('\n');
    let questionText = '';
    const options: string[] = [];
    let correctAnswer = '';
    let explanation = '';

    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('Q\\')) {
        questionText = trimmedLine.substring(2).trim();
      } else if (trimmedLine.startsWith('O\\')) {
        options.push(trimmedLine.substring(2).trim());
      } else if (trimmedLine.startsWith('A\\')) {
        correctAnswer = trimmedLine.substring(2).trim();
      } else if (trimmedLine.startsWith('E\\')) {
        explanation += trimmedLine.substring(2).trim() + ' ';
      }
    });

    if (questionText && options.length > 0 && correctAnswer) {
      questions.push({
        id: index + 1,
        question: questionText,
        options,
        correctAnswer,
        explanation: explanation.trim() || 'No explanation provided.',
      });
    }
  });

  return { id, name, questions };
};
