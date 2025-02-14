var portfolio_iframe = document.getElementById("portfolio_iframe")
var loading = document.getElementById("loading")
var captcha = document.getElementById("captcha")

portfolio_iframe.style.border = "none"

document.body.style.overflow = "hidden"

document.body.style.backgroundColor = "rgb(240, 238, 230)"
document.body.style.margin = "0px"
loading.style.backgroundColor = "rgb(255, 255, 255)"

var style = function(){
    loading.style.width = "fit-content"
    loading.style.height = "fit-content"
    loading.style.marginTop = window.innerHeight / 2 - loading.offsetHeight / 2 + "px"
    loading.style.marginLeft = window.innerWidth / 2 - loading.offsetWidth / 2 + "px"
    loading.style.borderRadius = window.innerWidth * window.innerHeight / 4000 + "px"
}

var captchaSucess = function(){
    loading.remove()
    portfolio_iframe.style.display = "block"
    style = function(){
        portfolio_iframe.style.width = window.innerWidth + "px"
        portfolio_iframe.style.height = window.innerHeight + "px"
    }
    style()
}

var onloadCallback = function() {
    style()
    window.onresize = style
}