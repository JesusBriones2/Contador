;(() => {
  const containerElem = document.querySelector('.container')
  const counterElem = document.querySelector('.counter')
  let counter = 0

  containerElem.addEventListener('click', (e) => {
    counter++
    counterElem.textContent = counter

    const circle = document.createElement('DIV')
    circle.classList.add('circle')
    circle.style.top = `${e.clientY - 50}px`
    circle.style.left = `${e.clientX - 50}px`

    if (counter > 100) {
      circle.style.borderRadius = '0'
    }

    containerElem.appendChild(circle)

    setTimeout(() => {
      containerElem.removeChild(circle)
    }, 1000)
  })
})()
