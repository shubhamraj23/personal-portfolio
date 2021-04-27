function switchTabs(event, projectName){
    var tabContents = document.getElementsByClassName("project-tab-content");
    for(var i=0; i<tabContents.length; i++){
        tabContents[i].style.display = "none";
    }

    var tabLinks = document.getElementsByClassName("project-tab-link");
    for(var i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" project-link-active", "");
    }

    document.getElementById('project-' + projectName).style.display = "block";
    event.currentTarget.className += " project-link-active";
}

function switchTabsSmall(event, projectName){
    var tabContents = document.getElementsByClassName("project-tab-content-small");
    for(var i=0; i<tabContents.length; i++){
        tabContents[i].style.display = "none";
    }

    var tabLinks = document.getElementsByClassName("project-tab-link-small");
    for(var i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" project-link-active", "");
    }

    document.getElementById('project-' + projectName + '-small').style.display = "block";
    event.currentTarget.className += " project-link-active";
}