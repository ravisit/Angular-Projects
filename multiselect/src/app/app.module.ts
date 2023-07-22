import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiSelectDropdownComponent } from './multi-select-dropdown/multi-select-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
