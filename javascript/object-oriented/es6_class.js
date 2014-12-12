class Answer {
  constructor(value){
    this._val = value;
  }

  get(){
    return this._val;
  }
}

var lifeAnswer = new Answer(42);
lifeAnswer.get(); // 42

var desertAnswer = new Answer(3.14);
desertAnswer.get(); // 3.14

class FirmAnswer extends Answer {
  constructor(value){
    super(value);
  }

  get(){
    return super() + "!!";
  }
}
var luckyAnswer = new FirmAnswer(7);
luckyAnswer.get(); // "7!!"
var magicAnswer = new FirmAnswer(3);
magicAnswer.get(); // "3!!"
