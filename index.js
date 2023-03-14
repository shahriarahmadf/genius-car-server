const express= require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// READ
app.get('/', (req,res) => {
    res.send('genius car server running');
})

// 
app.listen(post, () => {
    console.log(`Genius car server running on ${port}`);
})