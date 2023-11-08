import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'createEvent', component: FormComponent },
  { path: '', component: TableComponent },
  { path: '?data=name', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
