import { Component, ViewChild } from '@angular/core';
import { trigger, transition, state, animate, keyframes, style} from '@angular/animations';
import { Slides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('bounce', [
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('* => rightSwipe', animate('700ms ease-out', keyframes([
        style({
          transform: 'translateX(0)', 
          offset: 0
        }),
        style({
          transform: 'translateX(-40px)', 
          offset: .4
        }),
        style({
          transform: 'translateX(0)', 
          offset: 1
        }),
      ]))),
      transition('* => leftSwipe', animate('700ms ease-out', keyframes([
        style({
          transform: 'translateX(0)',
          offset: 0
        }),
        style({
          transform: 'translateX(40px)',
          offset: 0.4
        }),
        style({
          transform: 'translateX(0)',
          offset: 1
        })
      ])))
    ])
  ]
})
export class HomePage {

  sliderOptions = {
    effect: 'flip'
  }

  state : string = 'x';

  @ViewChild(Slides) slides: Slides;

  sliders = [{
    title: 'Location',
    subtitle: 'You will be clocked in with GPS Coordinates',
    color: '#4F6BDF',
    img: './../../assets/img/location.png'
  }, {
    title: 'Fence',
    subtitle: 'Geo Coordinates based Fence to track clock in and out',
    color: '#ab47bc',
    img: './../../assets/img/fence.png'
  }, {
    title: 'Beacons',
    subtitle: 'Micro Location used to clock in and out',
    color: '#ef5350',
    img: './../../assets/img/beacon.png'
  }]


  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) {
        this.state = 'rightSwipe';
    } else {
        this.state = 'leftSwipe';
    }
  }

  animationDone(){
    this.state = 'x';
  }

  goToLogin(){
      console.log("Going to Login");
  }

}
