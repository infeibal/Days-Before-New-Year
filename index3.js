document.querySelector('button').onclick = daysBeforeNewYear

function daysBeforeNewYear()  {
    let month1 = document.querySelector('input').value
    const daysAmount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const monthName = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
    let month = month1.toLowerCase()
        
    let monthIndex = monthName.indexOf(month)
    if (monthIndex === -1) {
        document.querySelector('.out-text').innerHTML = `Месяц «${month1}» не существует! Попробуй еще раз`
        console.log(`Month «${month1}» is not exist! Try another one` )
        return
    } 
    let i = 0
    
    for (; monthIndex<daysAmount.length; monthIndex++) {
        i += daysAmount[monthIndex]
    }
    console.log(`После месяца ${month1} осталось ${i} дней до Нового года!`)
    document.querySelector('.out-text').innerHTML = `Осталось ${i} дней до Нового года!`
}
    
// function daysBeforeNewYear() {
//     let month = document.querySelector('input').value
//     let month1 = month.toLowerCase()
//     console.log(month1)
// }