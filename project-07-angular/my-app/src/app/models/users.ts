export class User{
    id;
    name;
    position;

    constructor(name?, position?){
        if(name)
            this.name = name;
        if(position)
            this.position = position;
    }
}