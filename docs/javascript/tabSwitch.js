function switchTabs(event, projectName){
    var clickedTabStatus = document.getElementById('project-' + projectName).style.display;
    var tabContents = document.getElementsByClassName("project-tab-content");
    var tabLinks = document.getElementsByClassName("project-tab-link");

    // Closing all the open tabs
    for(var i=0; i<tabContents.length; i++){
        tabContents[i].style.display = "none";
    }

    // Changing the link style of all tabs
    for(var i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" project-link-active", "");
    }

    if(clickedTabStatus == "none" || clickedTabStatus == ""){
        document.getElementById('project-' + projectName).style.display = "block";
        event.currentTarget.className += " project-link-active";
    }
}

function switchTabsSmall(event, projectName){
    var clickedTabStatus = document.getElementById('project-' + projectName + '-small').style.display;
    var tabContents = document.getElementsByClassName("project-tab-content-small");
    var tabLinks = document.getElementsByClassName("project-tab-link-small");
    var stickyDiv = document.getElementById('project-position-' + projectName);
    var projects = ["testing", "automation", "cds", "dwc"];
    var nav = document.getElementsByTagName("nav")[0];
    var height = nav.offsetHeight;
    var offsetHeight = height - 2;
    var iconPlus = document.getElementById('project-icon-plus-' + projectName);
    var iconMinus = document.getElementById('project-icon-minus-' + projectName);

    // Closing all the open tabs
    for(var i=0; i<tabContents.length; i++){
        tabContents[i].style.display = "none";
    }
    
    // Changing the link style of all tabs
    for(var i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" project-link-active", "");
    }

    // Removing all the sticky elements
    for(var i=0; i<projects.length; i++){
        document.getElementById('project-position-' + projects[i]).style.position = "static";
        document.getElementById('project-position-' + projects[i]).style.top = "0px";
    }

    // Restoring all the icons
    for(var i=0; i<projects.length; i++){
        document.getElementById('project-icon-plus-' + projects[i]).style.display = "inline";
        document.getElementById('project-icon-minus-' + projects[i]).style.display = "none";
    }

    // Setting the display of selected tab if it wasn't already open
    if(clickedTabStatus == "none" || clickedTabStatus == ""){
        document.getElementById('project-' + projectName + '-small').style.display = "block";
        event.currentTarget.className += " project-link-active";
        stickyDiv.style.position = "-webkit-sticky";
        if(stickyDiv.style.position == "static"){
            stickyDiv.style.position = "sticky"
        }
        stickyDiv.style.top = offsetHeight + "px";
        iconPlus.style.display = "none";
        iconMinus.style.display = "inline";
    }
}

function openTabFromCarousel(projectName){
    var tabStatus = document.getElementsByClassName("project-tab-link")[0].offsetHeight;

    // Checking and running for different sized screens
    if(tabStatus != 0){
        var tab = document.getElementById('project-' + projectName + '-copy-large');
        tab.click();
    }
    else{
        var tab = document.getElementById('project-' + projectName + '-copy-small');
        tab.click();
    }
}