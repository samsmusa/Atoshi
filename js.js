

const lists = document.querySelectorAll(".swiper-slide")
console.log(lists)
let maxheight = 1;
Array.from(lists, e=>{
    console.log("jkfdj")
   if (maxheight < e.offsetHeight) {
    maxheight = e.offsetHeight
   }
})

Array.from(document.querySelectorAll(".card"), e=>{
    e.style.height = `${maxheight}px`;
    // e.style.display= "none"
   }
)
