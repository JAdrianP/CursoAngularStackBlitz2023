import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'upbConcat',
  //por defecto los pipes son puros 
 
})
export class PipeTestPipe implements PipeTransform {
  
    transform(value: any, opcion: number) {
      return value + '- soy el pipe' + opcion * 10;
  }
  
}
