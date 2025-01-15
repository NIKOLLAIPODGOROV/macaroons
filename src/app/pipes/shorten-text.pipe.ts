import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {
  transform(value: string, isTrim: boolean = true, maxSymbol: number = 95): string {
    if (!value) {
      return '';
    }

    if (value.length <= maxSymbol) {
      return value; // Если длина текста меньше или равна maxSymbol, возвращаем текст как есть
    }

    if (isTrim) {
      value = value.substr(0, maxSymbol) + '...'; // Обрезаем текст до максимально значения символов идобавляем точки
    }

    return value;
  }

}
