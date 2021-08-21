fetch("index.json")
    .then(response => response.json())
    .then(data => {

        let val = JSON.parse(data[0]["daily_pnl"]);
        let val1 = JSON.parse(data[1]["daily_pnl"]);

        for (key in val) {

            table = document.getElementById("kb")
            
            row = document.createElement("tr");
            cellA = document.createElement("td");
            cellB = document.createElement("td");
            cellC = document.createElement("td");
            cellC.setAttribute('class', 'aa');

            table.appendChild(row);
            row.appendChild(cellA);
            row.appendChild(cellB);
            row.appendChild(cellC);

            cellA.innerText = key;
            cellB.innerText = val[key];

        }
        document.getElementById("th1").innerText = data[0]["name"];
        document.getElementById("th2").innerText = data[1]["name"];
        let tempArr = [];
        for (key in val1) {
            tempArr.push(val1[key]);
        }
        let arr = Array.from(document.getElementsByClassName("aa"));
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            arr[i].innerText = tempArr[i];
        }
    })