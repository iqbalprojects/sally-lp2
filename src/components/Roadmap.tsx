import Divider from "../assets/divider.png";

const Roadmap = () => {
    return (
        <div
            id="Roadmap"
            className="w-full min-h-[1091px] md:min-h-[1193px] md:px-[40px] py-[120px] px-[16px] bg-color-[#1A1A1A]"
        >
            <div className="w-full min-h-[851px] space-y-[124px] flex flex-col">
                <div className="w-full space-y-[12px] flex flex-col justify-center">
                    <span className="font-manrope font-bold text-[24px] leading-[32.78px] text-[#287CF1] text-center">
                        ROADMAP
                    </span>
                    <h1 className="font-bold font-manrope text-[34px] md:text-[56px] md:leading-[76.5px] leading-[46.44px] text-center bg-gradient-to-r to-[#287CF1]  from-[#FFFFFF] bg-clip-text text-transparent">
                        The Journey of AskSally
                    </h1>
                    <p className="font-manrope font-normal md:text-[24px] md:leading-[32.78px] text-[20px] leading-[27.32px] opacity-[72%] text-center">
                        Explore the journey we're taking to bring personalized,
                        evidence-based health advice to your fingertips.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 space-y-[40px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[20px] md:pr-[20px]">
                    {/* First card - left side */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="flex justify-end lg:mr-[15px]"
                    >
                        <div className="bg-[#30303080] border-white/10 w-full h-[238px] p-[20px] rounded-[12px] border flex flex-col space-y-[12px]  lg:w-[516px] lg:min-h-[288px]">
                            <h3 className="font-manrope font-bold text-[20px] leading-[27.32px] text-[#287CF1]">
                                February 2025
                            </h3>
                            <h3 className="font-manrope font-extrabold text-[20px] leading-[27.32px] bg-gradient-to-r from-[#287CF1] via-white to-[#FFFFFF] bg-clip-text text-transparent">
                                Community launch
                            </h3>
                            <ol className="list-disc pl-5">
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    Bonding curve less than a day
                                </li>
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    ⁠Vast number of wallets interacted with A1C
                                </li>
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    Honorable mentions from several crypto media
                                    outlet
                                </li>
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    Having mindshare on{" "}
                                    <a
                                        href="cookie.fun"
                                        target="_blank"
                                        className="underline hover:text-blue-500"
                                    >
                                        cookie.fun
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Second card - right side */}
                    <div className="hidden md:block"></div>

                    <div className="hidden md:block"></div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="flex justify-start  md:ml-[15px]"
                    >
                        <div className="bg-[#30303080] border-white/10 w-full h-[238px] p-[20px] rounded-[12px] border flex flex-col space-y-[12px] md:col-start-2 md:row-start-2 md:ml-[20px] lg:w-[516px] lg:min-h-[288px]">
                            <h3 className="font-manrope font-bold text-[20px] leading-[27.32px] text-[#287CF1]">
                                March 2025
                            </h3>
                            <h3 className="font-manrope font-extrabold text-[20px] leading-[27.32px] bg-gradient-to-r from-[#287CF1] via-white to-[#FFFFFF] bg-clip-text text-transparent">
                                ⁠Web terminal development
                            </h3>
                            <ol className="list-disc pl-5">
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    Mobile app terminal development
                                </li>
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    Expansion of Sally Memory
                                </li>
                                <li className="font-manrope font-normal text-[14px] leading-[20px] opacity-[70%]">
                                    ⁠Enhancing Sally capabilities to read
                                    medical report (OCR)
                                </li>
                            </ol>
                        </div>
                    </div>

                    {/* Center divider - positioned in the middle of the grid */}
                    <div className="hidden md:absolute left-1/2 top-0 bottom-0 -translate-x-1/2 md:flex justify-center items-center h-full pointer-events-none">
                        <img
                            src={Divider}
                            alt="Divider"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
