
import { Quiz } from '../models/quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient,
              @Inject('BACKEND_URL') private url: string){ }

  //- Retourne la liste de tous les quizzes.
  loadQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.url}/quizzes`)
    .pipe(
      map((jsonQuizzes: any[]) => jsonQuizzes.map(jsonQuiz => new Quiz(jsonQuiz)))
      );
 // Ici, utiliser data
  }

  //- Retourne un quiz complet, avec ses questions.
  loadQuiz(quizId: number): Observable<Quiz> {
    return this.http.get(`${this.url}/quizzes/${quizId}`)
    .pipe(map(jsonQuiz => new Quiz(jsonQuiz)));
  }
}