import React, { useEffect, useState } from 'react'
import { useStopwatch, useTime, useTimer } from 'react-timer-hook'
import TimeWarining from './TimeWarining'
function Clock(props) {

    const time = useTime()
    const [minutesOnSite, setMinutesOnSite] = useState(0)
    const [minutesTillWarning, setMinutesTillWarning] = useState(minutesOnSite)
    // useEffect(()=> setMinutesOnSite(timeOnSite.seconds), [timeOnSite.minutes])
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятницы", "Суббота"]
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Отктября", "Ноября", "Декабря"]
    const [date, setDate] = useState(new Date())
    const [dayofWeek, setdayofWeek] = useState()
    const [month, setMonth] = useState()
    const [dateNumber, setdateNumber] = useState()
    const [warningState, setWarningState] = useState(false)
    function closeWarning(){
        setWarningState(false)
    }
    useEffect(update, [time.minutes])
    function update() {
        setDate(new Date())
        setdayofWeek(days[date.getDay()])
        setdateNumber(date.getDate())
        setMonth(months[date.getMonth()])
        setMinutesOnSite(Math.round((new Date() - new Date(localStorage.getItem('onsite'))) / 1000 / 60))
        setMinutesTillWarning(Math.round(minutesOnSite /20))
        console.log(minutesOnSite)
        if (minutesTillWarning>20){
            setMinutesTillWarning(0)
            setWarningState(true)
            console.log('warn')
        }
        // setTimeout(()=> setWarningState(true), 3000)
    }
    return (
        <div className='clock'>
            <h1>{dayofWeek}</h1>
            <h1>{`${dateNumber} ${month}`}</h1>
            <h2>{`${time.hours}:${time.minutes < 10 ? '0' + time.minutes : time.minutes}`}</h2>
            <div>
            <p>{minutesOnSite? 'Вы на сайте уже':''}</p>
            <p>{minutesOnSite ? `${minutesOnSite} минут${Math.floor(minutesOnSite/10)%10 !== 1?  minutesOnSite % 10 === 1 ? 'у' : [2, 3, 4].includes(minutesOnSite % 10) ? 'ы' : '':''}` : ''}</p>
            </div>
            {warningState? <TimeWarining time={minutesOnSite} click={closeWarning}></TimeWarining>:''}
        </div>
    )
}

export default Clock