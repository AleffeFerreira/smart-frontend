import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { ServicerDesComponent } from './components/servicer-des/servicer-des.component';
import { CardComponent } from './components/card/card.component';
import { SectionCardComponent } from './components/section-card/section-card.component';
import { ColunaComponent } from './components/coluna/coluna.component';
import { StudiesComponent } from './components/studies/studies.component';
import { WorkingComponent } from './components/working/working.component';
import { TeamComponent } from './components/team/team.component';
import { TestComponent } from './components/test/test.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContBlackComponent } from './components/cont-black/cont-black.component';
import { BoxComponent } from './components/box/box.component';
import { BoxAwayComponent } from './components/box-away/box-away.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormComponent } from './components/form/form.component';
import { CardNumberComponent } from './card-number/card-number.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TopHeaderComponent,
    ServicerDesComponent,
    CardComponent,
    SectionCardComponent,
    ColunaComponent,
    StudiesComponent,
    WorkingComponent,
    TeamComponent,
    TestComponent,
    ContactComponent,
    ContBlackComponent,
    BoxComponent,
    BoxAwayComponent,
    CardProfileComponent,
    ProfileComponent,
    FormComponent,
    CardNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
