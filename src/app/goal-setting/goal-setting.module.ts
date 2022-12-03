import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalSettingPageRoutingModule } from './goal-setting-routing.module';

import { GoalSettingPage } from './goal-setting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalSettingPageRoutingModule
  ],
  declarations: [GoalSettingPage]
})
export class GoalSettingPageModule {}
