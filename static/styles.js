
  const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
  const changeContent = document.querySelector('.subtitle');
  var count = 0;
    portfolioItems.forEach(portfolioItem => {
        portfolioItem.addEventListener('mouseover',() => {
          console.log("the count is " + count);
          portfolioItem.childNodes[1].classList.add('img-darken');


      })

      portfolioItem.addEventListener('mouseout',() => {
        portfolioItem.childNodes[1].classList.remove('img-darken');

        })

  })



var i = 0;
changeContent.addEventListener('mouseover',function loop(){
var contentList = [' The oldest ham in the world is 112 years old and is claimed to be still edible.','70% of all red meat consumed worldwide is goat meat.',
                   ' On worldwide average, 96 chickens are killed every 0.05 seconds.','First meal eaten on the moon was bacon (technically, freeze dried bacon cubes).',
                   'Denmark has the highest consumption of meat per person.',' Peanut butter in Dutch is called “Peanut cheese” because the word butter is only supposed to be used with products that contain actual butter'];
document.querySelector(".subtitle").textContent = contentList[i];
 console.log(contentList[i]);
 if(++i< contentList.length){

 setTimeout(loop,10000);
}else{
 setTimeout(loop,10000);
 i = 0;

 console.log("eheee")
}

});

var i = 0;
document.querySelector(".subtitle2").addEventListener('mouseover',function loop(){
    var contentList = ["A strawberry isn't an actual berry,but a banana is.",'Grape explode when you put them in the microwave.',
                      'Apple, Peaches and Raspberries are all members of the rose family.','Bananas are slightly radioactive.',
                      'Cucumbers are fruits.','Pomology is the study of fruits.'];
  document.querySelector(".subtitle2").textContent = contentList[i];
    console.log(contentList[i]);
    if(++i< contentList.length){

    setTimeout(loop,10000);
  }else{
    setTimeout(loop,10000);
    i = 0;

    console.log("eheee")
  }

});

var i = 0;
document.querySelector(".subtitle3").addEventListener('mouseover',function loop(){
    var contentList = ['Broccoli contains more protein than steak.','Pineapples can destroy your tastebuds',
    'Pepper can encourage proper clotting.','Apples give you more energy than coffee.',
    'Watermelons can keep you hydrated.','Paprika is made from bell pepper.'];
  document.querySelector(".subtitle3").textContent = contentList[i];
    console.log(contentList[i]);
    if(++i< contentList.length){

    setTimeout(loop,10000);
  }else{
    setTimeout(loop,10000);
    i = 0;

    console.log("eheee")
  }

});
