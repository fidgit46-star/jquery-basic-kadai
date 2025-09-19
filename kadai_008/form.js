$(function() {
  $('.btn').on('click', () => {
    $('[type="text"]').prop('value', 'クリックしました！');
  });
});