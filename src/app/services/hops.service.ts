import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, map } from "rxjs/operators";
import { Hops } from "../models/hops.model";

@Injectable({
  providedIn: "root",
})
export class HopsService {
  constructor(private http: HttpClient) {}

  getHops() {
    return this.http
      .get<any>("api/warehouse/hops")
      .toPromise()
      .then((res) => <Hops[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>("api/warehouse/hops").pipe(
      map((hops) => hops),
      delay(1500)
    );
  }

  getHopsCatalog() {
    return this.http
      .get<any>("api/warehouse/catalog-hops")
      .toPromise()
      .then((res) => <Hops[]>res.data)
      .then((data) => {
        return data;
      });
  }

  save(hops: Hops): Observable<any[]> {
    return this.http
      .post<any>("api/warehouse/hops", hops)
      .pipe(map((hops) => hops));
  }

  delete(hops: Hops): Observable<any[]> {
    return this.http
      .delete<any>("api/warehouse/hops/" + hops.id)
      .pipe(map((hops) => hops));
  }
}
