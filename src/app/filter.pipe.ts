import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

       transform(value: any, input: String) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (value: any) {
                return value.name.toLowerCase().startsWith(input);
            })
        }
        
        
        return value;
  }
}