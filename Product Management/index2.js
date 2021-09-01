const searchFun = () => {
    let filter = document.getElementById("myInput").value.toUpperCase();
    let title = document.getElementsByClassName("card-title");

    for (let i = 0; i < title.length; i++) {
        let textValue = title[i].textContent;
        // console.log(textValue);
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          title[i].parentNode.parentNode.style.display = "";
        }
        else {
          title[i].parentNode.parentNode.style.display = "none";
        }
  }
}
let prodArray = JSON.parse( localStorage.getItem("products"));

document.addEventListener("DOMContentLoaded" , function(){
    
    for (let j = 0; j < prodArray.length; j++) {
        const item = prodArray[j];
      if (item["flag"] === "true") {

      let listItems = document.getElementById("listItems");
      const div1 = document.createElement("div");
      div1.setAttribute("class" , "col");
      listItems.appendChild(div1);
      const div2 = document.createElement("div");
      div2.setAttribute("class" , "card mt-4");
      div2.setAttribute("style" , "width: 18rem;");
      const h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title");
      const img = document.createElement("img");
      img.setAttribute("class" ,"card-img-top" );
      const div3 = document.createElement("div");
      div3.setAttribute("class" , "card-body");
      const p = document.createElement("p");
      p.setAttribute("class" , "card-text");
      const div4 = document.createElement("div");
      div4.setAttribute("class" ,"btn-group");
      div4.setAttribute("role" ,"group");
      div4.setAttribute("aria-label" ,"Basic example");
      const btn1 = document.createElement("button");
      btn1.setAttribute("type" , "button");
      btn1.setAttribute("class" , "btn btn-primary");
      btn1.innerText = "like";
      const btn2 = document.createElement("button");
      btn2.setAttribute("type" , "button");
      btn2.innerText = "remove";
      btn2.setAttribute("class" , "btn btn-primary rmv");
    //   btn2.setAttribute("class" , "  ");
    //   btn2.setAttribute("onClick" , "moveToTrash()")
      
      const btn3 = document.createElement("button");
      btn3.setAttribute("type" , "button");
      btn3.setAttribute("class" , "btn btn-primary");
      btn3.innerText = "edit";
      
    
      
      for(key in item){
    
        switch (key) {
          case "name":
      
            break;
          case "title":
            h5.innerText =item[key];
            break;
          case "price":
            
            break;
          case "image":
            img.setAttribute("src" ,item[key]);
            break;
          case "stock":
            
            break;
          case "description":
            // console.log(item[key]);
           
            p.innerText = item[key];
            break;
          case "location":
            
            break;
          case "category":
            
            break;
        
          default:
            break;
        }
      }
     
      div4.appendChild(btn1);
      div4.appendChild(btn2);
      div4.appendChild(btn3);
      div3.appendChild(p);
      div3.appendChild(div4);
      div2.appendChild(h5);
      div2.appendChild(img);
      div2.appendChild(div3);
      div1.appendChild(div2);
    }
}
let btn =  document.getElementsByClassName("rmv");
// console.log(btn);
let arr = Array.from(btn);
// console.log(arr);
for (let k = 0; k < arr.length; k++) {
    // console.log(arr[k]);
    arr[k].addEventListener("click" , function(){
        console.log(arr[k].parentNode.parentNode.parentNode.firstElementChild.innerText);
        let title = arr[k].parentNode.parentNode.parentNode.firstElementChild.innerText;
        // console.log(title);
        // console.log(prodArray.length);
        let strg = JSON.parse( localStorage.getItem("products"))
        console.log(strg);
        for (let i = 0; i < strg.length; i++) {
            const element = strg[i];
            if (element["title"] === title) {
                element["flag"] = "false";
                console.log(element);
            }
            
        // // }  
        // // localStorage.setItem("products" ,JSON.stringify(strng) )
        // }
           }   // console.log(strg);
    }) 
}
  })


// console.log(btn.length)
// for (let k = 0; k < Object.keys(btn).length; k++) {
//     // const element = btn[k];
//     console.log(btn[k])
    
// }
