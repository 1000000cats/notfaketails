function onClick() {
    document.getElementById('main').style.display = "none";
    document.getElementById('pictureStuff').style.display = "flex";
    setInterval(() => {
        document.getElementById('buttsex').style.color = "white";
        console.log(`1`)
        setInterval(() => {
            console.log(`2`)
            document.getElementById('buttsex').style.color = "red";
        }, 33)
    }, 207)
}