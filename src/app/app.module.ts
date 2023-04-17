import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './authentication/auth/token-interceptor.service';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
