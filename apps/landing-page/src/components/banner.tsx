import { FcAdvertising } from 'react-icons/fc';
import { PiFlagBannerFold, PiFlagBannerFoldFill } from 'react-icons/pi';

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 sm:px-8 shadow-lg flex justify-center items-center gap-2">
      <PiFlagBannerFoldFill className="h-5 w-5 text-white sm:h-6 sm:w-6" />
      <p className="text-xs md:text-base font-semibold text-white leading-6 text-center">
        هذا الموقع في الوضع التجريبي، قادمون قريباً!
      </p>
      {/*<div className="flex flex-1 justify-end">*/}
      {/*  <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">*/}
      {/*    <span className="sr-only">Dismiss</span>*/}
      {/*    <BiRightArrow aria-hidden="true" className="h-6 w-6 text-white" />*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
}
