let form = document.getElementById("form");
displayall();                                          // Display localStorage values
form.addEventListener('submit',function(event){
    event.preventDefault();
    additem();                                              
  
})  

function additem(){                                     // function to add item in the list
    let task = document.getElementById("task").value;   
    let desc = document.getElementById("desc").value;
    localStorage.setItem(task,JSON.stringify(desc));    // adding in local storage
    form.reset();
    location.reload();                                  // reload to reset table values
    displayall();                                       // display everything from local storage
    
}

function createRow(index,task,desc){                    // function to create new row in table
    let tbody = document.getElementsByTagName("tbody")[0];

    let trow = document.createElement("tr");
    tbody.appendChild(trow);
    
    let th = document.createElement("th");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    
    trow.appendChild(th);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);

    th.innerHTML = index;
    td1.innerText = task;
    td2.innerText = desc;
    td3.innerHTML = `<button class="btn btn-danger"  type="submit" onclick="deleteRow(${index})"><i style="font-size:20px" class="fa fa-trash-o"></i></button>`;
    
}

function displayall(){                                  // function to display everything from local storage
    if(localStorage.length==0){
        document.getElementsByClassName("empty")[0].innerHTML = `<div class="dropdown-divider"></div><br><h1 style="text-align: center;">Nothing To Do!!</h1>`;
    }
    
    for(let i=0;i<localStorage.length;i++){
        createRow(i+1,localStorage.key(i),localStorage.getItem(localStorage.key(i)));
    }
}

function deleteRow(index){                            // finction to delete a row from localstorage using button
    location.reload();
    let id = index-1;
    console.log(id);
    localStorage.removeItem(localStorage.key(id));
    displayall();
}    

    

    

    
    
    

