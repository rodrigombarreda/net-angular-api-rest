import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService:TarjetaService) {
    this.form = this.fb.group({
    titular:['',Validators.required],
    numeroTarjeta:['',[Validators.required,Validators.minLength(16),Validators.maxLength(16)]],
    fechaExpiracion:['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
    ccv:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]]
    })
   }

ngOnInit(): void {
}

agregarTarjeta(){
  console.log(this.form);
  const tarjeta:any={
    titular:this.form.get('titular')?.value,
    numeroTarjeta:this.form.get('numeroTarjeta')?.value,
    fechaExpiracion:this.form.get('fechaExpiracion')?.value,
    ccv:this.form.get('ccv')?.value
  }
this._tarjetaService.saveTarjeta(tarjeta)
this.obtenerTarjetas
this.form.reset()
}
eliminarTarjeta(id:number){
this._tarjetaService.deleteTarjeta(id)
this.obtenerTarjetas();
}

obtenerTarjetas() {
  this._tarjetaService.getListTarjetas().subscribe(data => {

    this.listTarjetas = data;
  })
}
editarTarjeta(tarjeta:any){
  this.form.patchValue({
    titular:tarjeta.titular,
    numeroTarjeta:tarjeta.numeroTarjeta,
    fechaExpiracion:tarjeta.fechaExpiracion,
    ccv:tarjeta.ccv
  })
}
}
