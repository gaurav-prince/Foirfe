import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'foirfe';
  mobile: boolean = false;
  links = [
    {
      'text': 'What We Do?',
      'link': 'what',
      'icon': 'what'
    },
    {
      'text': 'About Us',
      'link': 'about',
      'icon': 'about'
    },
    {
      'text': 'Resources',
      'link': 'resources',
      'icon': 'resources'
    },
    {
      'text': 'Contact Us',
      'link': 'contact',
      'icon': 'contact'
    }
  ];
  activeLink = '';

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  ngOnInit(): void {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
    }
  }
}
