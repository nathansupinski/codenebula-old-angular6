// import angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import angular bootstrap component
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

//  import fontAwesome angular module and icon library helper.
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//  import specific icons to use in the library
import { faBars } from '@fortawesome/free-solid-svg-icons';

//  add icons to library
library.add(faBars);

//  import source components
//  router
import { routing } from './app.routing';
//  providers
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, UserService } from './_services';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
// components
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AppHomeCarouselBasic } from './homeCarousel';

// used to create fake backend- uncomment below line to enable
// import { fakeBackendProvider } from './_helpers';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AppHomeCarouselBasic
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend - uncomment below line to enable
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
