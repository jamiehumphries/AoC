const instructions = {
  1: function (memory, a, b, c) {
    memory[c] = memory[a] + memory[b]
  },
  2: function (memory, a, b, c) {
    memory[c] = memory[a] * memory[b]
  }
}

module.exports = {
  run: function (memory) {
    let pointer = 0
    while (memory[pointer] !== 99) {
      const opcode = memory[pointer]
      const instruction = instructions[opcode]
      if (!instruction) {
        console.error(`Something went wrong, found opcode: ${opcode}`)
      }
      const numberOfParameters = instruction.length - 1 // First argument is always the memory
      const parameters = memory.slice(pointer + 1, pointer + numberOfParameters + 1)
      instruction.apply(null, [memory, ...parameters])
      pointer += numberOfParameters + 1
    }
    const output = memory[0]
    return output
  }
}
