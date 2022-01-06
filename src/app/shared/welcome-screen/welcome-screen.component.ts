import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  @ViewChild('picSlider', { static: false }) viewer: IonSlides;
  slider: any = '../../../assets/slider/slider1.png';
  slideOpts = {
    initialSlide: 0,
    speed: 300,
    effect: 'flip',
  };
  constructor() {}

  ngOnInit(): void {}
  onSlideMoved(event) {
    event.target.isEnd().then((isEnd) => {
      console.log('End of slide', isEnd);
    });

    event.target.isBeginning().then((istrue) => {
      console.log('End of slide', istrue);
    });
  }
}
