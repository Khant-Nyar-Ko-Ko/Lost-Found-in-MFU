import React from 'react'
import { MdSecurity } from 'react-icons/md'
import { TbMapSearch, TbReportSearch } from 'react-icons/tb'

const Service = () => {

    const services = [
        {
            icon: <TbReportSearch color='#39aaaa' className="text-[40px] md:text-[60px]" />,
            title: "Item Reporting Service",
            desc: "This service allows users to report lost or found items, providing an intuitive interface to upload details about the item."
        },
        {
            icon: <TbMapSearch color='#39aaaa' className="text-[40px] md:text-[60px]" />,
            title: "AI-Powered Matching Service",
            desc: "Uses artificial intelligence to match lost items with found items based on descriptions, photos, and geolocation. This service automates the process of connecting users with potential matches."
        },
        {
            icon: <MdSecurity color='#39aaaa' className="text-[40px] md:text-[60px]" />,
            title: "Secure Communication Service",
            desc: "Facilitates safe and private interaction between users who report lost or found items"
        }
    ]

    return (
        <div id='services' className='bg-gray-50 text-black min-h-[600px] flex flex-col justify-around items-center py-10 md:py-20'>
            <div className='flex flex-col gap-4 justify-center items-center py-6'>
                <h3 className=' text-2xl md:text-4xl font-semibold'>Our Services</h3>
                <p className='text-sm md:text-base mx-3 md:mx-0 text-slate-600'>deliver a seamless, efficient, and secure platform for solving lost-and-found problems</p>
            </div>

            <div className='flex flex-col md:flex-row justify-around items-start gap-8 md:gap-20'>
                {services.map((service, index) => (
                    <div key={index} className='w-[300px] flex flex-col justify-center items-center gap-2'>
                        {service.icon}
                        <h4 className=' text-lg md:text-xl font-semibold'>{service.title}</h4>
                        <p className=' text-xs md:text-sm text-slate-500'>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service