import express from 'express';
const app = express();
const port = 3000;



// app.get('/',(req,res) => {

//     res.send('Hello World! ')
// }) 

app.use((req,res,next)=>{
    console.log('First dummy middleware at app level', req.path, req.method)
    next()
})

app.use((req,res,next)=>{
    console.log('Second dummy middleware at app level', req.url, req.method)
    next()
})

app.use((req, res, next)=>{
    console.log('Third dummy middleware at app level', req.url, req.method)
    res.send('Hello from Third middleware')
    next()
})



// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000')
})