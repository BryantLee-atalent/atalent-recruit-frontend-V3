import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {Postion} from '../postion/postion';
import {CreatePage} from '../creat/create';
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html'
})
export class ApplyPage {

  constructor(public navCtrl: NavController) {

  }

  postionPage(isSchool: boolean) {
    const me = this;
    me.navCtrl.push(Postion)
  }

  createPage() {
    const me = this;
    me.navCtrl.push(CreatePage)
  }
}
