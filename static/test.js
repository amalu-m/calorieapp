const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
const changeContent1 = $(".subtitle1") ;
const changeContent2 = $('.subtitle2');
const changeContent3 = $('.subtitle3');
var count = 0;
  portfolioItems.forEach(portfolioItem => {
      portfolioItem.addEventListener('mouseover',() => {
        // console.log("the count is " + count);
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
      portfolioItem.childNodes[1].classList.remove('img-darken');
      })
})
var contentList1 = [' The oldest ham in the world is 112 years old and is claimed to be still edible.','70% of all red meat consumed worldwide is goat meat.',
                   ' On worldwide average, 96 chickens are killed every 0.05 seconds.','First meal eaten on the moon was bacon (technically, freeze dried bacon cubes).',
                   'Denmark has the highest consumption of meat per person.',' Peanut butter in Dutch is called “Peanut cheese” because the word butter is only supposed to be used with products that contain actual butter'];
var i = 0;
$('.select1').mouseenter(function () {
  if (i == contentList1.length - 1){
    i = 0;
  }
  console.log(i);
  changeContent1.text(contentList1[i]);

  i += 1;
});

var contentList2 = ['Broccoli contains more protein than steak.','Pineapples can destroy your tastebuds',
'Pepper can encourage proper clotting.','Apples give you more energy than coffee.',
'Watermelons can keep you hydrated.','Paprika is made from bell pepper.'];
var j = 0;
$('.select2').mouseenter(function () {
  j += 1;

  if (j == contentList2.length-1){
    j = 0;
  }
  changeContent2.text(contentList2[j]);
});

var contentList3 = ["A strawberry isn't an actual berry,but a banana is.",'Grape explode when you put them in the microwave.',
                  'Apple, Peaches and Raspberries are all members of the rose family.','Bananas are slightly radioactive.',
                  'Cucumbers are fruits.','Pomology is the study of fruits.'];
var k = 0;
$('.select3').mouseenter(function () {
  k += 1;

  if (k == contentList3.length-1){
    k = 0;
  }
  console.log(k);
  changeContent3.text(contentList3[k]);
});
