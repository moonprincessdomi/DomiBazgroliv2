import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuestlistComponent } from './guestlist/guestlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guestlist', component: GuestlistComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
