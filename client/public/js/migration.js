/**
 * Created by sojharo on 07/02/2018.
 */
/**
 * Created by sojharo on 08/01/2018.
 */
var token = window.location.pathname.split('/')[3]
console.log(token)

$(document).ready(function() {
  var nameString = readCookie("name").split('%20');
  if (nameString.length > 1) {
    var temp = nameString
    nameString = ''
    for(var i = 0; i < temp.length; i++)
      nameString += temp[i] + ' ';
  } else {
    nameString = nameString[0]
  }
  nameString = nameString.trim()
  $("#nameId").text(nameString)
  $("#applyBtn").click(function () {
    document.getElementById("alertMsg").innerHTML = ""
    var name = $("#name").val()
    var email = $("#email").val()
    var password = $("#password").val()
    var rpassword = $("#rpassword").val()

    if (password !== rpassword) {
      return document.getElementById("alertMsg").innerHTML = "Passwords don't match."
    } else if (password.length <= 6) {
      return document.getElementById(
        "alertMsg").innerHTML = "Length of password should be greater than 6 "
    }

    $.ajax({
      url : '/migrations/start',
      type : 'POST',
      data : {
        'name': nameString,
        'email': email,
        'password': password,
        'token': token
      },
      dataType:'json',
      success : function(data) {
        console.log('Data: '+data);
        // window.location = '/';
      },
      error : function(request,error)
      {
        console.log("Request: " + JSON.stringify(request));
        document.write(request.responseText);
      }
    });
  })
})

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
