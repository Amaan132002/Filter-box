
$(document).on("click","#col4",function () {
  $("#gridsCol").children("div").removeClass().addClass("col-3");
  $('.divforlistview').removeClass('row');
  $('.c1-3').removeClass('col-3');
  $('.c1-9').removeClass('addtocartbtn');
  $('.my').removeClass('d-block');
});
  $(document).on("click","#col3",function () {
  $("#gridsCol").children("div").removeClass().addClass("col-4");
  $('.divforlistview').removeClass('row');
  $('.c1-3').removeClass('col-3');
  $('.c1-9').removeClass('col-9');
  $('.c1-9').removeClass('addtocartbtn');
  $('.my').removeClass('d-block');
});
$(document).on("click","#col1",function () {
   $("#gridsCol").children("div").removeClass().addClass("col-12");
   $('.divforlistview').addClass('row');
   $('.c1-3').addClass('col-3');
   $('.c1-9').addClass('col-9');
   $('.c1-9').addClass('addtocartbtn');
   $('.my').addClass('d-block');
});