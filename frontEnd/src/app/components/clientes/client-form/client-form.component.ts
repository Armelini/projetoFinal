import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {
  public formGroup: FormGroup;
  public pageTitle = 'Cadastro de Clientes';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      codigo: ['', [Validators.required]],
      nomeFantasia: ['', [Validators.required]],
      razaoSocial: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      endereco: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    // Lógica para enviar para o backend aqui.
    console.log(this.formGroup.value);
  }
}