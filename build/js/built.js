'use strict';

/*中英文切换*/
window.onload = function () {
  var selDom = document.querySelector('.nav_language_sel');
  selDom.onchange = function () {
    getUrl(this);
    function getUrl(selUrl) {
      if (selUrl.value === '') return;
      var docUrl = selUrl.options[selUrl.selectedIndex].value;
      open(docUrl, '_self');
      selUrl.selectedIndex = 0;
      selUrl.blur();
    }
  };
};