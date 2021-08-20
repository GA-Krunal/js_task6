// ****************task1*****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{
            let count = 0;
            function myFunc1(stepJson ,elementType ) {
            //    console.log(data[stepJson]);
               for(key in data[stepJson]){
                //    console.log(key);
                   if (key.includes(elementType)) {
                       count++;
                   }
               }
               return count;
            }
            console.log(myFunc1("s2","form"));
        })
*/
// ****************task2*****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc2(stepNo ,elementType ) {
                    let arr = [];
                    let stepNumber = "s" + stepNo;
                    for(key in data[stepNumber]){
                        if (key.includes(elementType)) {
                            arr.push(key);
                        }
                       }
                    const elem = arr[arr.length - 1];
                    return data[stepNumber][elem];       
            }  
            console.log(myFunc2(2,"image"));
        })
*/

// ****************task3*****************
/*
fetch("index.json")
        .then(response => response.json())
        .then(data =>{

            function myFunc3(stepNo ,tagValue ) {
                    let arr = [];
                    let stepNumber = "s" + stepNo;

                   for (const key in data[stepNumber]) {
                       if (Object.hasOwnProperty.call(data[stepNumber], key)) {
                           const element = data[stepNumber][key];
                            
                           for (const keyy in element) {
                               if (Object.hasOwnProperty.call(element, keyy)) {
                                   const val = element[keyy];
                                   if (val === tagValue && keyy === "tag") {
                                       arr.push(element);
                                   }      
                               }
                           }  
                       }
                   }
                   return arr;
            }  
            console.log(myFunc3(1,"span"));
        })
*/