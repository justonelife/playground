import { JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTagModule } from 'ng-zorro-antd/tag';

const NZ_MODULE = [
  NzFormModule,
  NzInputModule,
  NzTagModule,
  NzButtonModule,
];

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ...NZ_MODULE,
    ReactiveFormsModule,
    JsonPipe,
    NgIf,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  registerForm?: FormGroup<{
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    confirmPassword: FormControl<string | null>,
  }>;

  #confirmPasswordValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm?.controls.password.value) {
      return { confirm: true, error: true };
    }

    return {};
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, this.#confirmPasswordValidator]),
    });
  }

  submit(): void {
    if (this.registerForm?.invalid) {
      return this.#validate();
    }
  }

  #validate(): void {
    if (!this.registerForm) {
      return;
    }

    Object.values(this.registerForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true })
      }
    });
  }

}
