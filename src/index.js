
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {text: "catalog", href: "#", subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {text: "orders", href: "#", subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {text: "account", href: "#", subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Part 1
const mainEl = document.querySelector("main");
// const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//Part 2
const topMenuEl = document.getElementById("top-menu"); 
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Part 3

const nav = document.querySelector("nav");

for (var i = 0; i < menuLinks.length; i++) {
  var link = menuLinks[i];
  var a = document.createElement("a");
  a.textContent = link.text;
  a.href = link.href;
  nav.appendChild(a);
}

//Part 3 of R-LAB

const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0"



//Part 4 R-LAB
const topMenuLinks = document.querySelectorAll("#top-menu a");
  
for (var j = 0; i < topMenuLinks.length; j++) {
    console.log(topMenuLinks[j].href)
  }
function myEventListener(Event) {
 Event.preventDefault();
 const anchorElement = Event.target.closest("a")
 if (!anchorElement) {
  return;
 }
 console.log(anchorElement)
};

for (const link of topMenuLinks) {
  link.addEventListener("click", myEventListener);
}
//add and remove active class
topMenuLinks.forEach(link => {
  link.addEventListener("click", function(){
    topMenuLinks.forEach(otherLink => {
      otherLink.classList.remove("active");
    });
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  });
});

//Part 5 R-LAB




// item = document.createElement("a");
//     item.textContent = link.text;
//     item.href = link.href;
//     menuContainer.appendChild(link);
// // });
// menuLinks.forEach(item => {
//     item = document.createElement("a");
//     item.textContent = link.text;
//     item.href = link.href;
//     menuContainer.appendChild(link);
// });
