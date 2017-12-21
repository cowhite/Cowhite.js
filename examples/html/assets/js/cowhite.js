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
function getObjFromUrlHash() {
  var hash = window.location.hash,
    obj = {}, hashName, hashArr, hashParams, hashParamsArr, hashParamsObj = {};

  if(!hash) {
    return {};
  }
  hashArr = hash.split("?");
  if(hashArr.length) {
    hashName = hashArr[0];
    hashName = hashName.substr(1, hashName.length);
  }
  if(hashArr.length > 1) {
    hashParams = hashArr[1];
  }

  if (hashParams){
    hashParamsObj = {};
    hashParamsArr = hashParams.split("&");
      for(var i=0; i<hashParamsArr.length; i++){
        temp = hashParamsArr[i].split("=");
        hashParamsObj[temp[0]] = temp[1];
      }
  }
  res = {
    "name": hashName,
    "params": hashParamsObj
  }
  return res;

}

function onLoad() {
  var hashObj = getObjFromUrlHash();
  switchTab(hashObj.name);
}
$(function(){

  onLoad();
  $(window).on("hashchange", function() {
      var hash = window.location.hash;
      if(hash) {
        hash = hash.split("?")[0];
        hash = hash.substr(1, hash.length);
        switchTab(hash);
      }
  });



});