import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FolderListComponent } from './components/folder-list/folder-list.component';
import { FolderComponent } from './components/folder/folder.component';
import { FileComponent } from './components/file/file.component';
import { IntermediateLayerComponent } from './components/intermediate-layer/item-types.component';
import { ButtonsComponent } from './components/buttons/icons-adding-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FolderListComponent,
    FolderComponent,
    FileComponent,
    IntermediateLayerComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
