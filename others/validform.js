function validateForm()
{
var x=document.forms["feedbackform"]["name"].value;
if (x==null || x=="")
  {
  alert("First name must be filled out");
  return false;
  }

  var y=document.forms["feedbackform"]["email"].value;
var atpos=y.indexOf("@");
var dotpos=y.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
}