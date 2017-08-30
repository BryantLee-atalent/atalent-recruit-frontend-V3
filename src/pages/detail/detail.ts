import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {ApplyPage} from '../apply/apply';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController) {

  }

  applyPage() {
    const me = this;
    me.navCtrl.push(ApplyPage);
  }
}
