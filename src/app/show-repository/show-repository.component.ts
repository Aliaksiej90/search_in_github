import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-show-repository',
  templateUrl: './show-repository.component.html',
  styleUrls: ['./show-repository.component.scss']
})
export class ShowRepositoryComponent {
  repositoryId: string;
  imageSrc: string = '';
  imageAlt: string = '';
  repName: string = '';
  licenseName: string = '';
  licenseUrl: string = '';
  licenseNodeId: string = '';
  licenseSpdxId: string = '';
  ownerLogin: string = '';
  repId: string = '';
  topics: string [];
  repDescription: string = '';
  resultdata: any;
  data:any;
  showSpinner: boolean = false;
  
  constructor(private PostsService: PostsService, private route: ActivatedRoute){ 
    this.data = this.PostsService.data;
    this.repositoryId = this.route.snapshot.params["id"];
  }
  
  ngOnInit() {
    if (this.data) {
      this.resultdata = this.data.filter((el) => {return el.id == this.repositoryId})[0];
    } else {
      this.resultdata = JSON.parse(localStorage.getItem('dataItems'));
      this.resultdata = this.resultdata.filter((el) => {return el.id == this.repositoryId})[0];
    }
    this.imageSrc = this.resultdata.owner && this.resultdata.owner.avatar_url ? this.resultdata.owner.avatar_url : null; 
    this.imageAlt = 'iPhone';
    this.repId = this.resultdata.id;
    this.repName = this.resultdata.name;
    this.repDescription = this.resultdata.description;
    this.licenseName = this.resultdata.license && this.resultdata.license.name ? this.resultdata.license.name : 'No information'; 
    this.licenseUrl = this.resultdata.license && this.resultdata.license.url ? this.resultdata.license.url : 'No information';
    this.licenseNodeId =this.resultdata.license && this.resultdata.license.node_id ?  this.resultdata.license.node_id : 'No information';
    this.licenseSpdxId = this.resultdata.license && this.resultdata.license.spdx_id ? this.resultdata.license.spdx_id : 'No information';
    this.ownerLogin = this.resultdata.owner && this.resultdata.owner.login ? this.resultdata.owner.login : 'No information';
  }
}