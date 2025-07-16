import { apiConfig } from "./api-config";

export async function scheduleCancel({id}){
    try {
        
        await fetch(`${apiConfig.baseURL}/schedules/${String(id)}`, {
            method: "DELETE",
        })

        alert("Agendamento cancelado!")
    } catch (error) {
        alert(error)
    }
}