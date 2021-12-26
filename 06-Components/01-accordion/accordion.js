const itemDivs = document.querySelectorAll('.item') //.accordion

const handleItemDivsClick = () => {
  itemDivs.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
    })
  })
}

handleItemDivsClick()
