//*(function() {  

            //*var dialog = document.getElementById('window');  
            //document.getElementById('show').onclick = function() {  
                //dialog.show();*//  
            //};  
            //document.getElementById('exit').onclick = function() {  
                //dialog.close();  
            //};$("#hide").click(function(){
    //$("p").hide();
//});
        //})();*//

$(document).ready(function() {
   //var schedulebox=$("#schedule").addClass(".pop");
    $("#getschedule").click(function(evt) {
        $("#schedule").fadeIn(1000);
        return false;
   });
    $("#close").click(function(evt) {
       $("#schedule").fadeOut(1000);
   });
})
//<script  src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js">
//*$(document).ready(function () {
   // $("#schedule").hide();
//});
//$("#getschedule").click(function (evt) {
    //$("#schedule").fadeIn(2000);
    //return false;
//});
//("#close").click(function () {
    //("#schedule").fadeOut(1000);
//});*//
//</script>
