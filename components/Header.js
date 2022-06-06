import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid'
import airbnbLogo from '../public/Airbnb_Logo_Bélo.svg.png'
// 1:00

// Header component
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10">  {/*Makes sure to use good HTML tags*/}
            {/*Left Section*/}
            {/*relative to the size of the div container*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    // src="https://links.papareact.com/qd3"
                    src={airbnbLogo}
                    priority={true}
                    layout="fill"
                    // keeps aspect ratio
                    objectFit="contain"
                    // assigns to left hand side of container
                    objectPosition="left"
                    alt="airbnb logo"/>
            </div>

            {/*Middle Section*/}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600
                placeholder-gray-400" type="text" placeholder="Start your search"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2
                cursor-pointer md:mx-2"/>

            </div>

            {/*Right Section*/}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"/>

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>

            </div>
        </header>
    );
}

export default Header