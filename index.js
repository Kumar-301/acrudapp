let details = [];


let form =`<div class="form-group">
<label for="name">Name</label>
<input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name">

</div>
<div class="form-group mt-3">
<label for="city">City</label>
<input type="text" class="form-control" id="city" placeholder="Enter city">
</div>
<div class="form-group mt-3">
  <label for="email">Email</label>
  <input type="email" class="form-control" id="email" placeholder="Enter email">
</div>


<button type="submit" class="btn btn-primary mt-3" onclick="save()" id="update">Save</button>`


document.getElementById("form").innerHTML = form;

function table(){
    let table = `<table class="table">
    <thead>
      <tr>
        <th class="col-1">No</th>
        <th class="col-3">Name</th>
        <th class="col-3">City</th>
        <th class="col-3">Email</th>
        <th class="col-1">Edit</th>
        <th class="col-1">Delete</th>
      </tr>
    </thead>
    <tbody>`;
    for(let i = 0; i<details.length;i++){
        table = table+`<tr>
        <td >${i+1}</td>
        <td >${details[i].name}</td>
        <td >${details[i].city}</td>
        <td >${details[i].email}</td>
        <td ><button type="button" class="btn btn-secondary" onclick="editData(${i})">Edit</button></td>
        <td ><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
      </tr>`;
    };
    table = table+`
    </tbody>
    </table>`
  document.getElementById("table").innerHTML = table;
}


getData();
table();
function getData(){
  let data = localStorage.getItem("details");
  if(data){
    details = JSON.parse(data);
  }else{
    setData()
  }
}
function setData(){
  localStorage.setItem("details",JSON.stringify(details));
}
function save(){
  
  let name=document.getElementById("name");
  let city = document.getElementById("city");
  let email = document.getElementById("email");
  if(name.value == ""){
    alert("name is required");
  }else{
    let data={
      name: name.value,
      city:city.value,
      email:email.value
    
  } 
  details.push(data);
  setData()
  console.log(details)
  table();
  name.value = "";
  city.value = "";
  email.value = ""; 

  }
  
}

function deleteData(index){

  details.splice(index,1)
  setData();
  table();

  //console.log(index);

}



function editData(index){
  let editForm =`<div class="form-group">
<label for="name">Name</label>
<input type="text" value="${details[index].name}" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Update your name">

</div>
<div class="form-group mt-3">
<label for="city">City</label>
<input type="text" value="${details[index].city}" class="form-control" id="newCity" placeholder="Update your city">
</div>
<div class="form-group mt-3">
  <label for="email">Email</label>
  <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update your email">
</div>


<button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>`
      document.getElementById("form").innerHTML = editForm;
     
     
  }
function update(index){
  let newName = document.getElementById("newName");
  let newCity = document.getElementById("newCity");
  let newEmail = document.getElementById("newEmail");
  details[index] = {
    name:newName.value,
    city:newCity.value,
    email:newEmail.value
  }
  setData();
  table();
  document.getElementById("form").innerHTML = form;
}


