import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
                
                <div className="max-w-96">
                    <img src={assets.logo} alt="logo" className='invert mb-4 h-8 md:h-9'/>
                    <p className="mt-6 text-sm text-gray-500">
                        Discover the world's most extraordinary places to stay, from
                        boutique hotels to luxury villas amd private islands.
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <a href="#">
                            <img src={assets.instagramIcon} alt="instagram-icon" className='w-6'/>
                        </a>
                        <a href="#">
                            <img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/>
                        </a>
                        <a href="#">
                             <img src={assets.linkendinIcon} alt="Linkedin-icon" className='w-6'/>
                        </a>
                        <a href="#">
                             <img src={assets.twitterIcon} alt="Twitter-icon" className='w-6'/>
                        </a>
                    </div>
                </div>
        
                <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
                    <div>
                        <h2 className="font-semibold text-lg text-gray-900 mb-5">COMPANY</h2>
                        <ul className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-900 mb-5">SUPPORT</h2>
                        <div className="text-sm text-gray-500 space-y-2 list-none">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Safety Information</a></li>
                            <li><a href="#">Cancellation Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </div>
                    </div>
                </div>

                <div className='max-w-80'>
                    <p className="text-lg text-gray-800">
                        Stay Updated
                    </p>

                    <p className="text-sm text-gray-500 mt-3">
                    Subscribe to our newsletter and stay up to date with the latest news and special offers.
                    </p>

                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-1 border border-gray-300 h-9 px-3 outline-none' placeholder='Enter your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert'/>
                        </button>
                    </div>
                </div>
        
            </div>

            <div className="flex items-center justify-between py-5">
            <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>

            <ul className="flex items-center gap-4">
           <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Sitemap</a></li>
  </ul>
</div>
        </footer>
    </div>
  )
}

export default Footer