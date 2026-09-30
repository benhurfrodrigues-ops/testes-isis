# Testes da API LogiTech Express

## Ambiente

* API: http://localhost:3000
* Ferramenta: Postman
* Método de teste: testes manuais

## Testes realizados

### Teste 1 — Listar entregas

**Método:** GET

**Endpoint:**
`/api/v1/entregas`

**Resultado esperado:** 200 OK

**Resultado obtido:** 200 OK

**Status:** PASSED

---

### Teste 2 — Buscar entrega por ID

**Método:** GET

**Endpoint:**
`/api/v1/entregas/1`

**Resultado esperado:** 200 OK

**Resultado obtido:** 200 OK

**Status:** PASSED

---

### Teste 3 — Buscar entrega inexistente

**Método:** GET

**Endpoint:**
`/api/v1/entregas/999`

**Resultado esperado:** 404 Not Found

**Resultado obtido:** 404 Not Found

**Status:** PASSED

---

### Teste 4 — Atualizar status da entrega

**Método:** PATCH

**Endpoint:**
`/api/v1/entregas/1/status`

**Body:**

```json
{
    "statusCodigo": "EM_ROTA",
    "observacao": "Saindo do CD"
}
```

**Resultado esperado:** 200 OK

**Resultado obtido:** 200 OK

**Status:** PASSED

---

### Teste 5 — Status não informado

**Método:** PATCH

**Endpoint:**
`/api/v1/entregas/1/status`

**Resultado esperado:** 400 Bad Request

**Resultado obtido:** 400 Bad Request

**Status:** PASSED

---

### Teste 6 — Atualizar entrega inexistente

**Método:** PATCH

**Endpoint:**
`/api/v1/entregas/999/status`

**Resultado esperado:** 404 Not Found

**Resultado obtido:** 404 Not Found

**Status:** PASSED

## Resumo

Total de testes: 6

PASSED: 6

FAILED: 0
