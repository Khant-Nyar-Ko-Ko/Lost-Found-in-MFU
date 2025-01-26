import React from "react";

const Footer = () => {
    return (
        <footer className="text-white p-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 border-t border-slate-50 border-opacity-30">

            <div>
                <h3 className=" text-base md:text-lg font-semibold">Lost & Found MFU</h3>
                <p className="text-xs md:text-sm">Helping you find what you have lost, on campus!</p>
            </div>
            <div className="text-xs md:text-sm">
                <p>© 2025 Tech Guys All rights reserved.</p>
            </div>
            <div className=" text-center">
                <p className="text-xs md:text-xs">
                    Contact us: <a href="mailto:support@mfu.edu" className="text-white">6631503061@lamduan.mfu.ac.th</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
