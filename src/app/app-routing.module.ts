import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { authenticationGuard } from './authentication.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifypasswordComponent } from './verifypassword/verifypassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[authenticationGuard]},
  {path:'products',component:ProductsComponent ,canActivate:[authenticationGuard]},
  {path:'productdetails/:productId',component:ProductDetailsComponent,canActivate:[authenticationGuard]},
  {path:'cart',component: CartComponent,canActivate:[authenticationGuard]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'brands',component:BrandsComponent,canActivate:[authenticationGuard]},
  {path:'categories',component:CategoriesComponent,canActivate:[authenticationGuard]},
  {path:'wishlist',component:WishlistComponent,canActivate:[authenticationGuard]},
  {path:'checkout/:cartId',component:CheckoutComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'verifypassword',component:VerifypasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'allorders',component:AllordersComponent},
  {path:'', redirectTo:'/register', pathMatch:'full'},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
