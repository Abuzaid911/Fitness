import React from "react";
import TrainingCard1 from "../components/TrainingCard1";
import TrainingCard2 from "../components/TrainingCard2";
import ContactSection from "~/components/ContactSection";



export default function Sessions() {
    return (
        <div>

        <div className="bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <TrainingCard1 sessions="1 Session" price="500" duration="1 day" maxSessions={undefined}/>
                <TrainingCard2 sessions="6 Sessions" price="2,500" duration="Two weeks" maxSessions={undefined}/>
                <TrainingCard1 sessions="12 Sessions" price="4,500" duration="1 month" maxSessions={undefined}/>
                <TrainingCard2 sessions="18 Sessions" price="6,000" duration="2 month" maxSessions={undefined}/>
                <TrainingCard1 sessions="30 Sessions" price="8,800" duration="3 months" maxSessions={undefined}/>
                <TrainingCard2 sessions="60 Sessions" price="12,000" duration="6 month" maxSessions={undefined}/>
            </div>
            <div className="p-1 bg-black">
            <ContactSection />
            </div>
        </div>
        </div>

);
}