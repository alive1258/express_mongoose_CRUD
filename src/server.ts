import app from './app'
import config from './app/config'
import mongoose from 'mongoose'

async function server() {
  try {
    await mongoose.connect(config.database_Url as string)
    console.log('connected to mongodb')
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server().catch(err => console.log(err))
