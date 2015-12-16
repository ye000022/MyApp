//
//
//function(){
//    var input = document.getElementById('input').focus();
//};
//
//function add (text){
//    var clicker = document.querySelector('#add');
//    clicker.addEventListener('click', function(){
//    document.querySelector(".lista").append("<li>"+input+"</li>");
//    };
//                       

    function addLi(){
    var input = $('#input').focus().select();
    JSON.stringify(input);
    $("#addDiv").html($("#addDiv").html()+ "<li>"+input+"</li>");   
};
   

app.initialize();