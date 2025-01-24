import React from 'react'
import { MdSecurity } from 'react-icons/md'
import { TbMapSearch, TbReportSearch } from 'react-icons/tb'

const Service = () => {

    const services = [
        {
            icon: <TbReportSearch color='#39aaaa' size={70} />,
            title: "Item Reporting Service",
            desc: "This service allows users to report lost or found items, providing an intuitive interface to upload details about the item."
        },
        {
            icon: <TbMapSearch color='#39aaaa' size={70} />,
            title: "AI-Powered Matching Service",
            desc: "Uses artificial intelligence to match lost items with found items based on descriptions, photos, and geolocation. This service automates the process of connecting users with potential matches."
        },
        {
            icon: <MdSecurity color='#39aaaa' size={70} />,
            title: "Secure Communication Service",
            desc: "Facilitates safe and private interaction between users who report lost or found items"
        }
    ]

    return (
        <div id='services' className='bg-gray-50 text-black min-h-[600px] flex flex-col justify-around items-center py-20'>
            <div className='flex flex-col gap-4 justify-center items-center py-6'>
                <h3 className=' text-4xl font-semibold'>Our Services</h3>
                <p className='text-slate-600'>deliver a seamless, efficient, and secure platform for solving lost-and-found problems</p>
            </div>

            <div className='flex justify-around items-start gap-20'>
                {services.map((service, index) => (
                    <div key={index} className='w-[300px] flex flex-col justify-center items-center gap-2'>
                        {service.icon}
                        <h4 className=' text-xl font-semibold'>{service.title}</h4>
                        <p className=' text-sm text-slate-500'>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service