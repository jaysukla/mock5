const jsonServer = require('json-server');
const app = jsonServer.create();
const data = require('./db.json')
const middlewares = jsonServer.defaults();
var cors = require('cors')
const port = 3000;
app.use(jsonServer.bodyParser);
app.use(middlewares);
 
app.use(cors())

let id=1;


app.post('/freelancers',(req,res)=>{
let {name,email,password,profession,skills,hourly_rate,profile_picture,isBooked}= req.body;

data.users.push({id,name,email,password,profession,skills,hourly_rate,profile_picture,isBooked})
id++
res.json({"msg":"Successfully registered"})

})

app.get("/freelancers",(req,res)=>{
 

  res.json({"data":data.users})



})

app.delete("/freelancers",(req,res)=>{
let d=req.query.id;
console.log(d)

for(let i=0;i<(data.users).length;i++){
if (d==(data.users)[i].id){
  (data.users).splice(i,1)
  break;
}


}

res.json({"msg":"deleted"})

})


app.patch("/freelancers",(req,res)=>{
  let d=req.query.id;
  console.log(d)
  
  for(let i=0;i<(data.users).length;i++){
  if (d==(data.users)[i].id){
    
    (data.users)[i].isBooked=true
    break;
  }
  
  
  }

  res.json({"msg":"Booked"})

})



app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
