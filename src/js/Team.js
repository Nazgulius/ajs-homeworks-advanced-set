export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {  
    this.members.forEach((item) => {
      if (item === name) {
        throw new Error('Такой персонаж уже есть');
      }
    });
    this.members.add(name);
    console.log([...this.members]);
  }

  addAll(...name){
    name.forEach((item)=>{
      this.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}