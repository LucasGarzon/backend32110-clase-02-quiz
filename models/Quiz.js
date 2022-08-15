export class Quiz {
  // ATRIBUTOS ---
  constructor(questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0
  }

  // METODOS ---
  getCurrentQuestion() {
    return this.questions[this.questionIndex]
  }

  validateAndContinue(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++
    }
    this.quiestionIndex++
  }

  isEnded() {
    return this.questions.length === this.questionIndex
  }

}