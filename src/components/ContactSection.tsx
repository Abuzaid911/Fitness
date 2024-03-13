import React from "react";

export default function ContactSection() {
    return (
        <div className="bg-black text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <div className=" p-16 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mailing Address */}
                        <div>
                            <h3 className="font-semibold mb-4 text-white text-2xl">MAILING ADDRESS</h3>
                            <p className="font-thin text-yellow-400">13 almosekar ali ismael</p>
                        </div>

                        {/* Email Address */}
                        <div>
                            <h3 className="font-semibold mb-4 text-white text-2xl">EMAIL ADDRESS</h3>
                            <p className="font-thin text-yellow-400">Sabobee911@gmail.com</p>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <h3 className="font-semibold mb-4 text-white text-2xl">PHONE NUMBER</h3>
                            <p className="font-thin text-yellow-400">+201019118987</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};