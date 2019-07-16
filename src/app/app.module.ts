// import angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import angular materials dependencies
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import angular materials components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

// import angular bootstrap component
// import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
// angular components
import { FormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';

// used to create fake backend- uncomment below line to enable
// import { fakeBackendProvider } from './_helpers';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatListModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ResumeComponent,
    BlogComponent
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
