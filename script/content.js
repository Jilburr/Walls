// Loading Screen

setTimeout(function() {
   document.querySelector('.loading').classList.add('hidden')
}, 2000)

// Scroll Reveal Animation

ScrollReveal().reveal('.grid-item:nth-child(odd)', { delay: 300 });
ScrollReveal().reveal('.grid-item:nth-child(even)', { delay: 200 });

// Loading & Hover Effect Grid Items

  $('.grid-item')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale(1.5)'});
      $(this).children('.txt').css("opacity","1");
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'})
      $(this).children('.txt').css("opacity","0");
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })

   // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })

// Day & Night switch

$('.black').on('click', function(){
  
  $(this).css("border", "solid 1px white");
  $('.white').css("border", "0px");
  $('body').css("background-color", "#333333");
  $('.about').css("background-color", "#333333");
  $('h1').css("color", "white");
  $('h2').css("color", "white");
  $('p').css("color", "white");
  $('.border').css("border-top", "solid white 2px");
  $('.info box-icon').attr("color", "white");
  $('.socialicons box-icon').attr("color", "white");
  $('.about .buttons .info img').attr("src", "close-white.svg");
      
})

$('.white').on('click', function(){
  
  $(this).css("border", "solid 1px #333333");
  $('.black').css("border", "0px");
  $('body').css("background-color", "white");
  $('.about').css("background-color", "white");
  $('h1').css("color", "#333333");
  $('h2').css("color", "#333333");
  $('p').css("color", "#333333");
  $('.border').css("border-top", "solid #333333 2px");
  $('.info box-icon').attr("color", "black");
  $('.socialicons box-icon').attr("color", "black");
  $('.about .buttons .info img').attr("src", "close-black.svg");
      
})

// About Page Active

$('.info').on('click', function(){
  $('.about').toggleClass('active');
});

// About Scroll Effect

var aboutitem = 0
var aboutlist = ["حول.","haqqında.","аб.","относно.","সম্পর্কিত.","o.","Quant a.","mahitungod sa.","o.","am.","om.","Über.","σχετικά με.","about.","about.","acerca de.","umbes.","buruz.","در باره.","noin.","sur.","faoi.","sobre.","લગભગ.","game da.","के बारे में.","about.","oko.","sou.","ról ről.","մասին.","tentang.","banyere.","um.","di.","約.","babagan.","დაახლოებით.","шамамен.","អំពី.","ಸುಮಾರು.","약.","about.","ກ່ຽວກັບ.","apie.","par.","about.","e pā ana ki.","за.","കുറിച്ച്.","тухай.","याबद्दल.","kira-kira.","madwar.","အကွောငး.","बारेमा.","over.","handle om.","za","ਬਾਰੇ .","o.","sobre.","despre.","около.","පිළිබඳ.","ku saabsan.","për.","О томе.","kira-kira.","hoo e ka bang.","handla om.","kuhusu.","பற்றி.", "గురించ.","дар бораи.","เกี่ยวกับ.","tungkol sa.","hakkında.","про.","کے بارے میں.","haqida.","trong khoảng.","וועגן.","nipa.","关于.","关于.","關於.","cishe."]

$('.about').on('mousemove', function() {
  if (aboutitem > aboutlist.length) {
    aboutitem = 0
  } else {
    aboutitem = aboutitem + 1;
  }

  $('.about h1').text(aboutlist[aboutitem])
})