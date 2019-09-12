var val = '';
var num = 0;
$(function() {

  $('.fulicashier-mask-p:eq(0) .cursor').show();

  $('.confirm-btn').on('click', function() {
    $('.fulicashier-mask-bg, .fulicashier-mask').show();
    $('.fulicashier-mask-input-hidden').trigger("click").focus();
    // $(".fulicashier-mask-input").val("");
    // val = "";
  });

  $('.fulicashier-mask-head-img').on('click', function() {
    $('.fulicashier-mask-bg, .fulicashier-mask').hide();
    // $(".fulicashier-mask-input").val("");
    // val = "";
  });

  //点击六个小框获取密码框的焦点
  $('.fulicashier-mask-p').on('click', function() {
    $('.fulicashier-mask-input-hidden').trigger("click").focus();
  });

  var reg = /[^\d]/g;
  $('.fulicashier-mask-input-hidden').on('keyup', function () {
    // console.log($(".fulicashier-mask-input-hidden").val())
    $(".fulicashier-mask-input-hidden").val($(".fulicashier-mask-input-hidden").val().replace(/[^\d]/g,''))
    var arr = $(".fulicashier-mask-input-hidden").val().length
    var arrs = $(".fulicashier-mask-p").length
    for (let i = 0; i < arr; i++) {
      if(arr == 0){
        $('.fulicashier-mask-p:eq(0) .ver').show();
        $('.fulicashier-mask-p:eq(0) .cursor').hide();
      }else{
        $(`.fulicashier-mask-p:eq(${i}) .ver`).show();
        $(`.fulicashier-mask-p:eq(${i}) .cursor`).hide();
      }
    }
    if(arr == 6){
      for (let j = 0; j < arr; j++) {
        $(`.fulicashier-mask-p:eq(${j}) .ver`).show();
        $(`.fulicashier-mask-p:eq(${j}) .cursor`).hide();
      }
    }else{
      for (let s = arr; s < arrs; s++) {
        $(`.fulicashier-mask-p:eq(${s}) .ver`).hide();
        $(`.fulicashier-mask-p:eq(${s}) .cursor`).hide();
      }
      $(`.fulicashier-mask-p:eq(${arr}) .ver`).hide();
      $(`.fulicashier-mask-p:eq(${arr}) .cursor`).show();
    }
    


    var e = event || window.event || arguments.callee.caller.arguments[0];
    // if (e.keyCode == 8) {
    //   if(num != 0) {
    //     num--;
    //     $(`.fulicashier-mask-p:eq(${num}) .ver`).hide();
    //     // val = '';
    //     $(`.fulicashier-mask-p:eq(${num}) .cursor`).show().parent('.fulicashier-mask-p').siblings('.fulicashier-mask-p').find('.cursor').hide();
    //   }
    //   console.log(num);
    // }else{
    //   num++;
    //   $(`.fulicashier-mask-p:eq(${num}) .cursor`).show().parent('.fulicashier-mask-p').siblings('.fulicashier-mask-p').find('.cursor').hide();
    //   $(`.fulicashier-mask-p:eq(${num - 1}) .ver`).show();
    //   if(num == 6) {
    //     $('.fulicashier-mask-p .cursor').hide();
    //     val = $(this).val();
    //     console.log(val);
    //   }
    // }
  });

  // init();
  function init(){
    var x = document.querySelectorAll('.fulicashier-mask-input');
    var style = window.getComputedStyle(x);
    if(style.webkitTextSecurity){
        //do nothing
    }else{
        x.setAttribute("type","password");
    }
  }
});

function focusNextInput(thisInput) {
  var inputs = document.querySelectorAll('.fulicashier-mask-input');
  var e = event || window.event || arguments.callee.caller.arguments[0];
  var dex;
  for (var i = 0; i < inputs.length; i++) {
    if(i == 5) {
      $(".fulicashier-mask-input").each(function(i,j){
        val+=$(j).val();
      })
      console.log(val);
    }
    if (i == (inputs.length - 1)) {
      inputs[i].blur(); break;
    } else if (thisInput == inputs[i] && thisInput.value != '') {
      dex = i + 1;
      inputs[i + 1].focus(); break;
    }
  }
  
  if (e.keyCode == 8) {
    $(".fulicashier-mask-input").val("");
    val = "";
    $(".fulicashier-mask-input").eq(0).focus();
  }
}

