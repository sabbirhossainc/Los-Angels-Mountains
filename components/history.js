class History extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    
    <section class="flex flex-col h-full ">
    <div class="scroll-smooth pt-16" id="history">
        <div class="bg-image3 bg-cover h-[930px]">
            <div class="flex justify-center pt-16">
                <div class="flex flex-col max-w-7xl">
                <p class="absolute text-3xl font-sans font-bold text-blue uppercase text-left indent-32 pt-16">history</p>
                    <p class="text-9xl font-sans font-bold text-gray text-left indent-1">01.</p>
                    <p class="text-base font-thin font-serif text-left pl-4 pr-4 md:pl-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante viverra, rutrum erat rutrum, 
                        consectetur mi. Proin at <br> maximus est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras scelerisque 
                        id quam sed dignissim <br> Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim 
                        tortor nec congue. <br>
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-gray bg-opacity-24 mx-auto w-full scroll-my-32">
        
        <div class="bg-image2 bg-cover md:w-auto rounded-md">

            <div class="swiper mySwiper">
                <div class="swiper-wrapper items-center md:py-2">

                    <div class="swiper-slide w-full flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                        <div class="p-2">
                            <img src="/img/project(350).png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                    </div>

                    <div class="swiper-slide w-full flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                        <div class="p-2">
                            <img src="/img/project1(350).png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                    </div>

                    <div class="swiper-slide w-full flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                        <div class="p-2">
                            <img src="/img/project(350).png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                    </div>

                    <div class="swiper-slide w-full flex-nowrap py-6 md:px-32 gap-8 md:gap-12">
                        <div class="p-2">
                            <img src="/img/project1(350).png" alt="" class="flex-shrink-0 rounded-md shadow-xl">
                        </div>
                    </div>

                </div>
                <!--
                <div class="swiper-button-next hidden md:block"></div>
                <div class="swiper-button-prev hidden md:block"></div>
                -->
                <div class="swiper-pagination"></div>

            </div>
         </div>
        </div>
    </div>
</section>
`;
  }
}

window.customElements.define("history-card", History);