import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  
  export class AppUtility {
    
    public valueLoader : boolean = true;
    loader(value:boolean){
        this.valueLoader = value;
    }

    getLoader(){
        return this.valueLoader;
    }
  }