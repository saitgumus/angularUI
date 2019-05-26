import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { QueryComponent } from './components/query/query.component';
import { UsersaveComponent } from './components/usersave/usersave.component';
import { TransactionComponent, DialogLogin } from './components/transaction/transaction.component';
import { MatDialogModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { from } from 'rxjs';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    QueryComponent,
    UsersaveComponent,
    TransactionComponent,
    DialogLogin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents:[DialogLogin],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
