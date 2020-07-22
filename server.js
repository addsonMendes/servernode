const port = process.env.PORT || 80
require('http')
  .createServer((req, res) => {
    console.log(`incoming url: ${req.url} and incoming method: ${req.method}`)
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.write('<p>Alo mundo</p>')
    res.end('<h1>Server node</h1>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })