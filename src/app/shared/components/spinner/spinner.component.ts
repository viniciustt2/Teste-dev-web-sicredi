import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  isLoading = false;

  constructor(private spinnerService: SpinnerService, private cdr:ChangeDetectorRef, public authService:AuthService) {}

  ngOnInit(): void {
    console.log(this.isLoading);
    
  }

  ngAfterViewInit() {
    this.spinnerService.data.subscribe((res) => (this.isLoading = res));
    this.cdr.detectChanges();
  }
}
