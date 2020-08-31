import { Component, OnInit } from '@angular/core';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any[];
  repoName: string = "jQuery";

  searchRepository(){
    this.service.repositorysearch(this.repoName)
    this.service.searchRepo().subscribe(obj =>{
      this.repos = obj['items']
      console.log(this.repos)
    })
  }


  constructor(private service:LoadService) { }

  ngOnInit(){
    this.searchRepository()
  }

}
