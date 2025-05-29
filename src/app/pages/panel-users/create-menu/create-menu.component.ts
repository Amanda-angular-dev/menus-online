import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { StateMenuService } from '../state-menu.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-menu',
  imports: [ReactiveFormsModule],
  templateUrl: './create-menu.component.html',
  styleUrl: './create-menu.component.css'
})
export class CreateMenuComponent {

  menuForm: FormGroup;
  
  
  constructor(private fb: FormBuilder, private menuFormStateService: StateMenuService,
    private router: Router,
    private route: ActivatedRoute) {
    this.menuForm = this.fb.group({
      items: this.fb.array([]) // arreglo dinámico
    });
  }
  
  forceReloadComponent() {
    this.router.navigate(['../info'], { relativeTo: this.route }).then(() => {
       this.router.navigate(['../create-menu'], { relativeTo: this.route });
      
   
      
    });
  }
  
  ngOnInit(): void {
    // Inicializar con un ítem
    this.addItem();

    // Escuchar cambios en el formulario y guardar automáticamente
   this.menuForm.valueChanges.subscribe(value => {
    this.menuFormStateService.setFormValue(value);
   });

   // Si ya había datos guardados
  const saved = this.menuFormStateService.getFormValue();
  if (saved) {
    for (let item of saved.items) {
      this.items.push(this.fb.group({
        nombre: [item.nombre],
        descripcion: [item.descripcion],
        precio: [item.precio]
      }));
    }
  }
  }
  get items(): FormArray {
    return this.menuForm.get('items') as FormArray;
  }

  addItem(): void {
    const item = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: [0, [Validators.required, Validators.min(0)]]
    });
    this.items.push(item); // <--- INSERTAR AL PRINCIPIO
  }
  

  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  submit(): void {
    if (this.menuForm.valid) {
      console.log('Menú enviado:', this.menuForm.value);
      // Aquí podés enviar los datos a tu backend o lo que necesites
    } else {
      this.menuForm.markAllAsTouched();
    }
  }
}
