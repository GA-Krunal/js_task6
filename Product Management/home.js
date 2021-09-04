const ValidURL = (str) => {
  let regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!regex.test(str)) {
    return false;
  } else {
    return true;
  }
}
// get data from add product popup
const getData = () => {
  let products;
  let prodTitle = document.getElementById("prodTitle").value;
  let prodPrice = document.getElementById("prodPrice").value;
  let prodRating = document.getElementById("Rating").value;
  let imgUrl = document.getElementById("imgUrl").value;
  let availability;
  if (document.getElementById('rd1').checked) {
    availability = document.getElementById('rd1').value;
  }
  else {
    availability = document.getElementById('rd2').value;
  }
  let description = document.getElementById("description").value;
  let location = document.getElementById("location").value;
  let category = document.getElementById("category").value;

  if (!ValidURL(imgUrl)) {
    document.getElementById("spImg").setAttribute("class", "text-danger");
    document.getElementById("spImg").innerText = "Please enter valid image URL";
    return false
  }
  if (prodTitle.length > 50) {
    document.getElementById("spTitle").setAttribute("class", "text-danger");
    document.getElementById("spTitle").innerText = "Maximum 50 characters allowed";
    return false
  }
  if (description.length < 150) {
    document.getElementById("spDesc").setAttribute("class", "text-danger");
    document.getElementById("spDesc").innerText = "Minimum 150 characters are required";
    return false
  }
  if (prodTitle === "" || prodPrice === "" || prodRating === "" || imgUrl === "" || description === "" || location === "" || category === "") {
    document.getElementById("formValid").setAttribute("class", "text-danger");
    document.getElementById("formValid").innerText = "All the values must be filled";
    return false
  }
  let obj = {};
  obj.title = prodTitle;
  obj.price = prodPrice;
  obj.image = imgUrl;
  obj.rating = prodRating;
  obj.stock = availability;
  obj.description = description;
  obj.location = location;
  obj.category = category;
  obj.flag = "true";

  if (localStorage.getItem("products") === null) {
    products = [];
  }
  else {
    products = JSON.parse(localStorage.getItem("products"));
  }
  products.push(obj);
  localStorage.setItem("products", JSON.stringify(products));
  window.location.reload();
}
// update data on edit button popup
const updateData = () => {
  let products = JSON.parse(localStorage.getItem("products"));
  let prodTitle = document.getElementById("edProdTitle").value;
  let prodPrice = document.getElementById("edProdPrice").value;
  let prodRating = document.getElementById("edRating").value;
  let imgUrl = document.getElementById("edImgUrl").value;
  let availability;
  if (document.getElementById('edRd1').checked) {
    availability = document.getElementById('edRd1').value;
  }
  else {
    availability = document.getElementById('edRd2').value;
  }
  let description = document.getElementById("edDescription").value;
  let location = document.getElementById("edLocation").value;
  let category = document.getElementById("edCategory").value;
  let objIndex = localStorage.getItem("index");

  if (!ValidURL(imgUrl)) {
    document.getElementById("edImg").setAttribute("class", "text-danger");
    document.getElementById("edImg").innerText = "Please enter valid image URL";
    return false
  }
  if (prodTitle.length > 50) {
    document.getElementById("edTitle").setAttribute("class", "text-danger");
    document.getElementById("edTitle").innerText = "Maximum 50 characters allowed";
    return false
  }
  if (description.length < 150) {
    document.getElementById("edDesc").setAttribute("class", "text-danger");
    document.getElementById("edDesc").innerText = "Minimum 150 characters are required";
    return false
  }
  if (prodTitle === "" || prodPrice === "" || prodRating === "" || imgUrl === "" || description === "" || location === "" || category === "") {
    document.getElementById("edFormValid").setAttribute("class", "text-danger");
    document.getElementById("edFormValid").innerText = "All the values must be filled";
    return false
  }
  let obj = {};
  obj.title = prodTitle;
  obj.price = prodPrice;
  obj.image = imgUrl;
  obj.rating = prodRating;
  obj.stock = availability;
  obj.description = description;
  obj.location = location;
  obj.category = category;
  obj.flag = "true";

  products[objIndex] = obj;
  localStorage.setItem("products", JSON.stringify(products));
  window.location.reload();
}
// filter by searchbar
const searchFun = () => {
  let filter = document.getElementById("myInput").value.toUpperCase();
  let title = document.getElementsByClassName("card-title");

  for (let i = 0; i < title.length; i++) {
    let textValue = title[i].textContent;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      title[i].parentNode.parentNode.style.display = "";
    }
    else {
      title[i].parentNode.parentNode.style.display = "none";
    }
  }
}
//  main logic
document.addEventListener("DOMContentLoaded", function () {
  let prodArray = JSON.parse(localStorage.getItem("products"));

  for (let j = 0; j < prodArray.length; j++) {
    const item = prodArray[j];
    if (item["flag"] === "true") {

      let listItems = document.getElementById("listItems");
      const div1 = document.createElement("div");
      div1.setAttribute("class", "col");
      listItems.appendChild(div1);
      const div2 = document.createElement("div");
      div2.setAttribute("class", "card mt-4");
      div2.setAttribute("style", "width: 18rem;");
      const h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title");
      const h6 = document.createElement("h6");
      h6.setAttribute("class", "avail");
      const img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      const div3 = document.createElement("div");
      div3.setAttribute("class", "card-body");
      const label = document.createElement("label");
      label.innerHTML = `<strong> Rating :</strong>`;
      const p2 = document.createElement("p");
      const p = document.createElement("p");
      p.setAttribute("class", "card-text");
      const div4 = document.createElement("div");
      div4.setAttribute("class", "btn-group");
      div4.setAttribute("role", "group");
      div4.setAttribute("aria-label", "Basic example");
      const viewBtn = document.createElement("button");
      viewBtn.setAttribute("type", "button");
      viewBtn.setAttribute("class", "btn btn-info");
      viewBtn.innerText = "view";
      viewBtn.addEventListener("click", function () {
        let strg = JSON.parse(localStorage.getItem("products"))
        localStorage.setItem("view", JSON.stringify(strg[j]));
        document.location.href = 'prod_detail.html';
      })
      const rmvBtn = document.createElement("button");
      rmvBtn.setAttribute("type", "button");
      rmvBtn.innerText = "remove";
      rmvBtn.setAttribute("class", "btn btn-danger");
      rmvBtn.addEventListener("click", function () {
        let strg = JSON.parse(localStorage.getItem("products"))
        console.log(strg[j]["flag"]);
        strg[j]["flag"] = "false";
        localStorage.setItem("products", JSON.stringify(strg));
        window.location.reload();
      })
      const editBtn = document.createElement("button");
      editBtn.setAttribute("type", "button");
      editBtn.setAttribute("class", "btn btn-primary ed");
      editBtn.innerText = "edit";
      editBtn.setAttribute("data-bs-toggle", "modal");
      editBtn.setAttribute("data-bs-target", "#edit");
      editBtn.addEventListener("click", function () {

        let strg = JSON.parse(localStorage.getItem("products"))
        document.getElementById("edProdTitle").value = item["title"];
        document.getElementById("edProdPrice").value = item["price"];
        document.getElementById("edImgUrl").value = item["image"];
        document.getElementById("edRating").value = item["rating"];
        if (item["stock"] === "in stock") {
          document.getElementById("edRd1").checked = "checked";
        }
        else {
          document.getElementById("edRd2").checked = "checked";
        }
        document.getElementById("edDescription").value = item["description"];
        document.getElementById("edLocation").value = item["location"];
        document.getElementById("edCategory").value = item["category"];
        localStorage.setItem("index", strg.indexOf(strg[j]))
      })
      for (key in item) {

        switch (key) {
          case "title":
            h5.innerText = item[key];
            break;
          case "image":
            img.setAttribute("src", item[key]);
            break;
          case "stock":
            h6.innerText = item[key];
            if (item[key] === "in stock") {
              h6.setAttribute("style", "color:green;")
            }
            else {
              h6.setAttribute("style", "color:red;")
            }
            break;
          case "description":
            p.innerText = item[key];
            break;
          case "rating":
            p2.innerText = item[key];
            break;
          default:
            break;
        }
      }

      div4.appendChild(viewBtn);
      div4.appendChild(editBtn);
      div4.appendChild(rmvBtn);
      div3.appendChild(label);
      div3.appendChild(p2);
      div3.appendChild(p);
      div3.appendChild(div4);
      div2.appendChild(h5);
      div2.appendChild(h6);
      div2.appendChild(img);
      div2.appendChild(div3);
      div1.appendChild(div2);
    }
  }
  // filtering by radio buttons 
  let rad1 = document.getElementById('rad1');
  rad1.addEventListener("click", function () {
    let val1 = rad1.value;
    availArr = Array.from(document.getElementsByClassName("avail"));
    availArr.forEach(element => {
      if (element.innerText === val1) {
        element.parentNode.parentNode.style.display = "";
      }
      else {
        element.parentNode.parentNode.style.display = "none";
      }
    });
  })
  let rad2 = document.getElementById('rad2');
  rad2.addEventListener("click", function () {
    let val2 = rad2.value;
    availArr = Array.from(document.getElementsByClassName("avail"));
    availArr.forEach(element => {
      if (element.innerText === val2) {
        element.parentNode.parentNode.style.display = "";
      }
      else {
        element.parentNode.parentNode.style.display = "none";
      }
    });
  })
})


