// https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware#the-servermiddleware-property
// Oppure per versione server con nuxt start https://nuxtjs.org/docs/internals-glossary/nuxt-render

const express = require('express')

// init app
const app = express()
// Parse JSON bodies
app.use(express.json())
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }))

// Test API
app.post('/my-api', (req, res) => {
  res.json({ data: { response: req.body.params } })
})

module.exports = app
