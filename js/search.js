let input;
let caption;
let photo;

function searchFunction(){
    
    input = document.getElementById("searchbar").value.toLowerCase();
    
    for(let i=0; i<=11; i++){
        caption = document.getElementsByTagName("a")[i].getAttribute("data-caption").toLowerCase();
        photo = document.getElementsByTagName("a")[i];

        if(caption.includes(input)){
             photo.style.display = "";
        }else{
            photo.style.display = "none";
           
        }
      
    }
}