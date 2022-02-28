import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import {
  getDragonById,
  IDragonsState,
  updateDragon,
} from 'src/app/store/dragons.state';

@Component({
  selector: 'app-edit-dragons',
  templateUrl: './edit-dragons.component.html',
  styleUrls: ['./edit-dragons.component.css'],
})
export class EditDragonsComponent implements OnInit {
  //utilizado o ! pois o editForm não iniciado no construtor
  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ dragons: IDragonsState }>,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.store
      .select(getDragonById)
      .pipe(take(1))
      .subscribe((dragon) => {
        if (dragon) {
          this.editForm.patchValue({
            name: [dragon.name],
            type: [dragon.type],
            id: [dragon.id],
          });
        }
      });
  }

  createForm() {
    this.editForm = this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      id: [null],
    });
  }

  editDragon() {
    this.spinnerService.on();
    const dragon = {
      name: this.editForm.value.name,
      type: this.editForm.value.type,
      id: this.editForm.value.id,
    };
    this.store.dispatch(updateDragon({ dragon }));
  }
}
