import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { AngularQuestion } from './angular.question';
import { JavaQuestion } from './java.question';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [    
    {
      provide : Question,
      useClass : JavaQuestion
    }
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private questionObj : Question) { }

  ngOnInit() {
    this.question = this.questionObj.askQuestion();
  }

}
