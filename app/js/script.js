$(document).ready(function() {
    'use strict';
    
    console.log("WORKING");

    // open menu
    $(".nav-dropdown--js").on("click", function(e) {
        $(".nav-dropdown__box").toggleClass("active");
    });
});