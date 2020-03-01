import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { StaticComponent } from './static/static.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StaticComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule.forRoot([  
      {  
        path : '',  
        component : StaticComponent   
      },
      {  
        path : 'static',  
        component : StaticComponent   
      },
      {  
        path : 'dynamic',  
        component : DynamicComponent   
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
