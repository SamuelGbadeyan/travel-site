import $ from 'jquery';

class MobileMenu {
	constructor() {

	$(".site-header__menu-icon").click(function(){

		this.menuIcon=$("site-header__menu-icon");
		this.events();
	}



events(){
this.menuIcon.click(this.toggleTheMenue);
}

toggleTheMenue(){

	console.log ("The icon was clicked");
}

}

export default MobileMenu;

