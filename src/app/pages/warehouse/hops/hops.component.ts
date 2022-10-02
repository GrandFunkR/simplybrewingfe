import { Component } from "@angular/core";

import { Hops } from "../../../models/hops.model";
import { HopsService } from "../../../services/hops.service";
import { HopsEditComponent } from "./hops.edit.component";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "ngx-hops",
  templateUrl: "./hops.component.html",
  styleUrls: ["./hops.component.scss"],
  providers: [ConfirmationService],
})
export class HopsComponent {
  hops: Hops[];
  submitted: boolean;

  constructor(
    private service: HopsService,
    private dialogService: NbDialogService,
    protected hopsService: HopsService,
    private toastrService: NbToastrService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.getHops().then((data) => (this.hops = data));
  }
  openNew() {
    let dialogRef: NbDialogRef<any> =
      this.dialogService.open(HopsEditComponent);
    dialogRef.componentRef.instance.saved.subscribe((response: any) => {
      this.refresh();
    });
  }

  editHops(editHops: Hops) {
    let dialogRef: NbDialogRef<any> =
      this.dialogService.open(HopsEditComponent);
    dialogRef.componentRef.setInput("newHops", false);
    dialogRef.componentRef.setInput("hops", editHops);

    dialogRef.componentRef.instance.saved.subscribe((response: any) => {
      this.refresh();
    });
  }

  deleteHops(deleteHops: Hops) {
    this.confirmationService.confirm({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      accept: () => {
        this.hopsService.delete(deleteHops).subscribe(
          (response: any) => {
            this.toastrService.show("success", "Hops deleted", {
              status: "warning",
            });
            this.refresh();
          },
          (error) => {
            this.toastrService.show("error", "Error occurred", {
              status: "danger",
            });
            console.error(error);
          }
        );
      },
    });
  }
}
