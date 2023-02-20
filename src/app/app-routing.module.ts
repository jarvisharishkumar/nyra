import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'nyra',
    component: AppComponent,
  },
  { path: '', redirectTo: 'nyra', pathMatch: 'full' },
  { path: '**', redirectTo: 'nyra' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
