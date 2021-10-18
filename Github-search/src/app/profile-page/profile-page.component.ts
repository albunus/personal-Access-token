import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  profile: any;
  repos: any;
  username!: string;

  constructor(private userService:UserService,private httpClient:HttpClient) {

    this.userService.updateProfile(this.username);
    this.userService.getprofileInfo().subscribe(Profile => {
      console.log(Profile);
      this.profile = Profile;
    });
    this.userService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  findProfile() {
    this.userService.updateProfile(this.username);
    this.userService.getprofileInfo().subscribe(Profile => {
      console.log(Profile);
      this.profile = Profile;
    });
    this.userService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}

