import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{FormGroup} from '@angular/forms';
import { SearchPipe } from './search.pipe'
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { TrimPipe } from './trim.pipe';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifypasswordComponent } from './verifypassword/verifypassword.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    CartComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    SliderComponent,
    ProductDetailsComponent,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    TrimPipe,
    WishlistComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    VerifypasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule ,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
