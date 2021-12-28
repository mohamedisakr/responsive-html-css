const navLinks = document.querySelectorAll('nav a')

const resetAllLinks = (links) => {
  links.forEach((link) => {
    link.classList.remove('active')
  })
}

const removeActiveClass = (link) => {
  link.classList.remove('active')
  //   navLinks.forEach((link) => {})
}

const addActiveClass = (link) => {
  link.classList.add('active')
  //   navLinks.forEach((link) => {})
}

const styleCurrentLink = (e) => {
  navLinks.addEventListener('click', () => {
    const target = e.target
    target.classList.add('active')
  })
}

const handleNavLinkClick = () => {
  console.log('nav link clicked!!!')
  resetAllLinks(navLinks)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      //   link.classList.toggle('active')
      link.classList.add('active')
      //   addActiveClass()
    })
  })
}

// document.addEventListener('DOMContentLoaded', styleCurrentLink)
document.addEventListener('DOMContentLoaded', handleNavLinkClick)

/*
const colors = [
  {percent: 100, color: '	 #ffffff'},
  {percent: 95, color: ' #eeeef7'},
  {percent: 90, color: ' #ddddee'},
  {percent: 85, color: ' #cbcce6'},
  {percent: 80, color: ' #babbde'},
  {percent: 75, color: ' #a9aad6'},
  {percent: 70, color: ' #989acd'},
  {percent: 65, color: ' #8789c5'},
  {percent: 60, color: ' #7578bd'},
  {percent: 55, color: ' #6467b4'},
  {percent: 50, color: ' #5356ac'},
  {percent: 45, color: ' #4b4d9b'},
  {percent: 40, color: ' #42458a'},
  {percent: 35, color: ' #3a3c78'},
  {percent: 30, color: ' #323467'},
  {percent: 25, color: ' #292b56'},
  {percent: 20, color: ' #212245'},
  {percent: 15, color: ' #191a34'},
  {percent: 10, color: ' #111122'},
  {percent: 5, color: '#080911'},
  {percent: 0, color: '#000000'},
]

colors.forEach(({percent, color}) =>
  console.log(`--dark-shade-${percent}: ${color};`),
)
*/
