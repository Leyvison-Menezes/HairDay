import { scheduleFtechByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    //Obtem a data do iput
    const date = selectedDate.value

    // Busca na API
    const dailySchedules = await scheduleFtechByDay({date})

    // Exibe os agendamentos
    scheduleShow({dailySchedules})

    // Renderiza as horas
    hoursLoad({date, dailySchedules})
}