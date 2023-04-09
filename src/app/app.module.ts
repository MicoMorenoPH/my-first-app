import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//COMPONENT SECTION
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
//END
import { FormsModule } from '@angular/forms';
import { ImplicitReceiver } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
