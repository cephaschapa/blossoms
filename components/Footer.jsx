import Image from "next/image"

function Footer() {
    return (
        <footer className="pt-10">
            {/* Map */}
            <div className="px-2 py-10 lg:px-96">
            <div className='w-full px-2 flex flex-col justify-center items-center space-y-3'>
                <h1 className='text-pink-300 font-bold text-4xl text-center uppercase'>ON MAP</h1>
                <div className='w-20 h-2 bg-white rounded-full'></div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d77227.57480288681!2d0.7079182!3d52.7797854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ec7b870bda3e7da!2sBlossoms+Childcare+Nursery+West+Raynham!5e0!3m2!1sen!2suk!4v1563458046724!5m2!1sen!2suk" className='w-full h-96 rounded-lg' frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
            <div className="bg-gray-900 lg:px-96">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 bg-gray-900 py-10 px-2 lg:items-start">
                    {/* Logo */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative h-32 w-32">
                            <Image src="/footer-logo.png" objectFit="cover" alt="logo" layout="fill"/>
                        </div>
                        <p className="text-white text-lg text-center">Where Children Play, Learn & Blossom</p>
                    </div>
                    {/* Openning times */}
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="uppercase text-lg  font-bold text-white">
                            Open Times
                        </h3>
                        <ul className="text-white ">
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Monday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Tuesday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Wednesday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Thursday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Friday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Saturday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                            <li className='flex items-center space-x-2 justify-center'>
                                <span>Saturday</span>
                                <span>07:00 - 19:00</span>
                            </li>
                        </ul>
                    </div>
                    {/* Contact info */}
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="uppercase text-lg font-bold text-white">
                            Open Times
                        </h3>
                        <div className="text-white text-lg text-center">
                            <p>
                                Katie
                            </p>
                            <p>
                                katie@nkchildcare.co.uk
                            </p>
                            <p>
                                07887 373737
                            </p>
                            <p>
                                Blossoms Childcare Nursery,
                            </p>
                            <p>
                                The Burr Centre
                                Blenheim Square
                                Kipton Wood
                                Former RAF West Raynham
                            </p>
                            <p>
                                NR21 7PA
                            </p>
                        </div>
                    </div>
                    {/* Ofsted logo */}
                    <div className="flex flex-col justify-center items-center">
                        <div className="relative h-32 w-32">
                            <Image src="/ofsted-registration.png" objectFit="cover" alt="logo" layout="fill"/>
                        </div>
                        <p className="text-white text-lg text-center">Ofsted Registration EY545389</p>
                    </div>
                </div>
            </div>
            

        </footer>
    )
}

export default Footer
