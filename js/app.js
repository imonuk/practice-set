const getColor = () => {


    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16)

    document.body.style.backgroundColor = randomCode
    document.getElementById("color_code").innerText = randomCode

    navigator.clipboard.writeText(randomCode)
}

getColor()


document.getElementById("btn").addEventListener(
    "click",
    getColor
)

setInterval(
    () => {
        getColor()
    }
    , 5000
)