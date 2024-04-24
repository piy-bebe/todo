const cards = document.querySelector('#cards')
const template = document.querySelector('#templateCard')

const cardAdd = document.querySelector('#cardAdd')
const title = document.querySelector('#title')
const time = document.querySelector('#time')

function createCard() {
  const cloneCard = template.content.cloneNode(true)
  const card = cloneCard.querySelector('#card')

  const cardDelete = card.querySelector('#cardDelete')
  cardDelete.addEventListener('click', () => {
    card.remove()
  })
  
  const cardInfo = {
    date: card.querySelector('.card__time'),
    title: card.querySelector('.card__title')
  }
  
  cardInfo.date.textContent = time.value
  cardInfo.title.textContent = title.value
  
  if(time.value == '' || title.value == '') {
    return
  }
  
  cards.appendChild(card)
  time.value = ''
  title.value = ''
}

window.addEventListener('keydown', (e) => {
  if(e.key == "Enter") {
    createCard()
  }
})

cardAdd.addEventListener('click', () => {
  createCard()
})
