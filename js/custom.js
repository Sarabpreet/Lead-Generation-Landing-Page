
// option 3 wala thingy 
$('.option3 .but').on("click",function(){
	// $('.option3 .but').removeClass("selected");
	$(this).toggleClass("selected");
  $(this).next().toggleClass("goBold");
  // console.log("i am a barbie girl...");

});


// three option thing 

$('.butthurt .but').on("click",function(){

	if(($(".butthurt .but.selected").length<=2) || ($(".butthurt .but.selected").length==0)){
	$(this).toggleClass("selected");

	}
	else {		
		$(this).removeClass("selected");
			
	}


});


// number and comma thingy.
$('input.number').keyup(function(event) {
if(event.which >= 37 && event.which <= 40) return;
  $(this).val(function(index, value) {
    return value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ;
  });
});




// Shuffiling slides 

// array variable 
var arr=[1,2,3,4];
var count=0;
$('.main').text(count+1);
var arr2=shuffle(arr);
arr2.push(5);
arr2.unshift(0);
check();
var sCount=1;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function check(){

    if(count==0) {

      $('.pre').hide();

      }

    else {

        $('.next').show();
        $('.pre').show();
              $('.skip.overr').show();

        if(count==5){
        $('.next').hide();
        $('.skip.overr').hide();

      
              // $('.form-thing').slick({
               
              // });
        }

}


}

$('.next').on("click",function(){
addd();
});
$('.skip').on("click",function(){
addd();
});

$('.pre').on("click",function(){
rem();
});



$('.form-thing').on('swipe', function(event, slick, direction){


            if(direction=='right') {

          console.log("wow-right");
         if(sCount!=1 || count!=0){
            rem();
          }

          }

          else if(direction=='left') {
          console.log("wow-left");
                      console.log("Scount "+sCount);
                      console.log("count "+count);
          if(1){
                    addd();
          }
         
          }
          


});





function addd(){

  if(sCount>=6 || count>=5) {



console.log("dont work ! ");



  }
    else {
                      count++;
                      $('.form-thing').slick('slickGoTo',arr2[count]);
                      sCount++;
                      $('.main').text(sCount);
                      check();
                      console.log("Scount "+sCount);
                      console.log("count "+count);

    }
                         

}

function rem(){

                          count--;
                          $('.form-thing').slick('slickGoTo',arr2[count]);
                          sCount--;
                          $('.main').text(sCount);
                          check();
                          console.log("Scount "+ sCount);
                          console.log("count "+ count);
}

// final shit  upload to firebase and change some shit 
// $('submi').on("click",function(){
// $('.sheet-5').html('<h2 class="f-36">Thanks, got it!</h2><h2>You\'ll hear from us within next 48 hours</h2><a href="#" class="cta">Browse bikes of your prefference</a>');
// post();
// });



$( "#Fomr" ).submit(function( event ) {

event.preventDefault();

if($('.Num').val()!='') {
    $('.form-thing').hide();
       $('.sheet-6').show()
       $('.load').addClass('animated slideInUp');
       $('.pre').hide();
       update();

}
    

});


function update(){

console.log("update has been called : ");

    var ref = new Firebase("https://landingwa.firebaseio.com/main");
    ref.push({
      Year:$('#Age').val(),
      Travel:$('#travel').val(),
      Budget: $('.number').val(),
      Important:$('.butthurt .selected').text(),
      Type:$('.option3 p.goBold').text(),
      Details:{name:$('.Fname').val(),number:$('.Num').val()}
      

   
    });



}









