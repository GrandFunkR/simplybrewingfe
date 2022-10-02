import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";
import { AppSettings } from "../../../commons/appSettings";
import { User } from "../../../models/user.model";
import { SettingsService } from "../../../services/settings.service";
import {
  NbToastrService,
} from "@nebular/theme";

@Component({
  selector: "ngx-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup = new FormGroup({
    fullName: new FormControl(""),
  });
  user: User;
  genericStringValidations: RegExp = AppSettings.genericStringValidations;

  constructor(
    private authService: NbAuthService,
    private settingsService: SettingsService,
    private toastrService: NbToastrService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
        this.userToForm();
      }
    });
  }

  private userToForm() {
    this.settingsForm = new FormGroup({
      fullName: new FormControl(this.user.fullName),
    });
  }

  formToUser() {
    this.user.fullName = this.settingsForm.get("fullName").value;
  }

  ngOnInit(): void {}

  saveChanges() {
    if (this.settingsForm.invalid) {
      this.toastrService.show("error", "Invalid form", {
        status: "danger",
      });
      return;
    }

    let requestUser: User = new User();
    requestUser.fullName = this.settingsForm.get("fullName").value;
    this.settingsService.saveSettings(requestUser).subscribe(
      (response: any) => {
        this.toastrService.show("success", "Settings saved", {
          status: "success",
        });
        this.formToUser();
        this.userToForm();
      },
      (error) => {
        this.toastrService.show("error", "Error occurred", {
          status: "danger",
        });
      }
    );
  }
}
