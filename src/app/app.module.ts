import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Sibling1Component } from './components/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling2/sibling2.component';
import { StringService } from './services/string.service';
import { ButtonComponent } from './components/button/button.component';
import { NumberService } from './services/number.service';

@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StringService, NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
