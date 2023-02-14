import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard/dashboard-component/dashboard-component.component';
import { LoginComponent } from './login/login/login.component';
import { OfferComponentComponent } from './offer/offer-component/offer-component.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';

const routes: Routes = [
      { path: '', component: DashboardComponentComponent },
      { path: 'user/:searchUser', component: SearchUserComponent },
      { path: 'login/:loginId', component: LoginComponent },
      { path: 'user/:createUser', component: CreateUserComponent },
      { path: 'offer/:offerId', component: OfferComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
