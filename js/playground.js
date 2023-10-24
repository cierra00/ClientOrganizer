/* Promises */

/*const  myPromise = new Promise ((resolve, reject) =>{
    const error = false;

    if(error){
        resolve('Promise is Resolved');
    }  else {
        reject("Promise was Rejected");
    }
});



 myPromise.then(value=>{
    return value + " This is the new value";
}).then(newValue=>{
    console.log(newValue)
}).catch(err=>{
    console.log(err)
}) 

const myNextPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('this really works');
    }, 3000);
    
})

myNextPromise.then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
}) 

fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
     return res.json();
     }).then(data =>{
       const onePerson = data.filter( persons => persons.id === 2).map( person => {
        console.log(person.name)
    })
})
     

*/
const myUsers = {
    userList:[],
}

myData = async ()=> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonUserData = await response.json();
    return jsonUserData;
    
}

const myFunction = async ()=>{
    
    const data = await myData();
    myUsers.userList = data; 
    console.log(myUsers.userList)
    
data.map( person => {

// parent element
const myContainer = document.getElementById('taskContainer');

 /// Card Container    
 const cardPanel = document.createElement('div');
 cardPanel.className ="card-panel task white row";
 myContainer.appendChild(cardPanel);

 // column for profile icon
 const cardColOne = document.createElement("div");
 cardColOne.className = "col-sm-12";
 cardPanel.appendChild(cardColOne);


 


 // task detail element

 const taskDetail = document.createElement('div');
 taskDetail.className = "task-detail col-sm-12";
 cardPanel.appendChild(taskDetail);

const profileIcon = document.createElement("i");
profileIcon.className ="material-icons task-detail prof-icon";

profileIcon.style.fontSize = "6rem"
profileIcon.innerText = 'account_circle';
cardColOne.appendChild(profileIcon);

// title
const title = document.createElement("div");
title.className = "task-title flow-text";
title.innerHTML = person.name;
taskDetail.append(title);

/// email
const email = document.createElement("div");
email.className = "task-description";

taskDetail.append(email);

//email tag
const emailTag = document.createElement('a')
emailTag.href = "mailto:webmaster@example.com"
emailTag.innerText = person.email;
email.appendChild(emailTag)

/// phone
const phone = document.createElement("button");
phone.className = "task-description";
phone.style.width = "60%"
phone.style.padding ="0.2rem"
phone.innerHTML = person.phone ;
taskDetail.append(phone);

//Phone Icon
const phoneIcon = document.createElement("i");
phoneIcon.className ="material-icons right";
phoneIcon.style.color = "green"
phoneIcon.innerText = 'phone';
//phone.appendChild(phoneIcon);

/// description
const description = document.createElement("a");
description.href = `https://${person.website}`;
description.className = "task-description";
description.style.display ="block";
description.innerHTML = "https://" + person.website;
taskDetail.append(description);


// delete Container
const deleteItem = document.createElement('div');
deleteItem.className = "task-delete";
cardPanel.appendChild(deleteItem);

//Delete Icons
const deleteIcon = document.createElement("i");
deleteIcon.className ="material-icons";
deleteIcon.innerText = 'delete_outline';
deleteItem.appendChild(deleteIcon);

//img





})
 


}




myFunction();



  