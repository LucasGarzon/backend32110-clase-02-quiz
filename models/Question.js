export class Question {
  constructor(text, choices, answer) {
    // ATRIBUTOS ---
    this.text = text
    this.choices = choices
    this.answer = answer
  }

  // METODOS ---
  isCorrectAnswer(choice) {
    return choice === this.answer
  }
}