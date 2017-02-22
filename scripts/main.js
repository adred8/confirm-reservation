$(document).ready(function(){
  $(".plus-sign").on('click', function(){
    var data = $('.table-count-num').html();
    console.log(data);
    if (data < 10){
      data++;
      $(".table-count-num").html(data);
    }
  });

  $(".minus-sign").on('click', function(){
    data = $('.table-count-num').html();
    console.log(data);
    if (data > 0){
      data--;
      $(".table-count-num").html(data);
    }
  });
});
