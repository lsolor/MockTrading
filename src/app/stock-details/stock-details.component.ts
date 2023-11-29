import { Component, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['../css/styles.css']
})
export class StockDetailsComponent {
  @Input() stock: string = '';
  currentPrice: string = '';
  baseUrl: string = "demomocktradingserver.azurewebsites.net/";
  // constructor(private http: HttpClient) {
  // }

  ngOnInit(): void {
    // this.getStockPrice();

  }

  // getStockPrice(): Observable<string> {
  //     return this.http.get<string>(`${this.baseUrl}stocks/${this.stock}/price`)
  //     .pipe(
  //       tap(data => console.log(JSON.stringify(data))),
  //       catchError(this.handleError)
  //     );
  //  }

   private handleError(err: { error: { message: any; }; status: any; body: { error: any; }; }) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
   
}


