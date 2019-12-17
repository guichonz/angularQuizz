import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QUIZZES } from '../data/quizzes';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  //- Retourne la liste de tous les quizzes.
  loadQuizzes(): Quiz[] {
    return QUIZZES;
  }

  //- Retourne un quiz complet, avec ses questions.
  loadQuiz(quizId: number): Quiz {
    return QUIZZES.find(quiz => quiz.id === quizId);
  }

}
