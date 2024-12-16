const searchbox = document.getElementById("Search-box");
const searchResult = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");
const form = document.getElementById("search-form");
const showmore = document.getElementById("show-more-btn");
let input = "";
let page = 1;
const API = "https://api.unsplash.com/search/photos?";
const client_id = ".....Enter Your Access Id Here .....";
let searchImage = async () => {
    input = searchbox.value;
    const url = API + `page=${page}&query=${input}&client_id=${client_id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results);
    let resultarr = data.results;
    resultarr.forEach((value)=>{
        let imageurl = value.urls.regular;
        let imageele = document.createElement("img");
        imageele.src = imageurl;
        imageele.style.width = 100+"%";
        imageele.style.height = 100+"%";
        imageele.style.objectFit = "cover";
        searchResult.append(imageele);
    })
    showmore.style.display = "block";
}

form.addEventListener("submit",(e)=>{
    e.stopPropagation();
    searchResult.innerHTML="";
    e.preventDefault();
    searchImage();
})

showmore.addEventListener("click",(e)=>{
    e.stopPropagation();
    e.preventDefault();
    page++;
    searchImage();
    
})