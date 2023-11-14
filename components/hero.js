class Hero extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

<section class="flex flex-col pt-16 md:pt-0">
        <div class="bg-image bg-cover bg-right-top h-96 md:h-[930px]">
            <img class="object-fill src="/img/sabbir_black.png">  
        </div>
</section>

        `;
    }
}

window.customElements.define('hero-card', Hero);