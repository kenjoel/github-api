import { Component, OnInit } from '@angular/core';
import { LoadService } from "../load.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profile:any;
  repos:any;
  test:string = "kenjoel";


  searchProfile(){
    this.service.updateName(this.test);
    this.service.updateRepo(this.test)
    this.service.getProfile().subscribe(profile => {
      console.log(profile)
      this.profile= profile
    })
    
    this.service.getRepos().subscribe(repos => {
      console.log(repos)
      this.repos = repos
    })
  }



  constructor(private service: LoadService) { }

  ngOnInit(): void {
    this.searchProfile()
  }

}
