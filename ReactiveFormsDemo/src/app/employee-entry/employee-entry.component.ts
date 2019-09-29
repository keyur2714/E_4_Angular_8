import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Department } from './department.model';

@Component({
  selector: 'app-employee-entry',
  templateUrl: './employee-entry.component.html',
  styleUrls: ['./employee-entry.component.css']
})
export class EmployeeEntryComponent implements OnInit {

  employeeEntryForm;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.createEmployeeEntryForm();
  }

  createEmployeeEntryForm():void{
    this.employeeEntryForm = this.formBuilder.group({
      name : this.formBuilder.control('',[Validators.required,Validators.minLength(3)]),
      city : this.formBuilder.control(''),
      salary : this.formBuilder.control('',[Validators.required,Validators.pattern('^[0-9]+$')]),
      departments : this.formBuilder.array([])
    })
  }

  addDepartment(){
	  let fg = this.formBuilder.group(new Department());
	  this.empFormArray.push(fg);	  
  }

  get empFormArray(): FormArray{
	  return this.employeeEntryForm.get('departments') as FormArray;
  }

  save():void {
    console.log(this.employeeEntryForm.value);
  }

  addNewDepartment() : void {
    let newDepartmentGroup = this.formBuilder.group(new Department());
    this.empFormArray.push(newDepartmentGroup);
  }

  updateValidations() : void {        
    let name = this.employeeEntryForm.get('name').value;    
    if(name === 'keyur'){
      alert(name);
      (<FormControl>this.employeeEntryForm.controls['city']).setValidators([Validators.required]);      
    }else{
      alert(name+" , ");
      (<FormControl>this.employeeEntryForm.controls['city']).clearValidators();
    }
    (<FormGroup>this.employeeEntryForm).updateValueAndValidity();
  }
}
