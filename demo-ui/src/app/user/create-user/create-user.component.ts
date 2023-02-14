import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  product: CreateUserComponent | undefined;



  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
 
  }

}
