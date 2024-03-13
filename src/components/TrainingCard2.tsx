const title = "Personal Training";
const termsLink = "#";
const buttonText = "Join now";
const currency = "EGP"

export default function TrainingCard({ sessions, price, duration }) {
    return (
        <div className="max-w-xs mx-auto border shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6">
                <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 mb-4">{title}</h2>
                <p className="text-2xl text-gray-200 text-center mb-6 font-bold">{sessions}</p>
                <div className="flex items-baseline justify-center mb-6">
                    <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">{price}</span>
                    <span className="text-2xl text-gray-300 ml-3">{currency}</span>
                </div>
                <button className="block w-full py-3 rounded bg-white hover:bg-yellow-300 border-black text-black font-bold text-xl transition-colors duration-200 shadow-md hover:shadow-lg">
                    {buttonText}
                </button>
                <div className="mt-6 text-center">
                    <a href={termsLink} className="text-sm font-semibold text-gray-200 hover:text-gray-100 underline transition-colors duration-200">*Terms & Conditions</a>
                </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-white mt-6 rounded-b-lg">
                <span className="text-xs text-gray-800 italic">Offer ends soon!</span>
                <span className="text-xs text-yellow-500 font-bold">Limited spots!</span>
            </div>
        </div>

    );
}