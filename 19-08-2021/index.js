// ********************Task1*****************

fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc1(colorchemeArray) {

                for (let i = 0; i < colorchemeArray.length; i++) {
                    const element = colorchemeArray[i];
     
                    for (const key in element) {
                       if (key === "activate" && element[key] === true) {
                            return element["json"];
                        }        
                    }  
                }
            }
            console.log(myFunc1(data["colorschemes"]));
        })


// ********************Task2*****************

/*
fetch("index.json")
    .then(response => response.json())
    .then(data => {

        function myFunc2(colorchemeArray) {
            let arr = [];

            for (let i = 0; i < colorchemeArray.length; i++) {
                const element = colorchemeArray[i];

                for (const key in element) {

                    if (key === "activate") {
                        for (const a in element["json"]) {
                            arr.push(a);
                        }
                        return arr;
                    }
                }
            }
        }
        console.log(myFunc2(data["colorschemes"]));
    })
*/

// ********************Task3*****************
/*
fetch("index.json")
    .then(response => response.json())
    .then(data => {
        function myFunc3(colorchemeArray) {
            let arr = [];

            for (let i = 0; i < colorchemeArray.length; i++) {
                const element = colorchemeArray[i];

                for (const key in element) {
                    if (key === "activate") {

                        for (const a in element["json"]) {
                             const sObj = element["json"][a];

                            for (const keyy in sObj) {
                                arr.push(keyy);
                            }
                        }
                    }
                }
            }
            return arr;
        }
        console.log(myFunc3(data["colorschemes"]));
    })
*/

