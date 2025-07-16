import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"
import { schedulesDay } from "../schedules/load.js"

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){
    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) =>{
        // Recupera a Hora
        const [scheduleHour] = hour.split(":")
        
        // Verifica se a hora já passou
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        
        const avaliable = !unavailableHours.includes(hour) && !isHourPast
        console.log(avaliable)

        // Verifica se está disponível
        return{
            hour,
            avaliable,
        }
    })

    opening.forEach(({ hour, avaliable}) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(avaliable ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00"){
            hourHeadAdd("Manhã")
        }else if(hour === "13:00"){
            hourHeadAdd("Tarde")
        }else if(hour === "18:00"){
            hourHeadAdd("Noite")
        }

        hours.append(li)
    });

    hoursClick()
}

function hourHeadAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}