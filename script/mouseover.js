 $('.photo')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photohover').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photohover').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photohover').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photohover"></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photohover').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })