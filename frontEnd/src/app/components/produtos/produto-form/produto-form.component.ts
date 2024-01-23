import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.scss'
})
export class ProdutoFormComponent {
  public formGroup: FormGroup;
  public pageTitle = 'Cadastro de Produtos';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      codigo: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    // Lógica para enviar para o backend aqui.
    console.log(this.formGroup.value);
  }
}