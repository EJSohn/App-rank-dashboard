import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DataService {

    // header for http request. 
    private headers = new Headers({'Content-Type': 'application/json'});
    private apiUrl = '';

    constructor(private http: Http) { }

    getPieGraph(): Promise<any> {
        return this.http.get(this.apiUrl)
                .toPromise()
                .then(response => response.json().data)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}