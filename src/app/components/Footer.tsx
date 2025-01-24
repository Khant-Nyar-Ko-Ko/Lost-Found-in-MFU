import React from "react";

const Footer = () => {
    return (
        <footer className="text-white p-4 flex justify-between items-center border-t border-slate-50 border-opacity-30">

            <div>
                <h3 className="text-lg font-semibold">Lost & Found MFU</h3>
                <p className="text-sm">Helping you find what you have lost, on campus!</p>
            </div>
            <div className="text-sm">
                <p>© 2025 Tech Guys All rights reserved.</p>
            </div>
            <div className=" text-center">
                <p className="text-xs">
                    Contact us: <a href="mailto:support@mfu.edu" className="text-white">6631503061@lamduan.mfu.ac.th</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
