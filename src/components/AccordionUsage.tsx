import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";


const AccordionUsage = () => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem className="border-2 border-[#b872ff] my-6 p-2 rounded-2xl shadow-xl" value="item-1">
                <AccordionTrigger className="w-[500px] text-[22px]">
                <Image 
                    src="/images/white-computer-screen.png"
                    width={70}
                    height={70}
                    alt="Collaboration tools"
                    />
                    Enhanced Collaboration tools
                    </AccordionTrigger>
                <AccordionContent className="max-w-[500px]">
                    IntelliOptima is set to launch collaborative tools aimed at fostering team democratization. These tools will encompass team and project management features tailored for a collaborative AI setting.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-2 border-[#b872ff] my-6 p-2 rounded-2xl shadow-xl" value="item-2">
                <AccordionTrigger className="w-[500px] text-[22px]">
                <Image 
                    src="/images/white-computer-screen.png"
                    width={70}
                    height={70}
                    alt="Collaboration tools"
                    />
                    Enhanced Collaboration tools
                    </AccordionTrigger>
                <AccordionContent className="max-w-[500px]">
                    IntelliOptima is set to launch collaborative tools aimed at fostering team democratization. These tools will encompass team and project management features tailored for a collaborative AI setting.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-2 border-[#b872ff] my-6 p-2 rounded-2xl shadow-xl" value="item-3">
                <AccordionTrigger className="w-[500px] text-[22px]">
                <Image 
                    src="/images/white-computer-screen.png"
                    width={70}
                    height={70}
                    alt="Collaboration tools"
                    />
                    Enhanced Collaboration tools
                    </AccordionTrigger>
                <AccordionContent className="max-w-[500px]">
                    IntelliOptima is set to launch collaborative tools aimed at fostering team democratization. These tools will encompass team and project management features tailored for a collaborative AI setting.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}
export default AccordionUsage;