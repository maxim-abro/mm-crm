export default function fullDate() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
    ]
    let myDate = new Date();
    const getZero = (n) => {
        return n >= 10 ? n : '0' + n
    }



    return `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}, ${days[myDate.getDay()]}, ${getZero(myDate.getHours())}:${getZero(myDate.getMinutes())}:${getZero(myDate.getSeconds())}`
}

// `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()}, ${days[myDate.getDay()]}, ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`