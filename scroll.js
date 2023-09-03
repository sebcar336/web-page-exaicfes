document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToStart");
    
    scrollToTopButton.addEventListener("click", function() {
        // Desplazar la página hacia el inicio suavemente
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

let widthResponsiveWindow = 1024;

if (window.innerWidth >= widthResponsiveWindow) {
    document.addEventListener("DOMContentLoaded", function() {
        var scrollToTopButton = document.getElementById("scrollToAboutUs");
        
        scrollToTopButton.addEventListener("click", function() {
            // Desplazar la página hacia el inicio suavemente
            window.scrollTo({
                top: 690,
                behavior: "smooth"
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var scrollToTopButton = document.getElementById("scrollToImages");
        
        scrollToTopButton.addEventListener("click", function() {
            // Desplazar la página hacia el inicio suavemente
            window.scrollTo({
                top: 1530,
                behavior: "smooth"
            });
        });
    });
}else if(window.innerWidth <= widthResponsiveWindow){
    document.addEventListener("DOMContentLoaded", function() {
        var scrollToTopButton = document.getElementById("scrollToAboutUs");
        
        scrollToTopButton.addEventListener("click", function() {
            // Desplazar la página hacia el inicio suavemente
            window.scrollTo({
                top: 1530,
                behavior: "smooth"
            });
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var scrollToTopButton = document.getElementById("scrollToImages");
        
        scrollToTopButton.addEventListener("click", function() {
            // Desplazar la página hacia el inicio suavemente
            window.scrollTo({
                top: 5800,
                behavior: "smooth"
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToContact");
    
    scrollToTopButton.addEventListener("click", function() {
        // Desplazar la página hacia el inicio suavemente
        window.scrollTo({
            top: 9999,
            behavior: "smooth"
        });
    });
});