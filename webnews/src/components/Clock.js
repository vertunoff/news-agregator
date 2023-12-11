import React, { useEffect, useState } from 'react'
import { useStopwatch, useTime, useTimer } from 'react-timer-hook'
function Clock(props) {
    const [noRender, setNoRender] = useState(false)
    
    const time = useTime()
    // const timeOnSite = useStopwatch()
    // timeOnSite.start()
    const [minutesOnSite, setMinutesOnSite] = useState(0)
    // useEffect(()=> setMinutesOnSite(timeOnSite.seconds), [timeOnSite.minutes])
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятницы", "Суббота"]
    const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Отктября", "Ноября", "Декабря"]
    const [date, setDate] = useState(new Date())
    const [dayofWeek, setdayofWeek] = useState()
    const [month, setMonth] = useState()
    const [dateNumber, setdateNumber] = useState()
    useEffect(() => { setDate(new Date()); setdayofWeek(days[date.getDay()]); setdateNumber(date.getDate()); setMonth(months[date.getMonth()]) }, [time.minutes])
    return (
        <div className='clock'>
            <h1>{dayofWeek}</h1>
            <h1>{`${dateNumber} ${month}`}</h1>
            <h2>{`${time.hours}:${time.minutes < 10 ? '0'+time.minutes:time.minutes}`}</h2>
            <p>Вы на сайте уже</p>
            <p>{`${1} минут ${minutesOnSite}`}</p>
        </div>
    )
}

export default Clock