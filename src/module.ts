export class Greeter {
  private text: string;

  constructor() {
    this.text = 'ole';
  }

  greet() {
    console.log('hello' + this.text);
  }
}
