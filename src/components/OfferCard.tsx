import React from "react";


export default function OfferCard({ title, imageUrl }) {
    return (
        <div
            className="relative h-64 rounded overflow-hidden shadow-lg bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                <h3 className="text-2xl font-bold text-yellow-400 text-center font-serif">{title}</h3>
            </div>
        </div>
    );
}