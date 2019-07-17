import { Component, OnInit, AfterContentInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const parallaxContainer = document.getElementById('parallax-container');
    const parallaxInstance = new Parallax(parallaxContainer, {
      relativeInput: true,
      hoverOnly: true
    });
  }

}
