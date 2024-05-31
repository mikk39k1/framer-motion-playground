import Image from "next/image";

const MiddleSummaryCard = () => {
    return (
        <div className="flex flex-col justify-between w-[260px] h-[320px] border-4 bg-white border-[#8000ff] rounded-2xl shadow-2xl p-4 py-6">
            <div className="flex items-center justify-between mr-3">
                <div>
                    <div className="relative w-[50px] h-[50px] border-2 border-[#f0f0f0] rounded-2xl mt-2 ml-2 overflow-visible">
                        <Image
                            className="absolute left-2 -top-3"
                            src="/images/check-mark.png"
                            alt="check mark"
                            width={90}
                            height={90}
                        />
                    </div>

                    <div className="w-[50px] h-[50px] border-2 border-[#f0f0f0] rounded-2xl mt-6 ml-2" />
                </div>
                <div>
                    <Image
                        src="/images/bar-chart.png"
                        alt="bar chart"
                        width={120}
                        height={120}
                    />
                </div>

            </div>
            <div className="flex justify-between items-center mx-2 mt-4">
                <div className="h-[40px] w-[40px] bg-[#f0f0f0] rounded-full" />
                <div className="h-[35px] w-[150px] bg-[#f0f0f0] rounded-lg" />
            </div>
            <div className="w-full flex justify-center items-center">
                <button
                    style={{
                        background: 'linear-gradient(90deg, #9C39FF 0%, #9B36FF 61%, #8913FF 100%)'
                    }}
                    className="bg-[#8000ff] text-white text-xl w-3/4 font-semibold rounded-2xl py-3 mt-4">Read More</button>
            </div>

        </div>
    )
}

export default MiddleSummaryCard;