$('.nav-tabs a').click(function (e) {
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

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('#myAlert').on('closed.bs.alert', function () {
  // do something…
})

$(document).ready(function($) {
  $('#accordion').find('.accordion-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

  });
});