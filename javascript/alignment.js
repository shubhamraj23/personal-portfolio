function alignNav(){
    var nav = document.getElementsByTagName("nav")[0];
    var height = nav.offsetHeight;
    var carousel = document.getElementsByClassName("carousel")[0];
    carousel.style.marginTop = height + "px";

    var tab = document.getElementsByClassName("project-tab-large")[0];
    var offsetHeight = height - 2;
    tab.style.top = offsetHeight + "px";
    return true;
}