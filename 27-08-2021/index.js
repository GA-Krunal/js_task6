function ip() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let firstName = fname.value;
    let lastName = lname.value;
    if ( firstName== "" || lastName  == "") {
        fname.style.border = " 2px solid red";
        fname.placeholder = "can not be empty";
        lname.style.border = " 2px solid red";
        lname.placeholder = "can not be empty";
        return false;
    }
    if (Number(firstName) || Number(lastName)) {
        alert("Name only contains text values");
        return false;
    }
    localStorage.setItem(firstName,lastName );

    let tBody = document.querySelector("tbody");
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "delete";
    button.style.backgroundColor = "red";
    td3.appendChild(button);
    td1.innerText = firstName;
    td2.innerText = lastName;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tBody.appendChild(tr);

    button.addEventListener("click", function () {
        localStorage.removeItem(firstName);    
        tr.remove();
    })
}







