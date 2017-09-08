import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {DetailPage} from '../detail/detail';
import {RequestApiService} from '../../service/request_service';

@Component({
    selector: 'page-postion',
    templateUrl: 'postion.html'
})
export class Postion {
    isSchool: boolean;
    positionName = this.isSchool ? '校招' : '社招';
    btnName = !this.isSchool ? '校招' : '社招';
    myHead: Dictionary;
    myBody: Dictionary;

    constructor(public navCtrl: NavController, public navParams: NavParams, public requestService: RequestApiService) {
        this.isSchool = this.navParams.get('isSchool');
      //    this.loadPostion(1);
    }


    loadPostion(page: number) {
        debugger;
        const me = this;
        me.myHead = {
            method: 'jobs_list_show',
            version: '1.0',
            unittype: '3',
            unitid: '1'
        };
        me.myBody = {
            page: page,
            lan_type: 'zh',
            supplier_id: 7
        };
        me.requestService.postRequest(this.myHead, this.myBody, 'eee').then(function ($scope: any) {
            if ($scope.error.error_code === 1) {
console.log(2);
            }
        });
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
