// my edit

export default function AboutSection() {
    const workoutImageUrl = 'https://www.insportline.cz/upload/image/category/Kategorie_Fitness_03.jpg';
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-black text-white p-10 flex flex-col justify-center">
                <h2 className="text-4xl font-serif font-bold mb-4 text-yellow-400">
                    ABOUT OUR FIT FAMILY
                </h2>
                <p className="mb-6">
                    Astraeus was founded in 2001 by a husband and wife team, Bobby and Dora Graff. Since then, we have expanded to over 115 locations nationwide!
                </p>
                <a href="#" className="text-yellow-400 font-bold py-2">
                    Learn More
                </a>
            </div>
            <div className="md:w-1/2">
                <img src={workoutImageUrl} alt="Workout" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}