import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {ApplyPage} from '../apply/apply';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  index = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = navParams.get('index');
  }

  applyPage() {
    const me = this;
    me.navCtrl.push(ApplyPage);
  }
}
