// ********************Task1*****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc3(colorchemeArray) {

                for (let i = 0; i < colorchemeArray.length; i++) {
                    const element = colorchemeArray[i];
    
                    for (const key in element) {
                        if (Object.hasOwnProperty.call(element, key)) {
                            if (key === "activate") {
                                return element["json"];
                            }
                            
                        }
                    }  
                }
            }
            console.log(myFunc3(data["colorschemes"]));
        })
*/
// ********************Task3*****************
/*

fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc3(colorchemeArray) {
                let arr = [];

                for (let i = 0; i < colorchemeArray.length; i++) {
                    const element = colorchemeArray[i];
    
                    for (const key in element) {
                        if (Object.hasOwnProperty.call(element, key)) {
                            if (key === "activate") {
                                for(const a in element["json"]) {
                                    arr.push(a);
                                }
                                return arr;
                            }
                            
                        }
                    }  
                }
            }
            console.log(myFunc3(data["colorschemes"]));
        })
*/

// ********************Task3*****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{
            function myFunc3(colorchemeArray) {
                let arr = [];

                for (let i = 0; i < colorchemeArray.length; i++) {
                    const element = colorchemeArray[i];
    
                    for (const key in element) {
                        if (Object.hasOwnProperty.call(element, key)) {
                            if (key === "activate") {
                                for (const a in element["json"]) {
                                    if (Object.hasOwnProperty.call(element["json"], a)) {
                                        const sObj = element["json"][a];
                                        for(const keyy in sObj){
                                            arr.push(keyy);
                                        }          
                                    }
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
