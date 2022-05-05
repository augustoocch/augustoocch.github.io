document.addEventListener("CollapseButton", 
function(){
    var btn = document.getElementById("botonCollapse");
    var element = document.getElementById("colapsar");

    // Create a collapse instance, toggles the collapse element on invocation
    var myCollapse = new bootstrap.Collapse(element);
    
    btn.addEventListener("click", function(){
        myCollapse.toggle();
    });
});

