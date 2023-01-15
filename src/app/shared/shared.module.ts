import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { Pipes } from './pipes';

const Modules = [
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  CommonModule,
];

@NgModule({
  declarations: [Pipes, PageNotFoundComponent],
  imports: [...Modules, RouterModule],
  exports: [...Modules, Pipes],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
