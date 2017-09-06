import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {DetailPage} from '../detail/detail';

@Component({
  selector: 'page-postion',
  templateUrl: 'postion.html'
})
export class Postion {
  isSchool: boolean;
  positionName = this.isSchool ? '校招' : '社招';
  btnName = !this.isSchool ? '校招' : '社招';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isSchool = this.navParams.get('isSchool');
  }

  homePage() {
    const me = this;
    me.navCtrl.push(HomePage);
  }

  positionPage(isSchool: boolean) {
    this.isSchool = isSchool;
    this.positionName = this.isSchool ? '校招' : '社招';
    this.btnName = !this.isSchool ? '校招' : '社招';
  }

  detailPage(index: number) {
    const me = this;
    me.navCtrl.push(DetailPage, {
      index: index
    })
  }
}
