import { scheduleCancel } from "../../services/schedule-cancel"
import { schedulesDay } from "./load"
const periods = document.querySelectorAll(".period")

// Gera um evento de click para cada um
periods.forEach((periods) =>{
    periods.addEventListener("click", async(event)=>{
        if(event.target.classList.contains("cancel-icon")){
            const item = event.target.closest("li")
            const {id} = item.dataset
            console.log(id)

            if(id){
                const isConfirm = confirm("Tem certeza?")
                if(isConfirm){
                    await scheduleCancel({id})
                    schedulesDay()
                }
            }
        }
    })
})