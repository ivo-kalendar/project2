
const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const server = express()


server.use(express.urlencoded({extended: false}))
server.use(express.json())

const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, config.devServer)
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

const router = require('./router')

const staticMiddleware = express.static('dist')
server.use(staticMiddleware)
server.set('views', 'views')
server.set('view engine', 'ejs')

server.use('/', router)

const port = process.env.PORT

server.listen(port, () => {
	console.log(`Server is listening on port: ${port}...`)
})


