class CopyrightYear extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
    }
}

customElements.define("x-year", CopyrightYear);

customElements.define("x-year", CopyrightYear);
class TwoSided extends HTMLElement{
	connectedCallback(){
		 this.innerHTML = '<a href="shopping">Shopping</a> <a href="kit_developers">Kit Developers</a>'; 
	}
}
customElements.define("x-twosided", TwoSided);