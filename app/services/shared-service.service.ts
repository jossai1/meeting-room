import {Component, Injectable,Input,Output} from '@angular/core';


@Injectable()
export class SharedService
{

  //set to blank
  room: string = '';
  red:number =  0;
  green:number= 0;
  amber:number= 0;

  set(roomName:string)
  {
    this.room = roomName;
  }


  setRed(red:number)
  {
    this.red = red;

  }
  setGreen(green:number)
  {
    console.log('you gave me these greens: '+ this.green)
    this.green = green;
    console.log(this.green);
  }

  setAmber(amber:number)
  {
    this.amber = amber;
  }



  getRoomName ()
  {
    return this.room;
  }


  getGreen ()
  {
    console.log(this.green);
    return this.green;
  }
  getRed ()
  {
    console.log(this.red);

    return this.red;
  }
  getAmber ()
  {
    console.log(this.amber);

    return this.amber;
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
