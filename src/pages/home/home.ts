import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

import {Postion} from '../postion/postion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  postionPage(isSchool: boolean) {
    const me = this;
    me.navCtrl.push(Postion, {
      isSchool: isSchool
    })
  }
}
