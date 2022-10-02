import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  TablesRoutingModule,
  routedComponents,
} from "./warehouse-routing.module";

import { TableModule } from "primeng/table";
import { FormsModule } from "@angular/forms";
import { SharedFormModule } from "../../shared/shared_form.module";
import { ToolbarModule } from "primeng/toolbar";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,

    TableModule,
    FormsModule,
    SharedFormModule,
    ToolbarModule,
    DialogModule,
    DropdownModule,
  ],
  declarations: [...routedComponents],
})
export class WarehouseModule {}
