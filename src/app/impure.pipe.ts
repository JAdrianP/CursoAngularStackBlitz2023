import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'impure',
  pure:false
  //por defecto los pipes son puros 
 
})
export class ImpurePipe implements PipeTransform {
  
    transform(data: number[], args?: any) {
        return data.filter(n => n%2 === 0);
    }
  
}
