class MyCustomElement extends HTMLElement {

    constructor() {

        super();

        console.log("Desde el constructor - Memoria");

    }

    connectedCallback() {

        console.log("Desde el DOM");

    }

    disconnectedCallback() {

        console.log("Removido del DOM");

    }

}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();