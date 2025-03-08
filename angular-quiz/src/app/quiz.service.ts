import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService{
  private questions = [
    {
      question: 'What is the capital of India?',
      options: ['Rome', 'Kabul', 'New Delhi', 'Tokyo'],
      correctAnswer: 'New Delhi',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      question: 'Who wrote "Ramayana"?',
      options: ['Tulsidas', 'Kalidasa', 'Valmiki', 'Vyasa'],
      correctAnswer: 'Valmiki',
    },
  ];

  getQuestions(){
    return this.questions;
  }

  checkAnswer(selectedAnswer: string, correctAnswer: string): boolean{
    return selectedAnswer === correctAnswer;
  }
}
