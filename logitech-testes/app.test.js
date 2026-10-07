const request = require('supertest')
const app = require('../server.js')

describe('Smoke Test - Verificação de Ambiente', () => {
    // A API não tem rota GET "/", então usamos a rota de listagem
    it('Deve responder com status 200 na rota de listagem de entregas', async () => {
        const response = await request(app).get('/api/v1/entregas')
        expect(response.statusCode).toBe(200)
    })
})
