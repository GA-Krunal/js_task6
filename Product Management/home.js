const getData = () => {
  let products;
   let prodName = document.getElementById("prodName").value;
   let prodTitle = document.getElementById("prodTitle").value;
   let prodPrice = document.getElementById("prodPrice").value;
   let imgUrl = document.getElementById("imgUrl").value;
   let availability;
   if (document.getElementById('rd1').checked) {
      availability = document.getElementById('rd1').value;
     }
     else{
     availability = document.getElementById('rd2').value;
     }
     let description = document.getElementById("description").value;
     let location = document.getElementById("location").value;
     let category = document.getElementById("category").value;
     let obj = {};
     
     obj.name = prodName;
     obj.title = prodTitle;
     obj.price = prodPrice;
     obj.image = imgUrl;
     obj.stock = availability;
     obj.description = description;
     obj.location = location;
     obj.category = category;
     obj.flag = "true";

     if ( localStorage.getItem("products") === null ) {
         products = [];
     }
     else{
       products = JSON.parse(localStorage.getItem("products"));
     }
     
     
    products.push(obj);
   localStorage.setItem("products" ,JSON.stringify(products));
}

const updateData = () =>{
  let products = JSON.parse( localStorage.getItem("products"));
  let prodName = document.getElementById("edProdName").value;
   let prodTitle = document.getElementById("edProdTitle").value;
   let prodPrice = document.getElementById("edProdPrice").value;
   let imgUrl = document.getElementById("edImgUrl").value;
   let availability;
   if (document.getElementById('edRd1').checked) {
      availability = document.getElementById('edRd1').value;
     }
     else{
     availability = document.getElementById('edRd2').value;
     }
     let description = document.getElementById("edDescription").value;
     let location = document.getElementById("edLocation").value;
     let category = document.getElementById("edCategory").value;
     let objIndex = localStorage.getItem("index");
     let obj = {};
     
     obj.name = prodName;
     obj.title = prodTitle;
     obj.price = prodPrice;
     obj.image = imgUrl;
     obj.stock = availability;
     obj.description = description;
     obj.location = location;
     obj.category = category;
     obj.flag = "true";
     
    products[objIndex] = obj ;
    localStorage.setItem("products" , JSON.stringify(products));
    window.location.reload();
    // console.log(products);
    }

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

document.addEventListener("DOMContentLoaded" , function(){
  let prodArray = JSON.parse( localStorage.getItem("products"));
  
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
      const h6 = document.createElement("h6");
      h6.setAttribute("class" , "avail");
      // h6.setAttribute("style" ,"color:green;")
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
      btn1.innerText = "view";
      btn1.addEventListener("click" , function(){
        let strg = JSON.parse( localStorage.getItem("products"))
        // console.log(strg[j]);
        localStorage.setItem("view" ,JSON.stringify( strg[j]));
        document.location.href = 'prod_detail.html';
      })
      const btn2 = document.createElement("button");
      btn2.setAttribute("type" , "button");
      btn2.innerText = "remove";
      btn2.setAttribute("class" , "btn btn-primary");
      btn2.addEventListener("click" , function(){
        let strg = JSON.parse( localStorage.getItem("products"))
        console.log(strg[j]["flag"]);
        strg[j]["flag"] = "false";
        localStorage.setItem("products" ,JSON.stringify(strg));
        window.location.reload();
      })
      const btn3 = document.createElement("button");
      btn3.setAttribute("type" , "button");
      btn3.setAttribute("class" , "btn btn-primary ed");
      btn3.innerText = "edit";
      btn3.setAttribute("data-bs-toggle" , "modal");
      btn3.setAttribute("data-bs-target" , "#edit");
      btn3.addEventListener("click", function(){
        // console.log("hello");
        let strg = JSON.parse( localStorage.getItem("products"))
        console.log(item["name"]);
        document.getElementById("edProdName").value = item["name"];
        document.getElementById("edProdTitle").value = item["title"];
        document.getElementById("edProdPrice").value = item["price"];
        document.getElementById("edImgUrl").value = item["image"];
        // document.getElementById("edImgUrl").value = item["image"];
        // checked="checked"
        if (item["stock"]=== "in stock") {
          document.getElementById("edRd1").checked = "checked";
        }
        else{
          document.getElementById("edRd2").checked = "checked";
        }
        document.getElementById("edDescription").value = item["description"];
        document.getElementById("edLocation").value = item["location"];
        document.getElementById("edCategory").value = item["category"];
        // console.log(strg[j]);
        // console.log(strg.indexOf(strg[j]));
        localStorage.setItem("index" ,strg.indexOf(strg[j]) )
        // obj.name = prodName;
        // obj.title = prodTitle;
        // obj.price = prodPrice;
        // obj.image = imgUrl;
        // obj.stock = availability;
        // obj.description = description;
        // obj.location = location;
        // obj.category = category;

      })
      
      
    
      
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
            h6.innerText =item[key];
            if (item[key] === "in stock") {
              h6.setAttribute("style" , "color:green;")
            }
            else{
              h6.setAttribute("style" , "color:red;")
            }
            break;
          case "description":
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
      div2.appendChild(h6);
      div2.appendChild(img);
      div2.appendChild(div3);
      div1.appendChild(div2);
    }

  }
let rad1 = document.getElementById('rad1');
rad1.addEventListener("click" , function(){
  let val1 = rad1.value ;
  availArr = Array.from( document.getElementsByClassName("avail"));
  console.log(availArr);
  availArr.forEach(element => {
    if (element.innerText === val1) {
      element.parentNode.parentNode.style.display = "";
    }
    else{
      element.parentNode.parentNode.style.display = "none";
    }
    
  });
})
let rad2 = document.getElementById('rad2');
rad2.addEventListener("click" , function(){
  let val2 = rad2.value ;
  availArr = Array.from( document.getElementsByClassName("avail"));
  console.log(availArr);
  availArr.forEach(element => {
    if (element.innerText === val2) {
      element.parentNode.parentNode.style.display = "";
    }
    else{
      element.parentNode.parentNode.style.display = "none";
    }
    
  });
})

  })

