import $ from 'jquery';

class MobileMenu {
  constructor() {
    $(".site__menu-content").click(function(){
      console.log("The top right icon was clicked");
    } );
  }
}
export default MobileMenu;
