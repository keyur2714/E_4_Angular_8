import { Employee } from '../model/employee.model';
import { Observable, of, from } from 'rxjs';
import { map,filter } from 'rxjs/operators';


export class EmployeeService {

    
    getEmployeesWithObservable() : Observable<Employee[]>{
        return of(this.getEmployees());
    }

    getEmployees():Employee[]{
        let emp1 = new Employee(1,"keyur");
        let emp2 = new Employee(2,"denish");
        let emp3 = new Employee(3,"vinit");

        return [emp1,emp2,emp3];
    }

    getNamesObservable() : Observable<string[]>{
        return this.getEmployeesWithObservable().pipe(
            filter(flag => true),
            map(empList => {                    
                    let names: string[] = [];
                    for(let emp of empList){
                        names.push(emp.name);
                    }
                    return names;
                }                
            )                            
        );
    }

    getEmpListAsStream() : Observable<Employee[]>{
        let newEmpArr = from([this.getEmployees()]);        
        return newEmpArr.pipe(
            map(emp => {
                return emp;
            })
        );
    }

}