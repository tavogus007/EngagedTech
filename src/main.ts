import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Vista1Component } from './app/components/vista1/vista1.component';

bootstrapApplication(Vista1Component, appConfig)
  .catch((err) => console.error(err));
