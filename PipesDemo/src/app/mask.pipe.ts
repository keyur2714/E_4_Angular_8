import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
  pure : true
})
export class MaskPipe implements PipeTransform {

  constructor(){
    console.log("Mask Pipe Object Created...!");
  }

  transform(value: string, noOfChar : number , maskingChar : string): any {
    console.log(value+" "+noOfChar+" "+maskingChar);
    let maskNo : number = value.length - noOfChar;
    let remaining : string = value.substring(maskNo,value.length);
    let newValue = '';
    for(let i=1;i<=maskNo;i++){
      newValue = newValue + maskingChar;
    }

    return newValue + remaining;
  }

}
