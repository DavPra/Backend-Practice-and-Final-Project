
exports.birthyearCalc = function (age) {
    let d = new Date()
    let y = d.getFullYear()

    return y - age
}

exports.ageCalc = function (year) {
  let currentYear = new Date().getFullYear();
  return currentYear - year
}
