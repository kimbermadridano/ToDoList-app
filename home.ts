import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public title;
	public array=[];
  constructor(public navCtrl: NavController) {

  }

  Add(){ 
  	this.array.push(this.info);
  	this.info = "";
  }

  Delete(item){
  	this.array.splice(this.array.indexOf(item),1);
  }

  Edit(item){
  	this.info = item;
  	this.array.splice(this.array.indexOf(item),1);
  }


}
