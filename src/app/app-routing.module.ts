import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { Page5Component } from './page/page5/page5.component';
import { Page6Component } from './page/page6/page6.component';
import { Page7Component } from './page/page7/page7.component';
import { Page8Component } from './page/page8/page8.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: '', redirectTo: 'page/page1', pathMatch: 'full' },
  {path:"page/page1",component: Page1Component},
  {path:"page/page2",component: Page2Component},
  {path:"page/page3",component: Page3Component},
  {path:"page/page5",component: Page5Component},
  {path:"page/page6",component: Page6Component},
  {path:"page/page7",component: Page7Component},
  {path:"page/page8",component: Page8Component},
  {path:"formulario",component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }