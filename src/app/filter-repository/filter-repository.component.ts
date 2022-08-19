import { Component, VERSION, Directive, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Items, PostsService } from '../posts.service';

@Component({
  selector: 'app-filter-repository',
  templateUrl: './filter-repository.component.html',
  styleUrls: ['./filter-repository.component.scss']
})
export class FilterRepositoryComponent implements AfterViewInit { 
    title = 'Search in Github';
    showSpinner: boolean = false;
    items:any = [];
    itemsFiltered: any = [];
    totalCount:number = 0;
    hasQuery: boolean = false;
    errorMessage: string = '';
    isError: boolean = false;
    searchText: string = '';
    selectedProjects: object[];
    name:string;
    isMITLicense: boolean = false;
    checkBoxText: string = 'Show only repositorios with MIT License';
    constructor(private PostsService: PostsService){
      this.name = `Angular! v${VERSION.full}`;
    }

    ngAfterViewInit() {
      // child is set
    }
  
    sendData(event: any) {
      this.showSpinner = true;
      let query:string = event.target.value;
      let matchSpaces:any = query.match(/\s*/);
      if (matchSpaces[0] === query) {
        this.items = [];
        this.itemsFiltered = this.items;
        this.hasQuery = false;
        this.isError = false;
        this.showSpinner = false;
        return;
      }
      
      this.PostsService.searchItems(query.trim()).subscribe(results => {
        this.items = results.value.items;
        this.itemsFiltered = this.items;
        if (results && results.value.total_count) {
          this.totalCount = results.value.total_count;
        }
        this.hasQuery = true;
        this.isError = false;
        this.showSpinner = results.isLoading;
        localStorage.setItem('dataItems', JSON.stringify(this.items))
      },
      (error) => {    //Error callback
        this.errorMessage = error.message;
        this.totalCount = 0;
        this.isError = true;
        this.showSpinner = false;
        throw error;
      }
      )
    }
  
    // Getting Selected Repositorios and Count
    getSelected(){
      this.isMITLicense = !this.isMITLicense;
      if (this.isMITLicense) {
        this.selectedProjects =  this.items.filter(el => el.license && el.license.name === "MIT License");
        this.itemsFiltered = this.selectedProjects;
      } else {
        this.itemsFiltered = this.items;
      }
    }
}
