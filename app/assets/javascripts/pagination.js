$(function() {
  $(".pagination a").on('click', function() {
    $(".pagination").html("Page is loading...");
    $.getScript(this.href);
    return false;
  });
});