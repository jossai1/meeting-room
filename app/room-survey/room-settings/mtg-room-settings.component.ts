import { Component, OnInit } from '@angular/core';
import { RoomSurveyComponent } from '../room-survey.component';
import { SharedService } from '../../services/shared-service.service';



@Component({
    selector: 'my-app',
    directives:[RoomSurveyComponent],
    templateUrl: 'app/room-survey/room-settings/mtg-room-settings.component.html',
    styleUrls: ['app/room-survey/room-settings/mtg-room-settings.component.css']
})


export class MeetingSettings implements OnInit{

  mtgRooms: Array<string> = [ 'Albert','Boardroom','Brooklyn','Grosvenor','Hammersmith' ,'Helix' , 'Mathematical', 'Millau', 'Millenium','Sydney','Westminister'];
  //mtgRooms: Array<Object> = [{name: 'Albert'}, {name:'Boardroom'} ,{name:'Brooklyn'} ,{name:'Grosvenor'} ,{name:'Hammersmith'} ,{name:'Helix' },{name: 'Mathematica'}, {name: 'Millau'}, {name:'Millenium' },{name:'Sydney'} ,{name:'Westminister'}];
  mtgRoom:string;
  constructor(private sharedService: SharedService)
  {}


  ngOnInit()
  {

  }

  submit(){
    console.log(this.mtgRoom);
    this.sharedService.set(this.mtgRoom);
  }
  set(i:number)
  {
    //console.log(this.mtgRooms[i].name);
    this.sharedService.set(this.mtgRooms[i]);
  }

}
