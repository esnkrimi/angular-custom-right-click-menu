import { NgModule } from '@angular/core';
import { EsnContextMenuComponent } from './esn-context-menu.component';
import { DirDirective } from './dir.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EsnContextMenuComponent,DirDirective
  ],
  imports: [BrowserModule,BrowserAnimationsModule
  ],
  exports: [
    EsnContextMenuComponent
  ]
})
export class EsnContextMenuModule { }
