$('.add').on('click', function() {
  $('.flexbox').append('<div class="flex-item new-item">' + "some text" + '</div>');
});

$('.remove').on('click', function() {
  // Remove the last item in the list that isn't already being removed
  var $item = $('.flexbox .flex-item:not(.remove-item)').last();
  $item.addClass('remove-item');
  $item.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
    $item.remove();
  });
});