import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: '', redirectTo :"home" ,pathMatch:'full'},
  { path: '**', redirectTo :"home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
