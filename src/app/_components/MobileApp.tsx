import RatingComponent from '../../components/shared/RatingComponent'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

export default function MobileApp() {
  return (

    <div className="h-full flex flex-col justify-center">
      <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
        <div className="relative space-y-5">
          <div className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-500/30">
            📱 MOBILE APP
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            Shop Faster on Our App
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Get app-exclusive deals &amp; 15% off your first order.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="#"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]"
            >
              <FontAwesomeIcon icon={faApple} className="svg-inline--fa fa-apple text-xl" />

              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Download on
                </div>
                <div className="text-sm font-semibold -mt-0.5">
                  App Store
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="svg-inline--fa fa-google-play text-xl" />
              <div className="text-left">
                <div className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Get it on
                </div>
                <div className="text-sm font-semibold -mt-0.5">
                  Google Play
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2 pt-2 text-sm">
            <RatingComponent rating={5} className='text-yellow-400' />
            {/* <span className="text-yellow-400">★★★★★</span> */}
            <span className="text-gray-400">
              4.9 • 100K+ downloads
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
