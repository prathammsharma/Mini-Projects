import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizService} from '../quiz.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit, OnDestroy{
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  score: number = 0;
  timer: number = 30;
  interval: any;
  isQuizOver: boolean = false;

  constructor(private quizService: QuizService){}

  ngOnInit(): void{
    this.questions = this.quizService.getQuestions();
    this.startTimer();
  }

  startTimer(): void{
    this.interval = setInterval(() =>{
      if (this.timer > 0){
        this.timer--;
      } else {
        this.endQuiz();
      }
    }, 1000);
  }

  stopTimer(): void{
    if (this.interval){
      clearInterval(this.interval);
    }
  }

  nextQuestion(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.quizService.checkAnswer(this.selectedAnswer, currentQuestion.correctAnswer)){
      this.score++;
    }

    this.currentQuestionIndex++;
    this.selectedAnswer = '';

    if (this.currentQuestionIndex === this.questions.length){
      this.endQuiz();
    }
  }

  endQuiz(): void{
    this.isQuizOver = true;
    this.stopTimer();
  }

  restartQuiz(): void{
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = 30;
    this.isQuizOver = false;
    this.startTimer();
  }

  ngOnDestroy(): void{
    this.stopTimer();
  }
}
