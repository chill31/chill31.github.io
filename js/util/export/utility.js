class Utility {

    constructor(){
     // nothing needed.
    }

    /**
     * 
     * @param {URL} location 
     * @fires opens new page
     */

    openNewPage(location){
        parent.open(location);
    }

    /**
     * 
     * @returns selected text
     * @fires gets selected text by the user
     */

    getSelectionText(){
     if (document.getSelection) return document.getSelection().toString();
    }

    /**
     * 
     * @param {URL} location
     * @fires changes window location to given location/path
     */

    redirect(location){
     window.location.href = location;
    }

    /**
     * 
     * @param {*} text
     * @fires writes text to clipboard
     */

    copyText(text) {
        navigator.clipboard.writeText(text);
    }

    /**
     * @fires refreshes page
     */

    refreshPage(){
        this.redirect(window.location.href);
    }

    /**
     * 
     * @param {number} n 
     * @returns Formatted Date
     */

    formatDate(n){
  
        switch(n){
      
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
            case 21:
                return "21st";
            case 22:
                return "22nd";
            case 23:
                return "23rd";
            case 31:
                return "31st";
            default:
                return `${n}th`;
      
        }
      
    }

    /**
     * 
     * @param {number} d 
     * @returns day according to number
     */

    fixDay(d){

        const fixDayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return fixDayDays[d];
      
    }

    /**
     * @param {number} m
     * @returns month according to number
     */

     fixMonth(m){

        const fixMonthsMonths = [0, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      
        return fixMonthsMonths[m];
      
    }

}