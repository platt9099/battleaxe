let favfilm =[
    "red",
    "red2",
    "expendables",
    "expendables2",
    "expendables3"
];

const filmCheck = (film) =>{

    if  (film == "expendables") {
        console.log ("3rd favourite film")
}
    else { 
        console.log ("booooo wrong film");
    }
}
for(let favfilmIndex = 0; favfilmIndex <favfilm.length; favfilmIndex++) {
    console.log (favfilm[favfilmIndex]);
    filmCheck(favfilm[favfilmIndex]);
}