import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// document.addEventListener('scroll', () => {
//   let navbar = document.querySelector('.navbar');
//   if(scrollY <= 50){
//     navbar.classList.remove('fixed-top');
//   }
//   else{
//     navbar.classList.add('fixed-top');
//   }
// })
