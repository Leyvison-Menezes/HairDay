import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFtechByDay({date}) {
    try {
        // Fazendo a requisição
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converte para JSON
        const data = await response.json()

        // Filtra os agendamentos pelo dia
        const dailySchedules = data.filter((schedule) =>
            dayjs(date).isSame(schedule.when, "day")
        )

        return dailySchedules
    } catch (error) {
        alert(error)
    }
}