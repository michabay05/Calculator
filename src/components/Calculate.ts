class Calculate {
  static INPUT_REGEX_MUST: RegExp =
    /(?<OperatorsA> [+-×÷] )(?<Numbers>-?[\d]+)(?<OperatorsB> [+-×÷] )/gm;
  static INPUT_REGEX: RegExp = /(?<Operators> [+-×÷] )?(?<Numbers>-?[\d]+)/gm;

  static fromStr(input: string): number {
    console.log("Input:", input);
    const matches = input.matchAll(this.INPUT_REGEX);
    let sum = 0;
    for (const num of matches) {
      if (num.groups?.Numbers === undefined) continue;
      let parsedNum = Number.parseFloat(num.groups.Numbers);
      let operator = num.groups?.Operators;
      if (operator === undefined) {
        sum += parsedNum;
      } else {
        switch (operator.trim()) {
          case "+":
            sum += parsedNum;
            break;
          case "-":
            sum -= parsedNum;
            break;
          case "×":
            sum *= parsedNum;
            break;
          case "÷":
            sum /= parsedNum;
            break;
        }
      }
    }
    return sum;
  }
}

export default Calculate;
