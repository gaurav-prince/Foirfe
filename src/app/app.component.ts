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

  // mySlideImages = ['../assets/images/aa','../assets/images/image2.jpeg','../assets/images/image3.jpg'];
  // myCarouselImages =['../assets/images/image1.jpg','../assets/images/image2.jpeg','../assets/images/image3.jpg'];

  
  // mySlideOptions={items: 1, dots: true, nav: true};
  // myCarouselOptions={items: 3, dots: true, nav: true};

  ngOnInit(): void {
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
    }
  }
}
