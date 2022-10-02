import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarehouseComponent } from './warehouse.component';
import { HopsComponent } from './hops/hops.component';
import { HopsEditComponent } from './hops/hops.edit.component';
import { HopsSearchComponent } from './hops/hops.search.component';

const routes: Routes = [{
  path: '',
  component: WarehouseComponent,
  children: [
    {
      path: 'warehouse-hops',
      component: HopsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  WarehouseComponent,
  HopsComponent,
  HopsEditComponent,
  HopsSearchComponent,
];
