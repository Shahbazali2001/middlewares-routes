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

// app.use((req, res, next)=>{
//     console.log('Third dummy middleware at app level', req.url, req.method)
//     res.send('Hello from Third middleware')
//     next()
// })

app.get('/', (req, res) => { 
    res.send('Hello, I am handling middlewares')
})


app.get('/contact-us',(req, res, next)=>{
    console.log('Contact Us', req.url, req.method)
    res.send(`
     <h1>Contact Us</h1>   
    <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Name">    
        <br>
        <input type="email" name="email" placeholder="Email">
        <br>
        <input type="password" name="password" placeholder="Password">
        <br>
        <button type="submit">Submit</button>
    </form>`)
}) 

app.post('/contact-us',(req, res, next)=>{ 
    console.log('Contact Us', req.url, req.method)
    res.send(`
     <h1>Thank You</h1>
    `)
})



// Start the server
app.listen(port, () => {
    console.log('Server is running on port 3000')
})