window.onload = function(){
    let dedo = document.getElementsByTagName("p");
    dedo.onclick = function() {
        if (this.getAttribute("class")!="uno") {
            this.setAttribute("class", "uno");
        }else{
            this.setAttribute("class", "dos");
        }
    }

}