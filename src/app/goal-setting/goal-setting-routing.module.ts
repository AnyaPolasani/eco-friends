import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalSettingPage } from './goal-setting.page';

const routes: Routes = [
  {
    path: '',
    component: GoalSettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalSettingPageRoutingModule {}
