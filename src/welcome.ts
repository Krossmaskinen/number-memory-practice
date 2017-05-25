export class Welcome {
  public noOfNumbers: number = 5;
  public minNumber: number = 3;
  public maxNumber: number = 10;
  public showInterval: number = 2;
  public isRunning: boolean = false;
  public numberHistory: number[] = [];
  public currentNumber: number;
  public isNumberHidden: boolean = false;
  public isShowingHistory: boolean = false;

  private numbersShown: number = 0;
  private roundInterval: any;
  private hideInterval: number = 200;

  public startRound(): void {
    this.numberHistory = [];
    this.isRunning = true;
    this.currentNumber = this.getNewNumber();
    this.saveNumberInHistory(this.currentNumber);
    this.numbersShown = 1;

    this.roundInterval = setInterval(() => {
      this.updateRound();
    }, this.getFormattedInterval());
  }

  public stopRound(): void {
    this.isRunning = false;
    this.numbersShown = 0;
  }

  public showHistory(): void {
    this.isShowingHistory = true;
  }

  public hideHistory(): void {
    this.isShowingHistory = false;
  }

  private getNewNumber(): number {
    let numberOfPossibleResults: number = this.maxNumber - this.minNumber;
    return Math.floor(Math.random() * numberOfPossibleResults) + this.minNumber;
  }

  private saveNumberInHistory(numberToSave: number): void {
    this.numberHistory.push(numberToSave);
  }

  private getFormattedInterval(): number {
    return (this.showInterval * 1000) + this.hideInterval;
  }

  private updateRound(): void {
    if (this.numbersShown < this.noOfNumbers) {
      this.isNumberHidden = true;

      setTimeout(() => {
        this.isNumberHidden = false;
      }, this.hideInterval);

      this.currentNumber = this.getNewNumber();
      this.saveNumberInHistory(this.currentNumber);
      this.numbersShown++;
    } else {
      clearInterval(this.roundInterval);
      this.stopRound();
    }
  }
}


export class UpperValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}
