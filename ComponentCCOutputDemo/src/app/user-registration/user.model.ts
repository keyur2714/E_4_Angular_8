import { Lookup } from '../dropdown/lookup.model';

export class User {
    constructor(public name?:string,public state?:Lookup,public city?:Lookup){}
}