import { Question } from './question';

export class AngularQuestion extends Question{
    askQuestion(): string {
        return "What is Angular?";
    }
    
}