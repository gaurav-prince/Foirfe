import { Component, OnInit } from '@angular/core';

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
      'link': 'who',
      'icon': 'who'
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
  activeLink = this.links[0].link;

  ngOnInit(): void {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
    }
  }
}
