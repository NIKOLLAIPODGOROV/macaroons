import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);


import {NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {FormsModule} from "@angular/forms";
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ButtonStyleDirective } from './directives/button-style.directive';
import { PhoneMaskPipe } from './pipes/phone-mask.pipe';
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent,
    AdvantageComponent,
    ButtonStyleDirective,
    PhoneMaskPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' }, // Устанавливаем локаль на российскую
    { provide: DEFAULT_CURRENCY_CODE, useValue: ' руб.' }//Устанавливаем валюту на российскую
  ],
  bootstrap: [AppComponent, FooterComponent, CartComponent]
})
export class AppModule {

}
