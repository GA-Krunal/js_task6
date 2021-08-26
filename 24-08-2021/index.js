fetch("index.json")
    .then(response => response.json())
    .then(data => {

        function myFunc1(colorchemeArray) {
            const tBody = document.querySelector('tbody');
            for (let i = 0; i < colorchemeArray.length; i++) {

                const element = colorchemeArray[i];
                for (key in element) {
                    if (element["activate"] === undefined) {
                        element["activate"] = false;
                    }
                }
                const tr = document.createElement("tr");
                tr.id = "tr" + (i + 1);
                for (let j = 0; j < Object.keys(element).length; j++) {

                    let td = document.createElement("td");
                    tr.appendChild(td);
                    switch (j) {
                        case 0:
                            td.innerText = element["id"];
                            break;
                        case 1:
                            td.innerText = element["name"];
                            break;
                        case 2:
                            if (element["activate"] === true) {
                                td.innerText = "Yes";
                            }
                            else {
                                td.innerText = "No";
                            }
                            break;
                        case 3:
                            for (key in element["json"]) {
                                const trr = document.createElement("tr");
                                trr.innerText = key;
                                td.appendChild(trr);
                            }
                            break;
                        default:
                            break;
                    }
                }
                tBody.appendChild(tr);
            }
            console.log(tBody);
        }
        myFunc1(data["colorschemes"]);

        document.getElementById("rd1").addEventListener("click", function () {

            let filter = document.getElementById("rd1").value.toUpperCase();
            let myTable = document.getElementById("myTable");
            let tr = myTable.getElementsByTagName("tr");
            for (let i = 0; i < tr.length; i++) {
                let td = tr[i].getElementsByTagName("td")[2];
                if (td) {
                    let textValue = td.textContent || td.innerHTML;
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }
                    else {
                        tr[i].style.display = "none";
                    }
                }
            }
        })
        document.getElementById("rd2").addEventListener("click", function () {

            let filter = document.getElementById("rd2").value.toUpperCase();
            let myTable = document.getElementById("myTable");
            let tr = myTable.getElementsByTagName("tr");
            for (let i = 0; i < tr.length; i++) {

                let td = tr[i].getElementsByTagName("td")[2];
                if (td) {
                    let textValue = td.textContent || td.innerHTML;
                    if (textValue.toUpperCase().indexOf(filter) > -1) {

                        tr[i].style.display = "";
                    }
                    else {
                        tr[i].style.display = "none";
                    }
                }
            }
        })
        document.getElementById("rd3").addEventListener("click", function () {

            let myTable = document.getElementById("myTable");
            let tr = myTable.getElementsByTagName("tr");
            for (let i = 0; i < tr.length; i++) {

                tr[i].style.display = "";
            }
        })
    })