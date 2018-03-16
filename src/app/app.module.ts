import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdmpageComponent } from './admpage/admpage.component';
import { CursospageComponent } from './cursospage/cursospage.component';
import { CadastropageComponent } from './cadastropage/cadastropage.component';
import { AlunopageComponent } from './alunopage/alunopage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FirstpageComponent,
    AdmpageComponent,
    CursospageComponent,
    CadastropageComponent,
    AlunopageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
