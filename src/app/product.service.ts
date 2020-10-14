import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  {Album} from './album';
import {Product} from './product';

// import { Album } from './album';

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";
  private _productsUrl = "../assets/products.json";
  // _http: Http;
  
  constructor(private _http:Http) {
    // this._http = _http;
   }


  getAlbum(id:number): Observable<Album> {

    return this._http.get(this._albumUrl).map((response) =><Album> response.json());

  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response)=><Product[]>response.json());
  }
}
