<script type="text/javascript">   
//*(function() {  

            //*var dialog = document.getElementById('window');  
            //document.getElementById('show').onclick = function() {  
                //dialog.show();*//  
            //};  
            //document.getElementById('exit').onclick = function() {  
                //dialog.close();  
            //};
        //})();*//

$(document).ready(
function() {
    var schedulebox=$("#schedulebox").addClass(".pop");
    $("#getschedule").click(function() {
        $("#schedulebox").fadeIn(1000);
    });
    $("#exit").click(function() {
        $("#schedulebox").fadeOut(1000);
    });
});

</script>
