class Utility {

    constructor(){
     // nothing needed.
    }

    /**
     * 
     * @param {URL} location 
     * @fires newPage
     */

    openNewPage(location){
        parent.open(location);
    }

    /**
     * 
     * @returns {documentSelectedText}
     */

    getSelectionText(){
     if (document.getSelection) return document.getSelection().toString();
    }

    /**
     * 
     * @param {URL} location
     * @fires changeLocation
     */

    redirect(location){
     window.location.href = location;
    }

}