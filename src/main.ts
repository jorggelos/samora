import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/grafic/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
