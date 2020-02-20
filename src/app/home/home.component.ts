import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { window.scrollTo(500, 0);}

  ngOnInit() {
  }

  scroll(){
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
      
    // });

    document.querySelector('.landing_top_right_form').scrollIntoView({ behavior: 'smooth', block: 'center' });

  }

 
}
