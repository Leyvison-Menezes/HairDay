
import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form")
const selectDate = document.getElementById("date")
const clientName = document.getElementById("client")
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


// Carrega a data atual e seta o mínimo
selectDate.value = inputToday
selectDate.min = inputToday

form.onsubmit = async (event) =>{
    event.preventDefault()

    try {
        // Recuperando o nome do cliente
        const name = clientName.value.trim()

        if(!name){
            alert("Informe o seu nome")
        }

        //Recuperando a hora selecionada
        const hourSelected = document.querySelector(".hour-selected")

        if(!hourSelected){
            alert("Informe o horário do atendimento")
        }

        //Somente a hora
        const [hour] = hourSelected.innerText.split(":")

        //Data + Hora
        const when = dayjs(selectDate.value).add(hour, "hour")

        //ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })

        await schedulesDay()
        clientName.value = ""
    } catch (error) {
        alert("Não foi possível realizer o agendamento!")
    }

}