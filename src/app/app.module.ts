import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/header/main-header/main-header.component';
import { MainMenuComponent } from './components/header/main-menu/main-menu.component';
import { TopMenuComponent } from './components/menu/top-menu/top-menu.component';
import { MainFooterComponent } from './components/footer/main-footer/main-footer.component';
import { RightSidebarComponent } from './components/sidebars/right-sidebar/right-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainMenuComponent,
    TopMenuComponent,
    MainFooterComponent,
    RightSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
