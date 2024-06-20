var host = "o2production.ndqm.site";
    if ((host == window.location.host) && (window.location.protocol != "https:")){
        window.location.protocol = "https";
    }