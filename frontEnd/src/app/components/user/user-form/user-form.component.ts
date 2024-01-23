import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  public formGroup: FormGroup;
  public pageTitle = 'Cadastro de Usuários';

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    // Lógica para enviar para o backend aqui.
    console.log(this.formGroup.value);
  }
}
