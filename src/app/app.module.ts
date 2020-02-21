import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component'; 
//import {ButtonComponent} from './button/button.component'; 
//import {httpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    //ButtonComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   //httpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
