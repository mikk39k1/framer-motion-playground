"use client"

import Image from "next/image";


type SummaryCardProps = {
    cardProfileImg: string;
}

const SummaryCard = ({ cardProfileImg }: SummaryCardProps) => {
    return (
        <div className="flex flex-col justify-between w-[220px] h-[300px] border-2 border-neutral-300 rounded-2xl shadow-2xl p-4 bg-white">

            <Image
                src={cardProfileImg}
                alt="profile"
                width={50}
                height={50}
            />

            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-6 mb-10">
                    <div className="h-[35px] w-[180px] bg-[#f0f0f0] rounded-lg" />
                    <div className="h-[35px] w-[150px] bg-[#f0f0f0] rounded-lg" />
                    <div className="flex justify-between">
                        <div className="h-[35px] w-[120px] bg-[#f0f0f0] rounded-lg" />
                        <div className="h-[30px] w-[30px] bg-[#f0f0f0] rounded-full mr-4" />
                    </div>
                </div>
            </div>
            
        </div>
    
    );
}

export default SummaryCard;