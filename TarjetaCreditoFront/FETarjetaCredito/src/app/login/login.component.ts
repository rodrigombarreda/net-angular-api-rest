import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private _UsuarioService:UsuariosService,private fb: FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      usuario:[''],
      contrasenia:['']
      })
    
   }

  ngOnInit(): void {
  }

  usuarioValido(){
    this._UsuarioService.getUsuarios(this.form.get('usuario')?.value,this.form.get('contrasenia')?.value).subscribe(data=>{
      this.toastr.success('El usuario existe correctamente', 'Usuario existe');
    },error=>{
      this.toastr.error('Opss.. ocurrio un error','Error')
      console.log(error);
    });
   
  }

}
