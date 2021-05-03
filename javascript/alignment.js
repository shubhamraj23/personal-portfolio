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
}

function alignIcons(){
    var nav = document.getElementsByTagName("nav")[0];
    var height = nav.offsetHeight;
    var navToggler = document.getElementsByClassName('navbar-toggler')[0];

    if(navToggler.offsetHeight == 0){
        var iconSun = document.getElementById('toggle-icon-sun-large');
        var iconMoon = document.getElementById('toggle-icon-moon-large');
        var iconSwitch = document.getElementById('toggle-switch-large');
    }
    else{
        var iconSun = document.getElementById('toggle-icon-sun-small');
        var iconMoon = document.getElementById('toggle-icon-moon-small');
        var iconSwitch = document.getElementById('toggle-switch-small');
    }
    var iconSunHeight = iconSun.offsetHeight;
    var iconMoonHeight = iconMoon.offsetHeight;
    var iconSwitchHeight = iconSwitch.offsetHeight;
    iconSun.style.top = (height-iconSunHeight)/2 + "px";
    iconMoon.style.top = (height-iconMoonHeight)/2 + "px";
    iconSwitch.style.top = (height-iconSwitchHeight)/2 + "px";
}