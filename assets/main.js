const card = document.querySelector('.card')
const img = document.querySelector('.card-img')
const cardRadius = document.querySelector('.card-radius')

card.addEventListener('mousemove', e => {
  const rect = e.target.getBoundingClientRect()
  const distanceX = e.pageX - rect.x - (rect.width / 2)
  const distanceY = e.pageY - rect.y - (rect.height / 2)
  const x = Math.sqrt(Math.abs(distanceX))
  const y = Math.sqrt(Math.abs(distanceY))
  const num = {
    x: distanceX < 0 ? x : -x,
    y: distanceY > 0 ? y : -y
  }

  card.style.transform = `translateZ(40px) rotateX(${ num.y }deg) rotateY(${ num.x }deg) scale(1.1)`
  img.style.transform = `translateX(${ num.x }px) translateY(${ -num.y }px)`

  cardRadius.style.backgroundPosition = `${ distanceX }px ${ distanceY }px`
})

card.addEventListener('mouseleave', () => {
  card.style.transform = `translateZ(0) rotateX(0) rotateY(0) scale(1)`
  img.style.transform = `translateX(0) translateY(0)`
})