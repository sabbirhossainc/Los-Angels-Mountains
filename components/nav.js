class Nav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `

<!-- 
This example requires updating your template:
    <html class="h-full bg-gray-100">
     <body class="h-full">
-->

<nav class="fixed bg-white top-0 w-screen z-10">
    <div x-data="{
                    isOpen: false,
                    tab: 'tab1'
                }" 
                class="mx-auto sm:w-full md:max-w-7xl px-3 sm:px-7 lg:px-8">
        <div class="flex h-16 items-center justify-between">

        <div class="block">
                <div class="ml-4 flex flex-row items-inline justify-center md:ml-6">

                    <!-- Profile -->

                    <div class="flex md:ml-4">
                        <div class="block md:pl-3 py-1">
                        <a href="#" @click="tab = 'tab0'" :class="{: tab ==='tab0'}">
                        <img class="h-8 w-8 rounded-full ring-2 ring-slate-400"
                            src="/img/logo_(round).png" alt="Your Company">
                            </div>
                            <div class="pl-3">
                            <img class="h-full w-full"
                            src="/img/logo_text.png" alt="Your Company">
                            </a>
                            </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center">

                <!-- Desktop Navigation  -->

                <div class="hidden md:block">
                    <div class="flex items-baseline space-x-4">
                        <a href="#history" @click="tab = 'tab1'" :class="{'underline' : tab ==='tab1'}"
                            class="hover:underline text-brown uppercase px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page">01.history</a>

                        <a href="#team" @click="tab = 'tab2'" :class="{'underline': tab ==='tab2'}"
                            class="hover:underline text-brown uppercase px-3 py-2 rounded-md text-sm font-medium">02.team</a>

                    </div>
                </div>
            </div>

            <div class="-mr-2 flex items-inline justify-center md:hidden">

                <!-- Mobile menu button -->

                <button @click="isOpen = !isOpen" type="button"
                    class="inline-flex shadow-2xl rounded-md text-brown p-2"
                    aria-controls="mobile-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>

                    <!--Heroicon name: outline/bars-3
                        Menu open: "hidden", Menu closed: "block"-->

                    <svg :class="isOpen ? 'hidden' : 'block'" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <!--  Heroicon name: outline/x-mark
                        Menu open: "block", Menu closed: "hidden"-->

                    <svg :class="isOpen ? 'block' : 'hidden'" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->

        <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden block" x-show="isOpen"
            x-transition:enter="transition transform origin-top-left ease-out duration-100"
            x-transition:enter-start="opacity-0 scale-90" x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition transform origin-top-left ease-in duration-75"
            x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-90"
            id="mobile-menu">

            <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">

                <a href="#history" @click="tab = 'tab1'" :class="{'underline' : tab ==='tab1'}"
                    class="no-underline text-brown uppercase block px-3 py-2 rounded-md text-base font-medium duration-100">history</a>

                <a href="#team" @click="tab = 'tab2'" :class="{'underline' : tab ==='tab2'}"
                    class="no-underline text-brown uppercase block px-3 py-2 rounded-md text-base font-medium duration-100">team</a>
            </div>

        </div>
    </div>
</nav>
        `;
  }
}

window.customElements.define("nav-card", Nav);
