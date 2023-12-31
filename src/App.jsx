import { useState } from "react";
import "./App.css";
import "./main.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="bg-black">
        <nav class="p-3 bg-black">
          <div class="w-12/12 lg:w-10/12 flex items-center m-auto">
            <div class="w-12/12 lg:w-6/12 lg:text-left text-center w-full">
              <h1 class="inline-block text-2xl text-white font-bold">
                EROS ADS
              </h1>
            </div>
            <div class="w-6/12 lg:block hidden">
              <ul class="flex text-center justify-end">
                <li>
                  <a class="text-sm p-2 px-4 text-slate-400" href="/">
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a class="text-sm p-2 px-4 text-slate-400" href="/">
                    Pricing
                  </a>
                </li>
                <li>
                  <a class="text-sm p-2 px-4 text-slate-400" href="/">
                    {" "}
                    F.A.Q.{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="lg:flex lg:w-10/12 m-auto">
          <div class="lg:w-4/12 p-6">
            <h1 class="text-2sm py-3 text-white font-bold">Log Into Account</h1>

            <div class="p-2 h-14 py-1 my-7 bg-white overflow-hidden">
              <label
                class="w-full text-xs block"
                id="email-field"
                htmlFor="email"
              ></label>
              <input
                id="email"
                class="w-full text-lg py-1 focus:outline-none focus:border-none border-none"
                type="email"
                placeholder="Email address*"
              />
            </div>
            <div class="text-red-300 font-bold" id="errormsg"></div>

            <div class="p-2 h-14 py-1 my-7 bg-white overflow-hidden">
              <label
                class="w-full text-xs block"
                id="password-field"
                htmlFor="password"
              ></label>
              <input
                id="password"
                class="w-full text-lg py-1 focus:outline-none focus:border-none border-none"
                type="password"
                placeholder="Pasword*"
              />
            </div>

            <div class="flex items-center">
              <div class="flex items-center w-6/12">
                <input
                  class="form-checkbox h-4 w-4"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <span class="text-lg text-slate-300 px-3">Remember me</span>
              </div>

              <div class="text-right w-6/12">
                <a class="text-lg text-slate-500 inline-block" href="/">
                  Forgot Password
                </a>
              </div>
            </div>

            <div class="text-center py-2">
              <button
                id="loginbtn"
                class="block p-2 my-5 w-full hover:bg-slate-600 text-slate-500 border-2 rounded-md"
              >
                LOG INTO MY ACCOUNT
              </button>
              <button class="block p-2 my-5 w-full hover:bg-slate-600 text-white border-2 rounded-md">
                CREATE NEW ACCOUNT
              </button>
            </div>
          </div>

          <div class="lg:w-8/12 p-7 py-0">
            <div>
              <h1 class="text-white text-2xl font-bold py-2">
                The Ultimate Erotic Entertainment
              </h1>
              <p class="text-white py-2 leading-5">
                We have been online since 1997 and are the world’s largest adult
                directory with over 100 locations worldwide.We pride ourselves
                in quality viewers, quality results, customer service and
                advertiser satisfaction.
              </p>
            </div>

            <div>
              <h1 class="text-white text-2xl font-bold py-2">
                What Types of Ads Do You Offer?
              </h1>
              <p class="text-white py-2 leading-5">
                We offer a wide variety of advertising options. Most advertisers
                start with a standard ad or visiting ad, and then customize
                their ads with such options as VIP upgrades or Premier Services
                to drive even more traffic to them. Both standard and visiting
                ads include an elegant full page ad with up to 8 photos.
              </p>
            </div>

            <div class="py-2">
              <h1 class="text-white text-2xl font-bold py-2">
                What Does My Purchase Cover?
              </h1>
              <p class="text-white py-2 leading-5">
                By purchasing an ad on the Eros Guide, you have secured a
                beautifully laid-out advertisement on the premier website for
                adult entertainment services. Since 1997 we have been dedicated
                to bringing you high quality traffic, and it shows. Of course
                every provider is unique and we cannot guarantee you a specific
                number of leads from your advertisement. But we do know what it
                takes to maintain great site traffic – both quality and quantity
                – and what types of things you can do to take maximum advantage
                of that traffic. Which is why at Eros you have access to the
                best customer service and sales staff in the industry. We are
                here to answer your questions and help you make the most of your
                advertising experience with the Eros Guide.
              </p>
            </div>
          </div>
        </div>

        <div class="lg:w-10/12 mt-16 p-4 lg:flex m-auto">
          <div class="w-1/5 hidden lg:block">
            <h1 class="text-white font-bold text-2xl">EROSADS</h1>
          </div>
          <div class="flex lg:w-2/5">
            <div class="w-6/12">
              <a class="text-sm block text-slate-300" href="/">
                {" "}
                Contact{" "}
              </a>
              <a class="text-sm block my-8 text-slate-300" href="/">
                {" "}
                Privacy{" "}
              </a>
            </div>
            <div class="w-6/12">
              <a class="text-sm block text-slate-300" href="/">
                Terms & Conditions
              </a>
              <a class="text-sm block my-8 text-slate-300" href="/">
                Advertiser Agreement
              </a>
            </div>
          </div>
          <div class="flex lg:w-2/5">
            <div class="w-6/12">
              <a class="text-sm block text-slate-400" href="/">
                {" "}
                F.A.Q.{" "}
              </a>
              <a class="text-sm block my-8 text-slate-400" href="/">
                About ErosAds
              </a>
            </div>
            <div class="w-6/12">
              <a class="text-sm block text-slate-300" href="/">
                2257 Exemption
              </a>
              <a class="text-sm block my-8 text-slate-300" href="/">
                DMCA Complaints
              </a>
            </div>
          </div>
        </div>

        <div class="lg:w-10/12 py-5 p-4 m-auto">
          <h1 class="lg:text-lg text-sm text-slate-400">
            Customization Services brought to you by Eros-guide.com™ All Things
            Erotic™. © 1997-2016 MPF Media Services GmbH Obergrundstrasse
            73CH-6003 Luzern
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
