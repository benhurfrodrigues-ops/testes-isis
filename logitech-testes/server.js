const express = require("express")

const app = express()

app.use(express.json())

let entregas = [
    {
        id: 1,
        motorista: "Carlos",
        status: "PENDENTE"
    }
]

app.get("/api/v1/entregas", (request, response) => {
    response.json(entregas)
})

app.get("/api/v1/entregas/:id", (request, response) => {
    const id = Number(request.params.id)

    const entrega = entregas.find((entrega) => entrega.id === id)

    if (!entrega) {
        return response.status(404).json({
            erro: "Entrega não encontrada"
        })
    }

    response.json(entrega)
})

app.patch("/api/v1/entregas/:id/status", (request, response) => {
    const id = Number(request.params.id)
    const { statusCodigo, observacao } = request.body

    const entrega = entregas.find((entrega) => entrega.id === id)

    if (!entrega) {
        return response.status(404).json({
            erro: "Entrega não encontrada"
        })
    }

    if (!statusCodigo) {
        return response.status(400).json({
            erro: "statusCodigo é obrigatório"
        })
    }

    entrega.status = statusCodigo
    entrega.observacao = observacao

    response.json(entrega)
})

// Só sobe o servidor quando executado direto (node server.js).
// Nos testes, o Supertest usa o app sem abrir a porta 3000.
if (require.main === module) {
    app.listen(3000, () => {
        console.log("API rodando em http://localhost:3000")
    })
}

module.exports = app
