let lowerBound = 231832
let upperBound = 767346

let validPasswords = 0

function isValid(password) {
  sequence = password.toString().split('')
  let hasRepeat = false
  for (let i = 0; i < sequence.length - 1; i++) {
    const current = sequence[i]
    const next = sequence[i + 1]
    if (next < current) {
      return false
    }
    if (current === next) {
      const before = sequence[i - 1]
      const after = sequence[i + 2]
      if (current !== before && current !== after) {
        hasRepeat = true
      }
    }
  }
  return hasRepeat
}

for (let password = lowerBound; password <= upperBound; password++) {
  if (isValid(password)) {
    validPasswords++
  }
}

console.log(validPasswords)
