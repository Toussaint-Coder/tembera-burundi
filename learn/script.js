// function myfunc() {
//     console.log(Math.random())
// }
// myfunc();
// class mycumputer{
//     constructor(size,ram){
//        this.mysize = size;
//        this.myram = ram;
//        this.calcresolution= () => {
//         return "1366*720"
//        }
//     }
// }
// const cumputer= new mycumputer(500,8)
// console.log(cumputer.mysize +" "+ cumputer.myram +" "+ cumputer.calcresolution())

// function myfunc () {
//     let car = "rambo";
//     console.log(car)
//     let speed = 150;
//     console.log(speed)
// }

// console.log(myfunc());
//https://restcountries.com/v3.1/name/{name}

const input = document.getElementById("country");
const flag = document.getElementById("flag");
const population = document.getElementById("population");

function searchserver(){
    let data = fetch(`https://restcountries.com/v3.1/name/${input.value}`);
    data.then(response => {
        return response.json();
    }).then(getresponsedata => {
        const imgflag = document.createElement("img");
        console.log(getresponsedata)
        imgflag.src = getresponsedata[0].flags.png;
        flag.appendChild = imgflag;
        population.textContent = getresponsedata[0].population;
    }).catch(err => {
        console.log(err.message);
    })
}