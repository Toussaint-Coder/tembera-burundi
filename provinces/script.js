let searchs = document.querySelectorAll("div span");
console.log(searchs[0])
let searchbar = document.getElementById("search-input");
let searchitems = document.getElementById("search-items");

searchbar.addEventListener("keyup" , () => {
    const searchdots = searchbar.value.toString().slice(0 , searchbar.value.toString().length);
    const toggledSearchlen = searchbar.value.toString().length;
    for(let i = 0 ; i < searchs.length ; i++){
        
        if(searchs[i].textContent.slice(0 , toggledSearchlen) === searchdots){
            searchs[i].classList.toggle("hidden");
        } else {
            searchs[i].classList.add("hidden");
        }
    }

    if (searchbar.value.toString().trim().length === 0) {
      searchitems.classList.add("hidden");
    } else {
      searchitems.classList.remove("hidden");
    }
});
