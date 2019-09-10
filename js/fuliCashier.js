$(function() {

  $('.confirm-btn').on('click', function() {
    $('.fulicashier-mask-bg, .fulicashier-mask').show();
    $('.fulicashier-mask-input-wrapper input:eq(0)').trigger("click").focus();
  });

  $('.fulicashier-mask-bg, .fulicashier-mask-head-img').on('click', function() {
    $('.fulicashier-mask-bg, .fulicashier-mask').hide();
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

var val = '';
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

