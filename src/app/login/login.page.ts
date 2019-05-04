import {Component, OnInit} from '@angular/core';
import {API_URL_ENDPOINT, MESSAGE} from '../app.constant';
import {ApiCallService} from '../providers/api-call.service';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth: { email: string, password: string } = { email: null, password: null };

  constructor(
      public navCtrl: NavController,
      private toastCtrl: ToastController,
      private readonly apiCallService: ApiCallService
  ) {
    // no-op
  }

  ngOnInit() {
    // TODO: 開発用の初期値を設定
    this.auth.email = 'sample@sample.com';
    this.auth.password = 'password';
  }

  /**
   * ログイン処理
   */
  login(body: any) {
    this.apiCallService.callByPost(API_URL_ENDPOINT.login, this.auth)
      .subscribe((response) => {
        if (response.message === '正常終了') {
          console.log('ログイン成功');
          // HOMEへ遷移する
          this.navCtrl.navigateRoot('/tabs').then();
        } else {
          console.log('ログイン失敗');
          this.showToastMessage(MESSAGE.loginError);
        }
      },
      (error) => {
        console.log('ログイン失敗');
        this.showToastMessage(MESSAGE.loginError);
      }
    );
  }

  /**
   * Toastメッセージ表示
   */
  async showToastMessage(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }
}
