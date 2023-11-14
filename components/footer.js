class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

<footer class="flex justify-center">
  <div
    class="flex z-1 bg-blend-screen fixed bottom-0 w-screen space-x-6 md:space-x-0 flex-row md:gap-x-56 lg:gap-x-96 items-center justify-center 
        font-bold bg-white text-gray h-16"
  >
    <div class="z-10 fixed bottom-0 bg-blend-screen bg-gray h-16 w-full bg-opacity-80"></div>

    <div class="block">
      <div class="flex flex-row items-inline justify-center md:pl-16">
        <!-- Profile -->

        <div class="flex md:ml-4">
          <div class="md:pl-3 py-1">
            <img class="h-8 w-8 rounded-full ring-2 ring-slate-400" src="/img/logo_(round).png" alt="Your Company">
          </div>
          <div class="pl-3">
            <img class="h-full w-full"  src="/img/logo_text.png" alt="Your Company">
          </div>
        </div>
      </div>
    </div>

    <div class="md:space-x-2"></div>

    <div class="flex items-center">
      <!-- Desktop Navigation  -->
      <div class="md:p-x-24 mr-4">
        <div class="pr-0">
          <em class="font-serif font-bold md:text-sm text-center md:tracking-wider">
            COPYRIGHT 2016.<br class="md:hidden"> ALL RIGHTS RESERVED.
          </em>
        </div>
      </div>
    </div>
  </div>
</footer>;

    `;
  }
}

window.customElements.define("footer-card", Footer);
