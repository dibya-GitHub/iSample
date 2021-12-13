import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private ionLoader: LoaderService) {}

  ngOnInit() {
    this.ionLoader.showHideAutoLoader();
  }
}
