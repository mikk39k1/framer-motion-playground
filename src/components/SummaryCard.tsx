"use client"

import Image from "next/image";


type SummaryCardProps = {
    cardProfileImg: string;
}

const SummaryCard = ({ cardProfileImg }: SummaryCardProps) => {
    return (
        <div className="flex flex-col justify-between w-[280px] h-[350px] border-2 border-neutral-300 rounded-2xl shadow-2xl p-4 bg-white z-10">

            <Image
                src={cardProfileImg}
                alt="profile"
                width={60}
                height={60}
            />

            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-6 mb-10">
                    <div className="h-[35px] w-[230px] bg-[#f0f0f0] rounded-lg" />
                    <div className="h-[35px] w-[200px] bg-[#f0f0f0] rounded-lg" />
                    <div className="flex justify-between">
                        <div className="h-[35px] w-[140px] bg-[#f0f0f0] rounded-lg" />
                        <div className="h-[40px] w-[40px] bg-[#f0f0f0] rounded-full mr-4" />
                    </div>
                </div>
            </div>
            
        </div>
    
    );
}

export default SummaryCard;