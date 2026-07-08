// THE Dragon Website

console.log("THE Dragon Website Loaded!");

document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>{
        console.log("Navigation");
    });
});
