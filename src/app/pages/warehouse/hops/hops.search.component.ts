import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { BehaviorSubject, Observable } from "rxjs";
import { Hops } from "../../../models/hops.model";
import { HopsService } from "../../../services/hops.service";

@Component({
  selector: "ngx-hops-search",
  templateUrl: "./hops.search.component.html",
})
export class HopsSearchComponent {
  hopsCatalog: Hops[];
  selectedHops: Hops;
  dialogVisible: boolean = true;
  @Output() hopsSelected: EventEmitter<Hops> = new EventEmitter<Hops>();

  constructor(
    private service: HopsService,
    protected dialogRef: NbDialogRef<any>
  ) {}

  ngOnInit() {
    this.service.getHopsCatalog().then((data) => (this.hopsCatalog = data));
  }

  onHide() {
    this.dialogRef.close();
  }

  selectHops() {
    this.hopsSelected.emit(this.selectedHops);
    this.dialogVisible = false;
  }
}
