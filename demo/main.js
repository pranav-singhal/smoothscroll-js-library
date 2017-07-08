
/*
this is an easy-to-use library that gives to the ability to go to any location on
your page using anchor tags. The $scroll function defined below take three parameters:
buttonId: id of the anchor tag
finalPositionId: id of the div or section you want to link to that anchor tag
MarginTop: Margin you want to leave at the top of the page when you reach the top
*/
function $croll(buttonId,finalPositionId,MarginTop){

  var number;
  contact.getBoundingClientRect().top;

  var button=document.getElementById(buttonId);
  button.addEventListener("click",function(event){
    event.preventDefault();
    scrollDown(finalPositionId);
  })
  function scrollDown(finalId){
    var finalPosition= document.getElementById(finalId);
    var finalPosition =finalPosition.getBoundingClientRect().top;
    number=setInterval(function(){
      var currentPosition =document.getElementById(finalId).getBoundingClientRect().top;
      var delB=(currentPosition/20);
      window.scrollTo(0,window.scrollY+delB);
      console.log(currentPosition);
      console.log(window.scrollY);
      console.log(delB);
      console.log(finalPosition.clienty);
      // delB=delB/5
      if (currentPosition<MarginTop){
        console.log(finalPosition);
        console.log("hi");
        console.log(window.scrollY);

        clearInterval(number);
      }
      document.addEventListener("wheel",function(event){
        if (event.deltaY<0){
          clearInterval(number);
        };
      })

    },10);

  }
}

$croll('aboutButton',"aboutUs",20);
$croll('contactButton',"contact",20);
$croll('randomButton',"random",30);
