import express from 'express'
// Aqui eu ativo a "conversa" entre rotas de localhost diferentes
import cors from 'cors'

// Aqui ensinamos o servidor a ler arquivos 
import fs from 'fs'

const app = express()
const PORTA = 3000

// Aqui estou informando ao app que eu vou utilizar o cors e o json
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Olá! O servidor está funcionando.')
})

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})


app.post('/login', (req, res) => {
    const nome = req.body.nome
    const senha = req.body.senha

    const arquivo = fs.readFileSync('./usuarios.json', 'utf-8')
    const usuarios = JSON.parse(arquivo)

    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.nome === nome && usuario.senha === senha
    )

    if (!usuarioEncontrado) {
        return res.status(401).json({
            mensagem: 'Nome ou senha incorretos'
        })
    }

    res.json({
        mensagem: 'Login feito com sucesso',
        nome: usuarioEncontrado.nome
    })
})

app.put('/perfil/:id', (req, res) => {
    const id = Number(req.params.id)

    const nome = req.body.nome
    const username = req.body.username
    const description = req.body.description

    const arquivo = fs.readFileSync('./usuarios.json', 'utf-8')
    const usuarios = JSON.parse(arquivo)

    const usuario = usuarios.find((usuario) => usuario.id === id)

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado'
        })
    }

    usuario.nome = nome
    usuario.username = username
    usuario.description = description

    fs.writeFileSync('./usuarios.json', JSON.stringify(usuarios, null, 4))

    res.json({
        mensagem: 'Informações atualizadas'
    })
})

app.get('/perfil/:id', (req, res) => {
    const id = Number(req.params.id)
    const arquivo = fs.readFileSync('./usuarios.json', 'utf-8')
    const usuarios = JSON.parse(arquivo)

    const usuario = usuarios.find((usuario) => usuario.id === id)

    if (!usuario) {
        return res.status(404).json({
            mensagem: 'Usuário não encontrado'
        })
    }
    res.json({
        nome: usuario.nome,
        username: usuario.username,
        description: usuario.description
    })
})