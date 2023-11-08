import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRecordsComponent } from './user-records/user-records.component';
import { UserRecordsDetailsComponent } from './user-records-details/user-records-details.component';

const routes: Routes = [
  { path: '', component: UserRecordsComponent },
  { path: 'tableRecords/:recordId', component: UserRecordsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
