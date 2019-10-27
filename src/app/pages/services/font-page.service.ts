import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()


export class FontPageService {
    constructor(private http: HttpClient) {

    }
    getNews() {
        return this.http
            .get('api/news/news.json')
    }
    getSupport(){
        return this.http
        .get('api/support/support.json')
    }
}