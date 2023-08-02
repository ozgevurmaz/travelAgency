import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react'

const FaqItem = ({ question, answer }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div>
            <h5 className='text-xl' onClick={toggleAnswerVisibility}>
                <KeyboardArrowDownIcon className='text-red-500' />
                {question}
            </h5>
            {isAnswerVisible && <p>{answer}</p>}
        </div>
    );
};

function Information() {

    return (
        <div className="flex items-center justify-center">
            <div className='flex flex-col lg:flex-row w-10/12'>
                <div className='flex flex-col m-8 lg:w-5/12'>
                    <h3 className='text-4xl font-bold text-red-500 mb-5 text-center'>Important informations?</h3>
                    <div className='ml-2 lg:ml-10'>
                        <FaqItem
                            question="How many people can join the tours?"
                            answer="Yes. We welcome you from Izmir airport on time, and provide comfortable 
                        transportation service to your hotel or any route you will go."
                        />
                        <FaqItem
                            question="Do you make airport transfers?"
                            answer="There are no restrictions for participation in our tours. 
                        You can book now to have a wonderful trip with your family and friends."
                        />
                        <FaqItem
                            question="Can I make a hotel pickup tour?"
                            answer="Yes. We start out tour by picking you up from the destination.
                        You can reach us from your hotel and book tours. "
                        />
                        <FaqItem
                            question="Which Is The Most Popular Tour?"
                            answer="We can describe the most popular tours 
                        in London, Paris, Capadoccia, Barcelona, Rome, Bali." />
                    </div>
                </div>

                <div className='flex flex-col m-8 lg:w-5/12'>
                    <h3 className='text-4xl font-bold text-red-500 mb-5 text-center'>Curious?</h3>
                    <div className='ml-10'>
                        <FaqItem
                            question="How can I make a tour reservation?"
                            answer="You can easily book the tour you want from our website.
                        And if you wish, you can make a reservation for any tour from the Whatsapp line"
                        />
                        <FaqItem
                            question="Are your tours official and guided?"
                            answer="Yes. Our company is affiliated with the Ministry of Tourism of the Republic of Turkey and 
                        our professional tourist guide will serve you during the tour."
                        />
                        <FaqItem
                            question="Are Tour prices current?"
                            answer="All our tour prices are the current prices of the 2023 season.
                        We want to give you the best service at the most affordable price and get your satisfaction"
                        />
                        <FaqItem
                            question="Which regions do you have tours to?"
                            answer="We have tours to many destinations such as France, Italy, Turkey, Grecee, England etc.
                        Click on the link for all our tours."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information