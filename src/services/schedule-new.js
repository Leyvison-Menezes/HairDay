import { apiConfig } from "./api-config";

export async function scheduleNew({id, name, when}) {
    try {
        //Fazendo a requisição para enviar os dados do agendamento
        await fetch (`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: String(id), name, when}),
        })

        alert("Agendamento realizado")

    } catch (error) {
        alert(error)
    }
}