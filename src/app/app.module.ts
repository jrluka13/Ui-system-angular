import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ListfolderComponent } from './components/listfolder/listfolder.component';
import { FolderComponent } from './components/folder/folder.component';
import { FileComponent } from './components/file/file.component';
import { IntermediateLayerComponent } from './components/intermediate-layer/intermediate-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListfolderComponent,
    FolderComponent,
    FileComponent,
    IntermediateLayerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
