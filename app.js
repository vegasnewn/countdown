const halloweenId = document.getElementById('halloween')
const grandma1Id = document.getElementById('grandma1')
const xmasId = document.getElementById('xmas')
const sookId = document.getElementById('sook')
const grandma2Id = document.getElementById('grandma2')
const leonId = document.getElementById('leon')
const easterId = document.getElementById('easter')
const vegasId = document.getElementById('vegas')
const grandfaId = document.getElementById('grandfa')
const jionId = document.getElementById('jion')

const halloween = new Date('10/31/2021')
const grandma1 = new Date('11/09/2021')
const xmas = new Date('12/25/2021')
const sook = new Date('01/14/2022')
const grandma2 = new Date('03/08/2022')
const leon = new Date('03/16/2022')
const easter = new Date('04/17/2022')
const vegas = new Date('07/17/2022')
const grandfa = new Date('08/05/2022')
const jion = new Date('09/22/2022')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

function countDown(date) {
  const today = new Date()
  const timeSpan = date - today
  const days = Math.floor(timeSpan / day)
  return days
}

const halloweenDays = countDown(halloween)
halloweenId.innerHTML = `Halloween is ${halloweenDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const grandma1Days = countDown(grandma1)
grandma1Id.innerHTML = `Grandmother's birthday is ${grandma1Days.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const xmasDays = countDown(xmas)
xmasId.innerHTML = `Christmas is ${xmasDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const sookDays = countDown(sook)
sookId.innerHTML = `Myo Sook's birthday is ${sookDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const grandma2Days = countDown(grandma2)
grandma2Id.innerHTML = `Grandmother's birthday is ${grandma2Days.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const leonDays = countDown(leon)
leonId.innerHTML = `Leon's birthday is ${leonDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const easterDays = countDown(easter)
easterId.innerHTML = `Easter is ${easterDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const vegasDays = countDown(vegas)
vegasId.innerHTML = `Vegas' birthday is ${vegasDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const grandfaDays = countDown(grandfa)
grandfaId.innerHTML = `Grandfather's birthday is ${grandfaDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
const jionDays = countDown(jion)
jionId.innerHTML = `Jion's birthday is ${jionDays.toLocaleString('en-US', {
  timeZone: 'Australia/Brisbane',
})} days left.`
