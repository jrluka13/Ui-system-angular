import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { FolderComponent } from './components/folder/folder.component';
import { FileComponent } from './components/file/file.component';
import { IntermediateLayerComponent } from './components/intermediate-layer/item-types.component';
import { ButtonsComponent } from './components/buttons/icons-adding-items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing-module';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { EmplooyesComponent } from './components/emplooyes/emplooyes.component';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FolderListComponent,
    FolderComponent,
    FileComponent,
    IntermediateLayerComponent,
    ButtonsComponent,
    NavbarComponent,
    AboutComponent,
    ContactsComponent,
    TechnologiesComponent,
    EmplooyesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
