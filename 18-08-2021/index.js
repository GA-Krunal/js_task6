// ******************task1****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc1(stepNo ,elementName ) {
                try {

                    let stepNumber = "s" + stepNo;
                    if(data[stepNumber][elementName]){
                        return data[stepNumber][elementName];
                    }
                    else{
                        throw "invalid parameters!";
                    }

                } catch (err) {
                    return "invalid parameters passed";
                }
            }  
            console.log(myFunc1(2,"image-5"));
        })
*/

// ******************task2****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc2(stepNo ,elementName ) {
                try {
                    let stepNumber = "s" + stepNo;
                    if( data[stepNumber][elementName]){
                        return true;
                    }
                    else{
                        return false;
                    }
                } catch (err) {
                    return "invalid parameters passed!"
                }     
            }
            console.log(myFunc2(1,"text-3"));
        })
*/

// ******************task3****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc3(colorchemeArray ,colorschemeName ) {
                for (let i = 0; i < colorchemeArray.length; i++) {
                    const element = colorchemeArray[i];
                    // console.log(element);
                    if (element["name"]=== colorschemeName) {
                        return element;
                    }
                    else{
                        return "invalid parameters passed!";
                    }
                }
            }

            console.log(myFunc3(data["colorschemes"],'Green'));
        })
*/

// ******************task4****************

/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc4(colorchemeArray ,colorschemeName , stepNo , elementName ) {
                try {
                    let stepNumber = "s" + stepNo;
                    for (let i = 0; i < colorchemeArray.length; i++) {
                        const element = colorchemeArray[i];
                    // console.log(element);
                        if (element["name"]=== colorschemeName) {
                        // return element;
                            if (element["json"][stepNumber][elementName]["style"]["color"]) {

                                return element["json"][stepNumber][elementName]["style"]["color"];
                            }
                            else{

                                return element["json"][stepNumber][elementName]["style"]["background-color"];
                            }
                        
                        }
                        else{
                            return "color name does not exist";
                        }
                    }
                } catch (err) {

                    return "invalid parameters passed!";
                }
                
            }
            console.log(myFunc4(data["colorschemes"],'Black', 3, 'text-12'));
        })
*/

// ******************task5****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc5(stepArray ,elementName ) {
                for (let i = 0; i < stepArray.length; i++) {
                    const val = stepArray[i];
                    // console.log(element);
                    // console.log(element["elements"]);
                    for (const key in val["elements"]) {
                        if (Object.hasOwnProperty.call(val["elements"], key)) {

                            if (val["elements"][key] === elementName) {
                                return val["stepnum"];
                            }
                            else{
                                return "elementName does not exist!";
                            }
                        }
                    }
                    
                }
                  
            }

            console.log(myFunc5(data["steps"],"button-3"));
        })
*/
