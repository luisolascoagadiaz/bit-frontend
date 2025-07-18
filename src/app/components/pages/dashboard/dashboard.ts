import { Component, inject, OnInit } from '@angular/core';
import { Orders } from '../../../services/orders';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  private ordersService = inject(Orders);

  orders!: any[];
  message: string = '';

  ngOnInit():void{
    this.loadOrders();
  }


    addForm = new FormGroup({
      date: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      task: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required)
  })

   addhandleSubmit(){
    if(this.addForm.valid){
      this.ordersService.addOrder(this.addForm.value).subscribe((res:any)=>{
        this.message = "Order Created successfully...!";
        this.loadOrders();
      });
    }else{
          console.log('Invalid Form');
    }
  }

    editForm = new FormGroup({
      fecha: new FormControl('', Validators.required),
      prioridad: new FormControl('', Validators.required),
      orden: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required)
  })

  edithandleSubmit(){
    if(this.editForm.valid){
      this.ordersService.editOrder(this.editForm.value).subscribe((res:any)=>{console.log("res: ", res)});
    }else{
          console.log('Invalid Form');
    }
  }

  delForm = new FormGroup({
      id: new FormControl('', Validators.required),
  })

  delhandleSubmit(){
    if(this.delForm.valid){
      this.ordersService.delOrder(this.delForm.value).subscribe((res:any)=>{
        this.message = "Order Deleted successfully...!";
        this.loadOrders();
      });
    }else{
          alert('OK');
    }
  }
  
    loadOrders(){
      this.ordersService.getAllOrders().subscribe((res:any)=>{
      this.orders = res.data;
      //console.log("Ordenes: ", this.orders);
    })
  }
}
