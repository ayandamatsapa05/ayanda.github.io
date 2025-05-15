function searchJerseys(){
    let input= document.getElementById("search-bar") .ariaValueMax.toLowerCase();
    let jerseys= document.getElementsByClassName("jersey");
    for (let jersey of jerseys){
        let name= jersey.getAttribute("data-name"). toLowerCase();
        if( name.includes(input)){
            jersey.Style.display="block";

        }
        else{
            jersey.Style.display="none";
        }
    }
}