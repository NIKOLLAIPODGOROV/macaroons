import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneMask'
})
export class PhoneMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length === 12) {
      return value.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5');
    }
    return '';
  }

  // transform(value: string | number): string {
  //   if (!value) {
  //     return '';
  //   }
  //
  //   //удаляем символы не являющиеся цифрами
  //   const phoneNumber: string = String(value).replace(/\D+/g, '');
  //
  //   //проверяем длинну символов для номера(Беларусь)
  //   if (phoneNumber.length < 12) {
  //     return "";
  //   }
  //
  //   const code: string = phoneNumber.slice(0, 3); // +375
  //   const operator: string = phoneNumber.slice(3, 5); // (29)
  //   const group1: string = phoneNumber.slice(5, 8); // 368
  //   const group2: string = phoneNumber.slice(8, 10); // 98
  //   const group3: string = phoneNumber.slice(10, 12); // 68
  //
  //   return `+${code} (${operator}) ${group1}-${group2}-${group3}`;
  //
  // }

}
