import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'expoPipe',
  //por defecto los pipes son puros 
 
})
export class ExpoPipe implements PipeTransform {
  
    transform(value: any, expo: number) {
      return Math.pow(value,expo);
  }
  
}
