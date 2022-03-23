document.querySelector(".lever").addEventListener("change", function(){
	this.classList.remove("pristine");
	
	let ac = "aria-checked";
	this.setAttribute(ac,this.getAttribute(ac) == "true" ? "false" : "true");
});