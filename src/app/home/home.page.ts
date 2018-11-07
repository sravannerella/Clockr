import { Component, ViewChild } from '@angular/core';
import { trigger, transition, state, animate, keyframes, style } from '@angular/animations';
import { Slides } from '@ionic/angular';
import { Router } from '@angular/router';

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
		]),
		trigger('jump', [
			state('x', style({
				transform: 'translateY(0)',
				opacity: 0
			})),
			state('done', style({
				transform: 'translateY(0)',
				opacity: 1
			})),
			transition('* => up', animate('1000ms ease-out', keyframes([
				style({
					transform: 'translateY(0)',
					opacity: 0,
					offset: 0
				}),
				style({
					transform: 'translateY(-80px)',
					opacity: 0,
					offset: .4
				}),
				style({
					transform: 'translateY(0)',
					opacity: 1,
					offset: 1
				})
			])))
		])
	]
})

export class HomePage {

	constructor(private router: Router) {}

	sliderOptions = {
		effect: 'flip'
	};

<<<<<<< HEAD
	state = 'x';
	jumpState = 'x';
=======
  state : string = 'x';
  jumpState = 'x';
>>>>>>> fbf21c5368bacd8c2b3630bc2417d236ccb6f636

	@ViewChild(Slides) slides: Slides;

<<<<<<< HEAD
	sliders = [{
		title: 'Location',
		subtitle: 'You will be clocked in with GPS Coordinates',
		color: '#4F6BDF',
		img: './../../assets/img/location.png'
	}, {
		title: 'Fence',
		subtitle: 'Geo Coordinates based Fence to track clock in and out',
		color: '#fbc02d',
		img: './../../assets/img/fence.png'
	}, {
		title: 'Beacons',
		subtitle: 'Micro Location used to clock in and out',
		color: '#ef5350',
		img: './../../assets/img/beacon.png'
	}];

	slidesInit() {
		this.jumpState = 'up';
	}
=======
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
  }];

  ngOnInit() {
    console.log("LOADED");
    setInterval(()=> {
      this.jumpState = 'up';
    }, 1500);
  }
>>>>>>> fbf21c5368bacd8c2b3630bc2417d236ccb6f636

	slideMoved() {
		if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) {
			this.state = 'rightSwipe';
			setTimeout( () => {
				this.jumpState = 'up';
			}, 700);
		} else {
			this.state = 'leftSwipe';
		}
	}

	animationDone() {
		this.state = 'x';
	}

	jumpDone() {
		this.jumpState = 'done';
	}

}
