import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SettingsComponent } from './settings/settings.component';
import { UserRoutingModule } from './user-routing.module';
import {  NbTabsetModule } from '@nebular/theme';
import { TabViewModule } from 'primeng/tabview';
import { SharedFormModule } from '../../shared/shared_form.module';

@NgModule({
  imports: [
    UserRoutingModule,
    NbTabsetModule,
    TabViewModule,
    SharedFormModule,
  ],
  declarations: [
    UserComponent,
    SettingsComponent
  ],
})
export class UserModule { }
