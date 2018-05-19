$('.nav-tabs a').click(function(e){
    e.preventDefault()
    $(this).tab('show')
})

$('.carousel').carousel()
$('.carousel').carousel({
  interval: 2000
})
$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})