const app = require('./app')
const port = process.env.PORT || 5001

app.listen(port, function () {
    console.log(`Server has been started on ${port}`)
})


// app.get('/signIn', (req, res)=> {
//     res.status(200).json({
//         message: 'User signIn'
//     })
// })
// app.get('/', (req, res)=> {
//      res.status(200).json({
//          message: 'Working'
//      })
// })