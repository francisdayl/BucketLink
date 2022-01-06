import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    console.warn("user id is ", this.route.snapshot.paramMap.get('id'))
    
  }

}
