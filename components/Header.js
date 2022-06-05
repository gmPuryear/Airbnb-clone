import Image from "next/image";
import airbnbLogo from '../public/Airbnb_Logo_Bélo.svg.png'

// Header component
function Header() {
    return (
        <header className="sticky top-0 z-50 grid-cols-3 bg-white shadow-md p-5
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
            <div>

            </div>

            {/*Right Section*/}
            <div>

            </div>
        </header>
    );
}

export default Header