import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
formBuilder = inject(FormBuilder);
productService = inject(ProductService);

loginForm: FormGroup = this.formBuilder.group({
    email: [''],
    password: ['']
  })


  onSubmit(){
    console.log("onSubmit login form",this.loginForm.value);
    this.productService.userData(this.loginForm.value)
  }

}
