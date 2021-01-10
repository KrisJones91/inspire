
export default class Date {

    time() {
        let date = new Date()
        let h = date.getHours()
        let m = date.getMinutes()
        let s = date.getSeconds()

        let time = h + ":" + m + ":" + s;

        document.getElementById("clock").innerHTML = time
        document.getElementById("clock").textContent = time
        setTimeout(time, 1000)
    }
    time()




}





