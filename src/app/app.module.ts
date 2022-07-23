import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BasicTestComponent } from './components/featureScreens/basic-test/basic-test.component';
import { IntermediateTestComponent } from './components/featureScreens/intermediate-test/intermediate-test.component';
import { AdvanceTestComponent } from './components/featureScreens/advance-test/advance-test.component';
import { StatisticsComponent } from './components/featureScreens/statistics/statistics.component';
import { AboutUsComponent } from './components/featureScreens/about-us/about-us.component';
import { ProfileComponent } from './components/featureScreens/profile/profile.component';
import { PageNotFoundComponent } from './components/featureScreens/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BasicTestComponent,
    IntermediateTestComponent,
    AdvanceTestComponent,
    StatisticsComponent,
    AboutUsComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
