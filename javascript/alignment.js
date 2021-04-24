function alignNav(){
    var nav = document.getElementsByTagName("nav")[0];
    var height = nav.offsetHeight;
    var carousel = document.getElementsByClassName("carousel")[0];
    carousel.style.marginTop = height + "px";
    return true;
}