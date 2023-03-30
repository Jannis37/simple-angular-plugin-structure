import { NgModule } from '@angular/core';
import { CoreModule } from 'core';
import { PluginComponent } from './plugin.component';



@NgModule({
  declarations: [
    PluginComponent
  ],
  imports: [
    CoreModule
  ],
  exports: [
    PluginComponent
  ]
})
export class PluginModule { }
