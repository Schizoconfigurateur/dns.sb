import Balancer from 'react-wrap-balancer';
import TypeAnimation from '../typing-animation';

export default function Hero() {
  return (
    <>
      <div aria-hidden="true" className="absolute bottom-1/3 left-0 right-0 top-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-red-600 to-purple-700 blur-3xl opacity-20 dark:opacity-30" />
      <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:ml-auto sm:mr-auto lg:ml-0 lg:mr-auto sm:w-10/12 md:w-2/3 lg:w-7/12">
          <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
            <Balancer>
              Browse Internet,
              <br />
              <span className="text-red-600">Faster</span>
              {' '}
              and
              {' '}
              <span className="text-red-600">More Private</span>
            </Balancer>
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-200">
            Tailor your internet experience to meet your needs with DNS.SB&apos;s extremely fast and stable DNS resolver services.
          </p>
          <div>
            <div className="w-full mt-12">
              <div className="relative flex p-2 rounded-xl bg-white shadow-2xl md:p-4 dark:bg-zinc-900 border dark:border-zinc-700 border-gray-100">
                <TypeAnimation
                  sequence={[
                    '185.222.222.222',
                    2000,
                    '2a09::',
                    2000,
                    '45.11.45.11',
                    2000,
                    '2a11::',
                    2000
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  className="w-full px-2 py-2 md:py-4 md:px-3 font-bold text-lg leading-none flex items-center md:text-3xl xl:text-4xl h-12 md:h-[72px]"
                />
                <button type="button" title="Start using" className="border-none ml-auto py-2 md:py-3 px-3 sm:px-6 md:px-8 lg:px-12 rounded-xl text-center transition !bg-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mx-auto text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full lg:w-5/12 lg:-mr-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/dns.svg" alt="project illustration" height="500" width="500" />
        </div>
      </div>
    </>
  );
}
