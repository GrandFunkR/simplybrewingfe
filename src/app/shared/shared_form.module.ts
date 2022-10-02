import { NgModule } from "@angular/core";

import { KeyFilterModule } from "primeng/keyfilter";
import { InputNumberModule } from "primeng/inputnumber";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbInputModule, NbButtonModule, NbCardModule } from "@nebular/theme";
import { InputTextModule } from "primeng/inputtext";
import { ThemeModule } from "../@theme/theme.module";
import { ButtonModule } from "primeng/button";
import { PanelModule } from "primeng/panel";
import { ConfirmDialogModule } from "primeng/confirmdialog";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    InputNumberModule,
    NbInputModule,
    InputTextModule,
    FormsModule,
    KeyFilterModule,
    ReactiveFormsModule,
    ButtonModule,
    PanelModule,
    ConfirmDialogModule,
  ],
  exports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    InputNumberModule,
    NbInputModule,
    InputTextModule,
    FormsModule,
    KeyFilterModule,
    ReactiveFormsModule,
    ButtonModule,
    PanelModule,
    ConfirmDialogModule,
  ],
})
export class SharedFormModule {}
