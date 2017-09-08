import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestApiService {
    // private url = 'http://35.189.162.84/api/Bapi.php';
    private url = 'http://54.222.255.39/api/Dapi.php';
    // private url = '/api/Bapi.php';
    result: any;
    myForm: DictionaryForm;

    constructor(private http: Http) {
    }

    isLogOut() {

    }

    postRequest(head: Dictionary, body: Dictionary, mac: string, bodyForm?: DictionaryForm): any {
        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        });
        const options = new RequestOptions({headers: headers, method: RequestMethod.Post});

        this.myForm = {'head': head, 'body': bodyForm ? bodyForm : body, 'mac': mac};
        return this.http.post(this.url, ('key=' + JSON.stringify(this.myForm)), options).toPromise().then(res => res.json());
    }

    getRequest() {

    }
}
