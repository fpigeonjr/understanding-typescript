const addTwo = (num1: number, num2: number, resultPhrase: string, printResult?: boolean) => {
  printResult && console.log(`${resultPhrase} ${num1 + num2}`)

  return num1 + num2
}

const num1 = 6
const num2 = 2.7
const printResult = true
const resultPhrase = "Result is:"

const result = addTwo(num1, num2, resultPhrase, printResult)
console.log({ result })
