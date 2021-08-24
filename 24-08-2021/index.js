fetch("index.json")
    .then(response => response.json())
    .then(data => {

        function myFunc1(colorchemeArray) {

            for (let i = 0; i < colorchemeArray.length; i++) {

                const element = colorchemeArray[i];
                const tBody = document.querySelector('tbody');
                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                tBody.appendChild(tr);

                for (key in element) {

                    if (key === "id") {
                        td1.innerText = element[key];
                        tr.appendChild(td1);
                    }
                    else if (key === "name") {
                        td2.innerText = element[key];
                        tr.appendChild(td2);
                    }
                    else if (key === "activate") {
                        td3.innerText = "Yes";
                        tr.appendChild(td3);
                    }
                    else if (element["activate"] === undefined) {
                        td3.innerText = "No";
                        tr.appendChild(td3);
                    }
                    else {
                        continue;
                    }
                }
            }
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



