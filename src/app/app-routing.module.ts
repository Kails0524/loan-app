import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';


const routes: Routes = [
  {
    path: '',
    component: LoanCalculatorComponent
  },
  {
    path: 'loan_application',
    component: LoanCalculatorComponent
  },
    {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }