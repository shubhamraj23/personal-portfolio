function switchTheme(){
    var theme = document.getElementById('page-theme').href;
    if(theme.includes("light")){
        document.getElementById('page-theme').href = "../css/dark-theme.css";
        localStorage.setItem("theme", "dark");
    }
    else{
        document.getElementById('page-theme').href = "../css/light-theme.css";
        localStorage.setItem("theme", "light");
    }
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(filename == "projects.html"){
        reverseImages();
    }
}

function loadTheme(){
    if(localStorage.getItem("theme") == null){
        localStorage.setItem("theme", "light");
    }

    let localData = localStorage.getItem("theme");
    if(localData == "light"){
        document.getElementById('page-theme').href = "../css/light-theme.css";
    }
    else{
        var navToggler = document.getElementsByClassName('navbar-toggler')[0];
        if(navToggler.offsetHeight == 0){
            var toggleButton = document.getElementById('toggle-click-large');
        }
        else{
            var toggleButton = document.getElementById('toggle-click-small');
        }
        toggleButton.click()
    }
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(filename == "projects.html"){
        reverseImages();
    }
}

function reverseImages(){
    var imageH1 = document.getElementById('project-1-large').offsetHeight;
    var imageH2 = document.getElementById('project-2-large').offsetHeight;
    var imageH3 = document.getElementById('project-3-large').offsetHeight;
    var imageH4 = document.getElementById('project-4-large').offsetHeight;
    var imageHeight = imageH1 + imageH2 + imageH3 + imageH4;
    let localData = localStorage.getItem("theme");

    if(imageHeight != 0){
        var image1 = document.getElementById('project-1-large');
        var image2 = document.getElementById('project-2-large');
        var image3 = document.getElementById('project-3-large');
        var image4 = document.getElementById('project-4-large');
    }
    else{
        var image1 = document.getElementById('project-1-small');
        var image2 = document.getElementById('project-2-small');
        var image3 = document.getElementById('project-3-small');
        var image4 = document.getElementById('project-4-small');
    }
    if(localData == "light"){
        image1.src = "../images/project-testing.png";
        image2.src = "../images/project-automation.png";
        image3.src = "../images/project-cds.png";
        image4.src = "../images/project-dwc.png";
    }
    else{
        image1.src = "../images/project-testing-dark.png";
        image2.src = "../images/project-automation-dark.png";
        image3.src = "../images/project-cds-dark.png";
        image4.src = "../images/project-dwc-dark.png";
    }
}

function iconThemeSwitch(changedTheme){
    let localData = localStorage.getItem("theme");
    var navToggler = document.getElementsByClassName('navbar-toggler')[0];
    if(navToggler.offsetHeight == 0){
        var toggleButton = document.getElementById('toggle-click-large');
    }
    else{
        var toggleButton = document.getElementById('toggle-click-small');
    }
    if(localData == changedTheme){
        return;
    }
    toggleButton.click();
}