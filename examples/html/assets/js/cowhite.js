function switchTab(tab) {
  console.log("Switchingggg tab to "+tab);
  if(tab){
    if(!$("#"+tab+"-section").length){
      return;
    }
    $(".each-section").addClass("hide");
    $("#"+tab+"-section").removeClass("hide");
    $(document).trigger(tab+"-opened");
  }

}

$(function(){
  $(window).on("hashchange", function() {
      var hash = window.location.hash;
      if(hash) {
        hash = hash.split("?")[0];
        hash = hash.substr(1, hash.length);
        switchTab(hash);
      }
  });



});