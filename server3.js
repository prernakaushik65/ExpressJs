const express = require('express');

var app = express();
const port = 3000;
//using third party using middleware, i.e., use()
app.use(express.static(__dirname + '/public')); //static() is used to include folder path

app.get('/',(req,res) => {
  res.send({
    name: 'Anik',
    blog: 'https://webguruanik.blogspot.com',
    likes: ['Eat','Code','Sleep','Repeat']
  });
});

app.get('/about', (req,res) => {   //req : request, res: response
  res.send('About Page');
})

app.get('/error',(req,res) =>
{
  res.send({
    errorMsg: 'Unable to find the page'
  });
});

//listening the app on port no. 3000

app.listen(port, ()=> {
  console.log(`App listening on port number : ${port}.....!!!`);

});
