// let a = document.getElementById("trashItems");
// console.log(a);

document.addEventListener("DOMContentLoaded", function () {
  // console.log(prodArray);
  let prodArray = JSON.parse(localStorage.getItem("products"));
  for (let j = 0; j < prodArray.length; j++) {
    const item = prodArray[j];
    if (item["flag"] === "false") {

      let trashItems = document.getElementById("trashItems");
      const div1 = document.createElement("div");
      div1.setAttribute("class", "col");
      trashItems.appendChild(div1);
      const div2 = document.createElement("div");
      div2.setAttribute("class", "card mt-4");
      div2.setAttribute("style", "width: 18rem;");
      const h5 = document.createElement("h5");
      h5.setAttribute("class", "card-title");
      const img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      const div3 = document.createElement("div");
      div3.setAttribute("class", "card-body");
      const p = document.createElement("p");
      p.setAttribute("class", "card-text");
      const div4 = document.createElement("div");
      div4.setAttribute("class", "btn-group");
      div4.setAttribute("role", "group");
      div4.setAttribute("aria-label", "Basic example");
      const btn1 = document.createElement("button");
      btn1.setAttribute("type", "button");
      btn1.setAttribute("class", "btn btn-primary");
      btn1.innerText = "restore";
      btn1.addEventListener("click", function () {
        let strg = JSON.parse(localStorage.getItem("products"));
        strg[j]["flag"] = "true";
        localStorage.setItem("products", JSON.stringify(strg));
        window.location.reload();
      })
      const btn2 = document.createElement("button");
      btn2.setAttribute("type", "button");
      btn2.innerText = "delete";
      btn2.setAttribute("class", "btn btn-primary");
      btn2.addEventListener("click", function () {
        let strg = JSON.parse(localStorage.getItem("products"));
        strg.splice( strg.indexOf(strg[j]), 1);
        localStorage.setItem("products", JSON.stringify(strg));
        window.location.reload();
      })

      for (key in item) {

        switch (key) {
          case "name":

            break;
          case "title":
            h5.innerText = item[key];
            break;
          case "price":

            break;
          case "image":
            img.setAttribute("src", item[key]);
            break;
          case "stock":

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
      div3.appendChild(p);
      div3.appendChild(div4);
      div2.appendChild(h5);
      div2.appendChild(img);
      div2.appendChild(div3);
      div1.appendChild(div2);
    }
  }
})
