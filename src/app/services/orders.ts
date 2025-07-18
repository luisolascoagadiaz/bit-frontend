import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Orders {

  constructor(){};

  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tasks/';

  getAllOrders(){
    return this.httpClient.get(this.apiUrl);
  }

  getOneOrders(){
    return this.httpClient.get(this.apiUrl);
  }

  addOrder(payload:any){
    return this.httpClient.post(this.apiUrl,payload);
  }

  editOrder(payload:any){
    return this.httpClient.put(this.apiUrl,payload);
  }

  delOrder(payload:any){
    return this.httpClient.delete(this.apiUrl,payload);
  }
  
}
