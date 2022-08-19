import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FilterPipe } from './filters/filter.pipe';
import { ShowRepositoryComponent } from './show-repository/show-repository.component';
import { FilterRepositoryComponent } from './filter-repository/filter-repository.component';

const routes = [
  {
    path:'',
    component: FilterRepositoryComponent,
  },
  {
    path: 'showRepository/:id',
    component: ShowRepositoryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ShowRepositoryComponent,
    FilterRepositoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
