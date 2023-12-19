import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <nav className="p-3 bg-black">
          <div className="w-12/12 lg:w-10/12 flex items-center m-auto">
            <div className="w-12/12 lg:w-6/12 lg:text-left text-center w-full">
              <h1 className="inline-block text-2xl text-white font-bold">
                EROS ADS
              </h1>
            </div>
            <div className="w-6/12 lg:block hidden">
              <ul className="flex text-center justify-end">
                <li>
                  <a className="text-sm p-2 px-4 text-slate-400" href="/">
                    Contact & Support
                  </a>
                </li>
                <li>
                  <a className="text-sm p-2 px-4 text-slate-400" href="/">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-sm p-2 px-4 text-slate-400" href="/">
                    F.A.Q.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="lg:flex lg:w-10/12 m-auto">
          <div className="lg:w-4/12 p-6">
            <h1 className="text-2sm py-3 text-white font-bold">
              Log Into Account
            </h1>

            <div className="p-2 py-1 my-7 bg-white">
              <label className="w-full block" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="w-full"
                type="email"
                placeholder="Email address"
              />
            </div>

            <div className="p-2 py-1 my-7 bg-white">
              <label className="w-full block" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                className="w-full"
                type="email"
                placeholder="Email address"
              />
            </div>

            <div className="flex items-center">
              <div className="flex items-center w-6/12">
                <input
                  className="form-checkbox h-4 w-4"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <span className="text-lg text-slate-300 px-3">Remember me</span>
              </div>

              <div className="text-right w-6/12">
                <a className="text-lg text-slate-500 inline-block" href="/">
                  Forgot Password
                </a>
              </div>
            </div>

            <div className="text-center py-2">
              <button className="block p-2 my-5 w-full hover:bg-slate-600 text-slate-500 border-2 rounded-md">
                LOG INTO MY ACCOUNT
              </button>
              <button className="block p-2 my-5 w-full hover:bg-slate-600 text-white border-2 rounded-md">
                CREATE NEW ACCOUNT
              </button>
            </div>
          </div>

          <div className="lg:w-8/12 p-7 py-0">
            <div>
              <h1 className="text-white text-2xl font-bold py-2">
                The Ultimate Erotic Entertainment
              </h1>
              <p className="text-white py-2 leading-5">
                We have been online since 1997 and are the world’s largest adult
                directory with over 100 locations worldwide.We pride ourselves
                in quality viewers, quality results, customer service and
                advertiser satisfaction.
              </p>
            </div>

            <div>
              <h1 className="text-white text-2xl font-bold py-2">
                What Types of Ads Do You Offer?
              </h1>
              <p className="text-white py-2 leading-5">
                We offer a wide variety of advertising options. Most advertisers
                start with a standard ad or visiting ad, and then customize
                their ads with such options as VIP upgrades or Premier Services
                to drive even more traffic to them. Both standard and visiting
                ads include an elegant full page ad with up to 8 photos.
              </p>
            </div>

            <div className="py-2">
              <h1 className="text-white text-2xl font-bold py-2">
                What Does My Purchase Cover?
              </h1>
              <p className="text-white py-2 leading-5">
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

        <div className="lg:w-10/12 mt-16 p-4 lg:flex m-auto">
          <div className="w-1/5 hidden lg:block">
            <h1 className="text-white font-bold text-2xl">EROSADS</h1>
          </div>
          <div className="flex lg:w-2/5">
            <div className="w-6/12">
              <a className="text-sm block text-slate-300" href="/">
                Contact
              </a>
              <a className="text-sm block my-8 text-slate-300" href="/">
                Privacy
              </a>
            </div>
            <div className="w-6/12">
              <a className="text-sm block text-slate-300" href="/">
                Terms & Conditions
              </a>
              <a className="text-sm block my-8 text-slate-300" href="/">
                Advertiser Agreement
              </a>
            </div>
          </div>
          <div className="flex lg:w-2/5">
            <div className="w-6/12">
              <a className="text-sm block text-slate-400" href="/">
                F.A.Q.
              </a>
              <a className="text-sm block my-8 text-slate-400" href="/">
                About ErosAds
              </a>
            </div>
            <div className="w-6/12">
              <a className="text-sm block text-slate-300" href="/">
                2257 Exemption
              </a>
              <a className="text-sm block my-8 text-slate-300" href="/">
                DMCA Complaints
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-10/12 py-5 p-4 m-auto">
          <h1 className="lg:text-lg text-sm text-slate-400">
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
