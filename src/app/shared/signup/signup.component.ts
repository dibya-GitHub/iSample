import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loading/loading.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private ionLoader: LoaderService) {}

  ngOnInit() {
    this.ionLoader.showHideAutoLoader();
  }
}
