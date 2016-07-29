import {Component, Injectable,Input,Output} from '@angular/core';


@Injectable()
export class SharedService
{

  //set to blank 
  room: string = '';

  set(roomName:string)
  {
    this.room = roomName;
  }

  getRoomName ()
  {
    return this.room;
  }
  // @Output() fire:EventEmitter<any>=new EventEmitter();
  // @Output dataChangeObserver: EventEmitter = new EventEmitter();
  //
  //  constructor()
  //  {
  //    console.log('shared service started');
  //  }
  //
  //  change()
  //  {
  //   console.log('change started');
  //   this.fire.emit(true);
  //  }
  //
  //  getEmittedValue()
  //  {
  //    return this.fire;
  //  }



}
