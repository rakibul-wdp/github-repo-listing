import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { Services } from './shared/services';
import { LoaderInterceptorService } from './shared/services/interceptors/loader-interceptor.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    ...Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
