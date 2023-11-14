class Team extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
 <section class="flex flex-col min-h-auto pb-4"> 
       <div class="flex justify-center py-6" id="team">
            <div class="flex flex-col md:flex-row space-x-6 max-w-7xl">
              <div>
                <p class="absolute text-3xl font-sans font-bold text-blue uppercase text-left indent-36 pt-16">
                  climb
                </p>
                <p class="text-9xl font-sans font-bold text-navy text-left indent-1">
                  02.
                </p>
              </div>

              <div class="md:self-center">
                <p class="text-base font-thin font-serif text-left md:pl-16">
                  Cras scelerisque <br> id quam sed dignissim Pellentesque urna nunc, gravida
                  quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim
                  tortor nec congue.
                </p>
              </div>
            </div>
       </div>

        <div class="bg-gray shadow-2xl scroll-my-16">
          <div class="flex flex-col">
          <div 
            x-data="{
              openTab: 1,
              activeClasses: 'text-blue bg-navy underline',
              inactiveClasses: 'text-navy hover:text-blue'
            }" class="">
            <ul class="flex flex-row justify-center max-w-7xl md:pr-96">
              <li @click="openTab = 1" :class="{ '-mb-px': openTab === 1 }" class="-mb-px mr-1">
                <a :class="openTab === 1 ? activeClasses : inactiveClasses" class="text-3xl font-sans inline-block p-2 font-bold uppercase" href="#t1">
                Mountain 1
                </a>
              </li>
              <li @click="openTab = 2" :class="{ '-mb-px': openTab === 2 }" class="mr-1">
                <a :class="openTab === 2 ? activeClasses : inactiveClasses" class="text-3xl font-sans inline-block p-2 font-bold uppercase" href="#t2">
                Mountain 2
                </a>
              </li>
            </ul>

          <div x-show="openTab === 1" class="bg-image4 bg-cover bg-center md:bg-bottom h-[560px]">
            <div class="flex flex-row justify-center max-w-7xl md:pr-80 pt-24">
              <div class="bg-white bg-opacity-80 box-content  h-60 w-80 px-6 py-4 intend-2">
                <div class="flex flex-col flex-warp pt-4 pb-0">

                  <div class="grow w-full py-2">
                    <p class="text-3xl font-sans font-bold text-blue uppercase text-left">
                      schedule
                    </p>
                  </div>
                  <div class="flex flex-row justify-between">

                    <div class="">
                      <p class="text-base font-serif ">25 Nov 2016</p>
                      <p class="text-base font-serif ">28 Nov 2016</p>
                      <br />
                      <p class="text-base font-serif ">18 Dec 2016</p>
                      <br />
                      <p class="text-base font-serif ">07 Jan 2017</p>
                    </div>

                    <div class="">
                      <p class="text-base font-serif ">Vestibulum viverra</p>
                      <p class="text-base font-serif ">Vestibulum viverra</p>
                      <br />
                      <p class="text-base font-serif ">Vestibulum viverra</p>
                      <br />
                      <p class="text-base font-serif ">Vestibulum viverra</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
           </div>
          
           <div x-show="openTab === 2" class="bg-image5 bg-cover bg-center bg-right h-[560px]">
              <div class="flex flex-row justify-center max-w-7xl md:pr-80 pt-24">
                <div class="bg-white bg-opacity-80 box-content h-60 w-80 px-6 py-4 intend-2">
                  <div class="flex flex-col flex-warp pt-4 pb-0">

                    <div class="grow w-full py-2">
                      <p class="text-3xl font-sans font-bold text-blue uppercase text-left">
                        schedule
                      </p>
                    </div>
                    <div class="flex flex-row justify-between">

                      <div class="">
                        <p class="text-base font-serif ">17 Nov 2016</p>
                        <br />
                        <p class="text-base font-serif ">13 Dec 2016</p>
                        <p class="text-base font-serif ">28 Dec 2016</p>
                        <br />
                        <p class="text-base font-serif ">09 Feb 2017</p>
                      </div>

                      <div class="">
                        <p class="text-base font-serif ">Vestibulum viverra</p>
                        <br />
                        <p class="text-base font-serif ">Vestibulum viverra</p>
                        <p class="text-base font-serif ">Vestibulum viverra</p>
                        <br />
                        <p class="text-base font-serif ">Vestibulum viverra</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </div >
      </div>
    
      </div >

   </section >
    
    `;
  }
}

window.customElements.define("team-card", Team);
