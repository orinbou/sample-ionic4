import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private readonly headers: HttpHeaders;

  constructor(
      private http: HttpClient
  ) {
    // ヘッダーを初期化する
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.headers = this.headers.set('Accept', 'application/json');
  }

  /**
   * APIのURLENDPOINTを作成する
   */
  private static getApiUrl(apiCode: string) {
    return environment.apiService.baseURL.concat(apiCode);
  }

  /**
   * APIを呼び出す（POST）
   */
  callByPost(apiCode: string, body: any): Observable<any> {
    return this.http.post(ApiCallService.getApiUrl(apiCode), body, {headers: this.headers});
  }
}
