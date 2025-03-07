import backgroundImage from "../assets/light-blue-abstract-luxury-gradient-background 1.webp";
import Wallet from "../assets/wallet.png";
import Burger from "../assets/burger.png";
import ArrowDocs from "../assets/arrow-read-docs.png";
import Hero from "../assets/hero.webp";
import HeroTablet from "../assets/sally-md.webp";
import HeroDesktop from "../assets/sally-lg.webp";
import { useEffect, useState } from "react";

const Home = ({
    setIsSidebarOpen,
    activeLink,
}: {
    setIsSidebarOpen: (v: boolean) => void;
    activeLink: string | null;
    setActiveLink: (id: string | null) => void;
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        });
    }, []);

    return (
        <div
            id="Home"
            className="w-full h-[1137px] md:h-[1269px] lg:h-[1269px] bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div
                className="absolute bottom-0 left-0 h-[564px] w-full"
                style={{
                    backgroundImage:
                        "linear-gradient(180deg, rgba(1, 2, 1, 0) 0%, #010201 100%)",
                }}
            ></div>
            {/* Header */}
            <div
                className={`${
                    scrollPosition > 50
                        ? "bg-black/50 backdrop-blur-sm"
                        : "bg-transparent"
                } min-w-[375px] flex items-center justify-between px-[16px] py-[9px] md:px-[40px] md:py-[26px] fixed top-0 w-full z-40`}
            >
                <div className="flex w-1/2 gap-2 min-h-[38px]">
                    {/* Burger Icon for Sidebar */}
                    <div
                        className="p-[6px] lg:hidden cursor-pointer"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <img
                            src={Burger}
                            className="w-[24px] h-[24px]"
                            alt="Menu"
                        />
                    </div>
                    <h1 className="font-manrope font-extrabold text-2xl w-[101px] h-[33px]">
                        AskSally
                    </h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex min-h-[48px] rounded-[70px] border bg-[#17171766] border-white/10 space-x-[24px] px-[32px] py-[13px]">
                    {[
                        "Home",
                        "About",
                        "Specialties",
                        "Experience",
                        "Roadmap",
                        "Docs",
                    ].map((link, index) => (
                        <a
                            key={index}
                            href={
                                link === "Docs"
                                    ? "https://sallya1c.gitbook.io/docs"
                                    : `#${link}`
                            }
                            className={`font-manrope font-semibold text-[16px] leading-[21.86px] hover:text-[#287CF1] hover:opacity-100 ${
                                activeLink === link ? "" : "opacity-[30%]"
                            }`}
                            target={link === "Docs" ? "_blank" : "_self"}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex w-1/2 justify-end gap-[10px] min-h-[38px]">
                    <a href="#Banner">
                        <img
                            src={Wallet}
                            className="w-[38px] h-[38px] hidden md:block"
                            alt="Wallet"
                        />
                    </a>
                    <a
                        href="https://creator.bid/agents/678648cdba2b8db95be3f5bb"
                        target="_blank"
                        className="min-w-[100px] h-[38px] rounded-md border-2 border-white/30 flex items-center justify-center bg-[#287CF1]"
                    >
                        <h1 className="font-manrope font-bold text-base text-white">
                            Buy $A1C
                        </h1>
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="min-h-[454px] container mx-auto w-full pt-[50px] px-[16px] grid grid-cols-1 gap-[32px] place-items-center"
            >
                <div className="flex flex-col items-center space-y-3 mt-14 md:mt-24">
                    <h1 className="font-manrope font-extrabold text-[34px] md:text-[72px] lg:text-[80px] md:leading-[72px] lg:leading-tight text-center leading-[44px] bg-gradient-to-r from-[#B5D4FF] to-[#FFFFFF] bg-clip-text text-transparent">
                        Smart Health <br /> Management in Your Pocket
                    </h1>
                    <p className="w-[343px] md:w-[754px] h-[104px] md:h-[50px] opacity-[70%] font-manrope font-normal text-[16px] md:text-[18px] lg:text-[20px] text-center leading-[26px] md:leading-[24.59px] lg:leading-[27.32px]">
                        Your health companion for personalized, evidence-based
                        insights on metabolic health and chronic disease
                        management, powered by AI and crypto.
                    </p>
                </div>
                <div className="w-full min-h-[124px] md:min-h-[56px] flex justify-center flex-col md:flex-row space-y-2.5 md:gap-[32px]">
                    <a
                        href="#Banner"
                        className="hover:cursor-pointer mt-3 md:w-[177px] md:h-[56px] font-manrope font-bold text-base leading-[22px] flex w-full min-h-[56px] rounded-[10px] border-2 border-black/30 py-[17px] px-[24px] md:px-[20px] items-center justify-center bg-white text-black"
                    >
                        Get Early Access
                    </a>
                    <a
                        href="https://sallya1c.gitbook.io/docs"
                        target="_blank"
                        className="space-x-2.5 border border-[#E5E5E5] md:h-[56px] flex w-full min-h-[56px] md:w-[164px] rounded-[10px] border-1 py-[16px] px-[24px] items-center justify-center md:px-[20px]"
                    >
                        <span className="font-manrope font-bold text-base leading-[22px]">
                            Read Docs
                        </span>
                        <img
                            src={ArrowDocs}
                            className="w-[24px] h-[24px]"
                            alt="Arrow"
                        />
                    </a>
                </div>
            </div>

            {/* Hero Image */}
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="absolute md:-bottom-20 left-0 -translate-x-0 mx-auto w-full flex justify-center"
            >
                <img
                    src={Hero}
                    width={375}
                    height={771}
                    className="md:hidden"
                    alt="Hero Mobile"
                />
                <img
                    src={HeroTablet}
                    width={771}
                    height={771}
                    className="hidden md:block lg:hidden"
                    alt="Hero Tablet"
                />
                <img
                    src={HeroDesktop}
                    width={771}
                    height={771}
                    className="hidden lg:block"
                    alt="Hero Desktop"
                />
            </div>
        </div>
    );
};

export default Home;
