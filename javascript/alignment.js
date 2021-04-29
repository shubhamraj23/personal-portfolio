function alignNav(){
    // Set carousel just below navbar
    var nav = document.getElementsByTagName("nav")[0];
    var height = nav.offsetHeight;
    var carousel = document.getElementsByClassName("carousel")[0];
    carousel.style.marginTop = height + "px";

    // Set the height of sticky element in tabs
    var tab = document.getElementsByClassName("project-tab-large")[0];
    var offsetHeight = height - 2;
    tab.style.top = offsetHeight + "px";

    // Align the plus and minus icons
    var projects = ["testing", "automation", "cds", "dwc"];
    for(var i=0; i<projects.length; i++){
        var icons = document.getElementsByClassName('project-icons')[i];
        var height = document.getElementById('project-' + projects[i] + '-copy-small').offsetHeight;
        var offsetHeight = height/2 - icons.offsetHeight/2;
        icons.style.bottom = offsetHeight + "px";
    }
    return true;
}