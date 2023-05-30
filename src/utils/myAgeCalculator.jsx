export default function myAgeCalculator() {
  const dateOfbirth = new Date(1989, 5, 10)
  const timestamDateOfBirth = dateOfbirth.getTime()

  const timestampNow = Date.now()

  const timestampAge = timestampNow - timestamDateOfBirth

  const miliSecYear = 1000 * 60 * 60 * 24 * 365.25

  const myAge = Math.floor(timestampAge / miliSecYear)

  return myAge
}
