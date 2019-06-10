const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
    const customers =[
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Andre', lastName: 'Hoffmann'},
        {id: 3, firstName: 'Mr', lastName: 'Me'}
    ];

    res.json(customers);
});


const port = 9000;
app.listen(port,() => console.log(`Server started on port ${port}`));