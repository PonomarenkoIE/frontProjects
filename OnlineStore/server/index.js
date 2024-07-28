import express from 'express'
import 'dotenv/config'
import sequelize from './db.mjs'
import cors from 'cors'
import router from './routes/index.mjs'
import ErrorHandler from './middleware/ErrorHandlingMiddleware.mjs'
import fileUpload from 'express-fileupload'
import path from 'path'
import pathConst from './customModules/pathConst.mjs'

const {__dirname} = pathConst(import.meta.url)

const port = process.env.port ?? 8000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)
//errors
app.use(ErrorHandler)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => console.log(`Server start on port ${port}`))
  }
  catch (e) {
    console.log(e)
  }
}

start()