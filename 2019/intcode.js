const opcodeFunctions = {
  1: function add (_, a, b, c) {
    c(a() + b())
  },
  2: function multiply (_, a, b, c) {
    c(a() * b())
  },
  3: function set (input, a) {
    a(input.shift())
  },
  4: function output (_, a) {
    console.log(a())
  },
  5: function jumpIfTrue (_, a, b) {
    return a() ? b() : undefined
  },
  6: function jumpIfFalse (_, a, b) {
    return !a() ? b() : undefined
  },
  7: function lessThan (_, a, b, c) {
    c(a() < b() ? 1 : 0)
  },
  8: function lessThan (_, a, b, c) {
    c(a() === b() ? 1 : 0)
  }
}

module.exports = {
  run: function (memory, input) {
    let pointer = 0
    while (memory[pointer] !== 99) {
      const opcode = memory[pointer] % 100
      const opcodeFunction = opcodeFunctions[opcode]
      if (!opcodeFunction) {
        console.error(`Something went wrong, found opcode: ${opcode}`)
      }
      const numberOfParameters = opcodeFunction.length - 1 // First argument is always the input.
      const parameterModes = Math.floor(memory[pointer] / 100).toString().split('').map(Number).reverse()
      const parameters = memory.slice(pointer + 1, pointer + numberOfParameters + 1).map((n, i) => {
        return function (valueToSet) {
          if (valueToSet !== undefined) {
            memory[n] = valueToSet
          } else {
            return parameterModes[i] === 1 ? n : memory[n]
          }
        }
      })
      const jump = opcodeFunction(input, ...parameters)
      pointer = !isNaN(jump) ? jump : pointer + numberOfParameters + 1
    }
    return memory
  }
}
