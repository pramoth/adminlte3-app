import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContentComponent
  },
  {
    path: 'form-demo',
    loadChildren: () => import('./form-demo/form-demo.module').then(m => m.FormDemoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
