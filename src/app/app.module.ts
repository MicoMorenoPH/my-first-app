import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//COMPONENT SECTION
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
//END
import { FormsModule } from '@angular/forms';
import { ImplicitReceiver } from '@angular/compiler';
import { InlineServersComponent } from './inline-servers/inline-servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    InlineServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
