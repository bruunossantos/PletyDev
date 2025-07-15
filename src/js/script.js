window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('fixed-header', this.window.scrollY > 0)
})