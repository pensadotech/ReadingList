

// API routes
module.exports = function (app) {

  app.post('/create', (req, res) => {
    restaurant.createReservation(req.body)
    console.log("post-create")
    res.sendStatus(200)
  })

  app.post('/update', (req, res) => {
    console.log("post-update")
    res.sendStatus(200)
  })

  app.post('/delete', (req, res) => {
    console.log("post-delete")
    res.sendStatus(200)
  })

}