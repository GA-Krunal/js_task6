

// getting data from popup form 

const getData = () => {
   let products;
  //  alert("hello")
   console.log("hello")
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


 
  


    


