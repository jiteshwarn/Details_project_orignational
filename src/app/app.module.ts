import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DemoMaterialModule} from './material-module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from './products/product.component';
import { WelcomeComponent } from './welcomeComponent/welcome.component';
import { ProductDetailsComponent } from './productDetails/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from "./products/product.service";
import { SimpleComponent } from './simpleComponent/app.simple.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TestjavascriptComponent } from './testjavascript/testjavascript.component';
// import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'product-detail', component: ProductDetailsComponent },
  {path: 'simple-component',component:SimpleComponent},
  {path:'parent-component',component:ParentComponentComponent},
  // {path:'forms',component:FormsComponent},
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    SimpleComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    TestjavascriptComponent,
    // FormsComponent
  ],
  imports: [  
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // DemoMaterialModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
