import {unaFuncion} from './utils.js';

export default class Main{
  constructor(){
    this.unaPropiedad = unaFuncion();
    this.unMetodo();
  }
  unMetodo(){
    console.log(`Bienvenidos a: ${this.unaPropiedad}`);
  }
}