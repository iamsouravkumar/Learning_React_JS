const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
app.use(express.json());
const port = 5000

app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))

app.listen(port, () => {
  console.log(`iNoteBok backend running on port ${port}`)
})

