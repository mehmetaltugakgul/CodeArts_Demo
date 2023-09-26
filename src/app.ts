const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.get('/api', (req: any, res: any) => {
  res.send('Hello World!')
})

app.get('/api/whoami', (req: any, res: any) => {
  res.send('Huawei Cloud!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})