import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalprofile',
  templateUrl: './personalprofile.component.html',
  styleUrls: ['./personalprofile.component.scss']
})
export class PersonalprofileComponent implements OnInit {
  @Input() isClickLike:boolean=false;
  @Input() isClickHeart:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
