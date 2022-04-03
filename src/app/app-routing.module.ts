import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
  {path:'solutions',loadChildren:()=>import('./solutions/solutions.module').then(m=>m.SolutionsModule)},
  {path:'about-us',loadChildren:()=>import('./aboutus/aboutus.module').then(m=>m.AboutusModule)},


  {path:'',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
