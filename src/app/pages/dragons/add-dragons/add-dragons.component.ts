import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { addDragon, IDragonsState } from 'src/app/store/dragons.state';

@Component({
  selector: 'app-add-dragons',
  templateUrl: './add-dragons.component.html',
  styleUrls: ['./add-dragons.component.css'],
})
export class AddDragonsComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ dragons: IDragonsState }>,
    private spinnerService: SpinnerService
  ) {
    this.addForm = this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  addDragon(): void {
    this.spinnerService.on();

    const dragon = {
      name: this.addForm.value.name,
      type: this.addForm.value.type,
    };

    this.store.dispatch(addDragon({ dragon }));
  }
}
