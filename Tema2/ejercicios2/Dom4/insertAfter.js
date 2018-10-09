(function (){
    HTMLElement.prototype.insertAfter = function(newElement, reference){
        this.insertBefore(newElement, reference.nextSibling);
    };
})();