function Scroll() {
	var element = document.querySelector(".header");
	var type = document.querySelector(".p-scroll");
	var type2 = document.querySelector(".p-scroll2");
	var box = document.querySelector(".searchbox");
	var placeholder = document.querySelector(".placeholder");

	var ypos = window.pageYOffset;
  
		if (ypos > 71) {
		  element.classList.add("header-scrolled");
		  type.classList.add("p-scrolled");
		  type2.classList.add("p-scrolled2");
		  box.classList.add("searchbox-scrolled");
		  placeholder.classList.add("placeholder-scrolled")
	/*
		  if (ypos > 150) {
			element.classList.add("header-scrolled");
			type.classList.add("p-scrolled");
			type2.classList.add("p-scrolled2");
			box.classList.add("searchbox.scrolled");
		  }
	???*/
		}/*se borra*/
		  else {
			element.classList.remove("header-scrolled");
			type.classList.remove("p-scrolled");
			type2.classList.remove("p-scrolled2");
			box.classList.remove("searchbox-scrolled");
			placeholder.classList.remove("placeholder-scrolled")

		  }
	/*
}
		else {
		  element.classList.remove("header-scrolled");
		  type.classList.remove("p-scrolled");
		  type2.classList.remove("p-scrolled2");
		  box.classList.remove("searchbox-scrolled");
		}
	?*/
	}

  window.addEventListener("scroll", Scroll);