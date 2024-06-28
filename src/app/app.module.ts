import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedComponent1Component } from './components/nested-component-1/nested-component-1.component';
import { NestedComponent2Component } from './components/nested-component-2/nested-component-2.component';
import { EmpleadosListaComponent } from './components/empleados-lista/empleados-lista.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';
import { MyCardComponent } from './components/my-card/my-card.component';
import { MyRoundedContainerComponent } from './components/my-rounded-container/my-rounded-container.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NestedComponent1Component,
    NestedComponent2Component,
    EmpleadosListaComponent,
    MyModalComponent,
    MyCardComponent,
    MyRoundedContainerComponent,
    StudentsPageComponent,
    HomePageComponent,
    ProfilePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
