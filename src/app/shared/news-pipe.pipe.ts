import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsPipe',
  standalone: true
})
export class NewsPipePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value) return '';  // Return empty string if value is undefined or falsy.
    return value.replace(/8/g, '<br>'); // Example: replacing newlines with <br>
  }

}
