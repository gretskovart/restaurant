
'use strict'

function selectMenuPage() {
  var link = document.getElementById( 'pseudo-menu' ).children;
  var table = document.getElementsByClassName( 'menu-category' );
  var arrayLinks = [];

  for (var i = 0; i < link.length; i++) {
    //Добавляем псевдоссылки в массив
    var arrValue = link[i].firstChild.innerHTML;
    arrayLinks.push(arrValue);

    link[i].firstChild.onclick = function changeMenuPage() {
      var a = this.innerHTML.toString();
      var index = arrayLinks.indexOf(a);

      document.querySelector( '#pseudo-menu .active' ).classList.remove( 'active' );
      document.querySelector( '.menu-category.active' ).classList.remove( 'active' );

      this.parentNode.classList.add( 'active' );
      table[index].classList.add( 'active' );

      return false;
    };
  }
}

selectMenuPage();
