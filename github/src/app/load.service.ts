import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  //https://api.github.com/users/defunkt/repos
  //https://api.github.com/users
  //https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc


  username: string;
  repos: string;
  reposearch:string;
  

  
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get( environment.ApiUrl + this.username + "?client_id=" + environment.clientId + "&client_secret=" + environment.accessToken);
  }
  getRepos(){
    return this.http.get(environment.ApiUrl+this.username+"/repos?client_id=" + environment.clientId+ "&client_secret=" + environment.accessToken)  
  }


  searchRepo(){
    return this.http.get('https://api.github.com/search/repositories?q=' + this.reposearch + "+language:assembly&sort=stars&order=desc", ({
      headers: new HttpHeaders({Authorization: `token ${environment.accessToken}`})
    }))
  }

    updateName(username:string){
      this.username = username;
    }
  
    updateRepo(repo:string){
      this.repos = repo
    }

    repositorysearch(repoName: string){
      this.reposearch = repoName
    }
  }

