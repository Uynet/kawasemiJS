
export default class Stage{
  constructor(){
    this.list = [];
  }
  Add(e){
    this.list.push(e);
  }
  Remove(e){
    let i = this.list.indexOf(e);
    if(i == -1)return;//そんな要素は無い
      this.list.splice(i,1);
  }
};
