document.addEventListener("DOMContentLoaded", function () {

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
      const resBtn = document.createElement("button");
      resBtn.setAttribute("type", "button");
      resBtn.setAttribute("class", "btn btn-success");
      resBtn.innerText = "restore";
      resBtn.addEventListener("click", function () {
        let strg = JSON.parse(localStorage.getItem("products"));
        strg[j]["flag"] = "true";
        localStorage.setItem("products", JSON.stringify(strg));
        window.location.reload();
      })
      const delBtn = document.createElement("button");
      delBtn.setAttribute("type", "button");
      delBtn.innerText = "delete";
      delBtn.setAttribute("class", "btn btn-danger");
      delBtn.addEventListener("click", function () {
        let strg = JSON.parse(localStorage.getItem("products"));
        strg.splice( strg.indexOf(strg[j]), 1);
        localStorage.setItem("products", JSON.stringify(strg));
        window.location.reload();
      })

      for (key in item) {

        switch (key) {
          
          case "title":
            h5.innerText = item[key];
            break;
          case "image":
            img.setAttribute("src", item[key]);
            break;
          case "description":
            p.innerText = item[key];
            break;

          default:
            break;
        }
      }

      div4.appendChild(resBtn);
      div4.appendChild(delBtn);
      div3.appendChild(p);
      div3.appendChild(div4);
      div2.appendChild(h5);
      div2.appendChild(img);
      div2.appendChild(div3);
      div1.appendChild(div2);
    }
  }
})
