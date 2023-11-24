import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }, { path: 'secure', loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
