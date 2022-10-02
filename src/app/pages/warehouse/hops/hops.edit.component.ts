import { Component, EventEmitter, Input, Output } from "@angular/core";
import { NbDialogRef, NbDialogService, NbToastrService } from "@nebular/theme";
import { Hops } from "../../../models/hops.model";
import { HopsService } from "../../../services/hops.service";
import { HopsSearchComponent } from "./hops.search.component";

@Component({
  selector: "ngx-hops-edit",
  templateUrl: "./hops.edit.component.html",
})
export class HopsEditComponent {
  @Input() hops: Hops = new Hops();
  @Input() newHops: boolean = false;
  @Output() saved: EventEmitter<Hops> = new EventEmitter<Hops>();

  types: string[] = ["Bittering", "Aroma", "Both"];
  forms: string[] = ["Pellet", "Leaf"];
  ums: string[] = ["Kg", "g"];
  dialogVisible: boolean = true;

  constructor(
    protected dialogRef: NbDialogRef<any>,
    protected hopsService: HopsService,
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit() {}

  save() {
    let request: Hops = new Hops();

    this.copyToHops(this.hops, request);
    this.hopsService.save(request).subscribe(
      (response: any) => {
        this.toastrService.show("success", "Hops saved", {
          status: "success",
        });
        this.saved.emit(response);
      },
      (error) => {
        this.toastrService.show("error", "Error occurred", {
          status: "danger",
        });
        console.error(error);
      }
    );

    this.dialogVisible = false;
  }

  copyToHops(source: Hops, dest: Hops) {
    dest.alpha = source.alpha;
    dest.form = source.form;
    dest.name = source.name;
    dest.type = source.type;
    dest.id = source.id;
  }

  search() {
    let dialogRef: NbDialogRef<any> =
      this.dialogService.open(HopsSearchComponent);

    let instance = dialogRef.componentRef.instance;
    instance.hopsSelected.subscribe((selectedHops: Hops) => {
      this.copyToHops(selectedHops, this.hops);
    });
  }

  onHide() {
    this.dialogRef.close();
  }
}
