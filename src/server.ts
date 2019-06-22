import express from 'express'
import morgan from 'morgan'

const PORT:number=4000

const app: express.Application = express()
app.use(morgan("dev"))

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/articles', (req, res) => {
  res.json({}).status(200)
})

app.listen(PORT, () => console.log(`[SERVER] is up and running on port ${PORT}`)) 

export {app}