import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { EmplooyesComponent } from './components/emplooyes/emplooyes.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: ToolbarComponent },
  { path: 'about', component: AboutComponent, children:[
    { path: 'technologies', component: TechnologiesComponent },
    { path: 'emplooyes', component: EmplooyesComponent },
    { path: 'projects', component: ProjectsComponent },
  ] },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
