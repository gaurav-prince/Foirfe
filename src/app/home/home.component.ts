import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { sign } from 'crypto';
import Typed from 'typed.js';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  aTitle = ["Simple", "Robust", "Sustainable"];
  sTitle: string = "";

  ngOnInit(): void {
    this.sTitle = this.aTitle[0];
    var typed = new Typed('#typedText', {
      strings: ["Simple", "Robust", "Sustainable"],
      typeSpeed: 80,
      loop: true,
      backSpeed: 30,
      backDelay: 1000,
      startDelay: 500,
      showCursor: false
    });
    // this.changeTitle();
  }

  changeTitle() {
    const that = this;
    let aIndex, sText, sIndex;
    setInterval(function () {
      sIndex = 0;
      aIndex = that.aTitle.findIndex((element) => element === that.sTitle);
      sText = that.aTitle[(1 + aIndex) % that.aTitle.length];
      that.sTitle = "";
      setInterval(function () {
        that.sTitle = that.sTitle + sText.charAt(sIndex);
        sIndex++;
      }, 300)
      console.log(that.sTitle);
    }, 5000)
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  }

}
