const xmasId = document.getElementById('xmas')
const sookId = document.getElementById('sook')
const grandmaId = document.getElementById('grandma')
const leonId = document.getElementById('leon')
const vegasId = document.getElementById('vegas')
const grandfaId = document.getElementById('grandfa')
const jionId = document.getElementById('jion')

const xmas = new Date('12/25/2021')
const sook = new Date('01/14/2022')
const grandma = new Date('03/08/2022')
const leon = new Date('03/16/2022')
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

const xmasDays = countDown(xmas)
xmasId.innerHTML = `Christmas is ${xmasDays} days left.`
const sookDays = countDown(sook)
sookId.innerHTML = `Myo Sook's birthday is ${sookDays} days left.`
const grandmaDays = countDown(grandma)
grandmaId.innerHTML = `Grandmother's birthday is ${grandmaDays} days left.`
const leonDays = countDown(leon)
leonId.innerHTML = `Leon's birthday is ${leonDays} days left.`
const vegasDays = countDown(vegas)
vegasId.innerHTML = `Vegas' birthday is ${vegasDays} days left.`
const grandfaDays = countDown(grandfa)
grandfaId.innerHTML = `Grandfather's birthday is ${grandfaDays} days left.`
const jionDays = countDown(jion)
jionId.innerHTML = `Jion's birthday is ${jionDays} days left.`
