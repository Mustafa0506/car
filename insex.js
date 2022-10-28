let url = "http://localhost:7777/cars"
let car_one = document.querySelector('.car_one')
let car_two = document.querySelector('.car_two')
let car_three = document.querySelector('.car_three')

let dateOne = new Date().getFullYear() - 15
let dateTwo = new Date().getFullYear() - 25
let dateMore = new Date().getFullYear() - 25


axios.get(url)
    .then(res => reload(res.data))

const reload = (arr) => {

    for (let item of arr) {

        let car = document.createElement('div')
        let car_title = document.createElement('div')
        let car_description = document.createElement('div')
        let car_btn = document.createElement('button')

        car.classList.add('car')
        car_title.classList.add('car_title')
        car_title.innerHTML = item.make
        car_description.classList.add('car_description')
        car_description.innerHTML = item.model
        car_btn.classList.add('car_btn')
        car_btn.innerHTML = 'Подробнее'

        car.append(car_title, car_description, car_btn)

        if (item.year >= dateOne) {
            car_one.append(car)
        } else if (item.year >= dateTwo && item.year <= dateOne) {
            car_two.append(car)
        } else if (item.year <= dateMore) {
            car_three.append(car)
        }

        car_btn.onclick = () => {
            if (car_btn.innerHTML === 'Нажато') {
                car_btn.innerHTML = 'Подробнее'
                car_btn.style.backgroundColor = '#007FFF'
            } else {
                car_btn.innerHTML = 'Нажато'
                car_btn.style.backgroundColor = '#abad00'
            }
        }

    }

}