import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'pure',
  pure: true
  //por defecto los pipes son puros 
 
})
export class PurePipe implements PipeTransform {
  
    transform(data: number[], args?: any) {
      return data.filter(n => n%2 === 0);
  }
  
}
