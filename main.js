const DARK = "#222222"
const LIGHT = "#EEEEEE"

const setColor = color => {
    document.body.style.backgroundColor = color.back
    document.getElementById("theme-color").setAttribute("content", color.fore)
    document.getElementById("fjara").setAttribute("fill", color.fore)
}

const getRandomColor = () => "#" + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)

const getLuma = c => {
    var c = c.substring(1)
    var rgb = parseInt(c, 16)
    var r = (rgb >> 16) & 0xff
    var g = (rgb >> 8) & 0xff
    var b = (rgb >> 0) & 0xff
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

setInterval(() => {
    let color = {}
    color.fore = getRandomColor()
    color.back = getLuma(color.fore) < 100 ? LIGHT : DARK
    setColor(color)
}, 1248)