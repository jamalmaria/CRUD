var list = [
    {name: "Imad Ahmed", contact: 8790085890, email:"imadahmed@gmail.com", qualification:"Web-Developer", intake:2018, course:"Masters"},{name: "Maria Jamal", contact: 9100223790, email:"jamalmaria111@gmail.com", qualification:"Clas 12", intake:2019, course:"Bachelors"},{name:"Harika Kota", contact:87866689768, email:"haarikakota@gmail.com", qualification:"Engineer", intake:2020, course:"Masters"}
]
var contactList = document.getElementById('contactList');

//READ
function fetch(){
   var data = "";
    for ( var i=0 ; i < list.length; i++){
        data += `<tr><td> ${list[i].name}</td>
        <td> ${list[i].contact}</td>
        <td> ${list[i].email}</td>
        <td> ${list[i].qualification}</td>
        <td> ${list[i].intake}</td>
        <td> ${list[i].course}</td>
        <td><button class="btn btn-warning" onclick="showUpdate(${i})">Update</button></td>
        <td><button class="btn btn-danger" onclick="del(${i})">Delete</button></td></tr>`
    }
    contactList.innerHTML = data;
}
//CREATE
function add() {
    var input1 = document.getElementById('name');
    var input2 = document.getElementById('contact');
    var input3 = document.getElementById('email');
    var input4 = document.getElementById('qualification');
    var input5 = document.getElementById('intake'); 
    var input6 = document.getElementById('course');
    var person = {
        name: input1.value,
        contact: input2.value,
        email: input3.value,
        qualification: input4.value,
        intake: input5.value,
        course: input6.value,


    }
    console.log(person);
    list.push(person);
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";
    console.log(list);
    data = "";
    fetch();
}
//UPDATE
function showUpdate(index){
   var update = document.getElementById('update');
   var create = document.getElementById('create');
   var updateForm = document.getElementById('updateForm');
   update.style.display = "block";
   create.style.display = "none";
   console.log(index)
   var person = list[index];
   console.log(person);
   var updateContact = document.getElementById('updateContact');
   var updateName = document.getElementById('updateName');
   var updateEmail = document.getElementById('updateEmail');
   var updateQualification = document.getElementById('updateQualification');
   var updateIntake = document.getElementById('updateIntake');
   var updateCourse = document.getElementById('updateCourse');

   updateName.value = person.name;
   updateContact.value = person.contact;
   updateEmail.value = person.email;
   updateQualification.value = person.qualification;
   updateIntake.value = person.intake;
   updateCourse.value = person.course;
   updateForm.onsubmit = function(){
       console.log(`name: ${updateName.value} contact: ${updateContact.value} email: ${updateEmail.value} qualification: ${updateQualification.value} intake: ${updateIntake.value} course: ${updateCourse.value}`)
       var personObj = {
           name: updateName.value,
           contact: updateContact.value,
           email: updateEmail.value,
           qualification: updateQualification.value,
           intake: updateIntake.value,
           course: updateCourse.value,

       }
       list.splice(index, 1, personObj);
       fetch()
   }
}
//DELETE
function del(index){
    list.splice(index,1);
    fetch();
}

fetch();