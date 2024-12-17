import Link from "next/link";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const FaMedium = () => <FontAwesomeIcon className="ml-3" icon={faMedium} />;

const Updates = () => {
    return (
        <div className="w-full bg-blue-50">
            <div className="w-full h-[10vh]" />
            <div className="flex lg:h-[130vh] flex-col gap-y-6 lg:flex-row p-10">

                <div className="flex flex-col lg:w-1/2 w-full items-center justify-center">
                    <AnimatedTitle
                        title="Latest <br /> Updates"
                        containerClass="!text-black" />
                    <div className="w-[300px] lg:w-[500px] mt-4 lg:mt-8">
                        <p className="text-black font-robert-medium text-lg text-start">
                            Stay updated with the latest news, events, and updates in our ecosystem. Be part of our universe's growth and evolution.
                        </p>
                    </div>
                    <Link href="https://medium.com/zentry">
                        <Button
                            title="Read All News"
                            containerClass="!bg-black !text-blue-50 font-bold mt-4 lg:mt-8"
                            rightIcon={<FaMedium />}
                        />
                    </Link>
                </div>

                <div className="lg:w-1/2 w-full items-center justify-center flex flex-col gap-y-6 lg:gap-y-8">
                    <Link href="https://medium.com/zentry/welcome-nexus-zentrys-social-gateway-3b7c67dda8f6">
                        <div className="flex flex-col gap-y-4 items-center lg:items-start justify-center">
                            <div>
                                <Image
                                    src="/img/gallery-2.webp"
                                    alt="welcome"
                                    width={1000}
                                    height={1000}
                                    className="lg:w-[600px] lg:h-[350px] h-[250px] scale-100 hover:scale-95 transition-transform duration-500 w-[300px] object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-row gap-x-12 w-[75%]">
                                <p className="font-general text-[12px] mt-1 text-start">09.05.2024</p>
                                <p className="font-general font-bold text-[18px] text-start">Welcome NEXUS: Zentry&apos;s Social Gateway</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="https://medium.com/zentry/introducing-zentry-the-gaming-superlayer-60ab6c9f8c90">
                        <div className="flex flex-col gap-y-4 items-center lg:items-start justify-center">
                            <div>
                                <Image
                                    src="/img/gallery-3.webp"
                                    alt="welcome"
                                    width={1000}
                                    height={1000}
                                    className="lg:w-[600px] lg:h-[350px] h-[250px] scale-100 hover:scale-95 transition-transform duration-500 w-[300px] object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-row gap-x-12 w-[80%]">
                                <p className="font-general text-[12px] mt-1 text-start">23.04.2024</p>
                                <p className="font-general font-bold text-[18px] text-start">Introducing Zentry: The Metagame Layer</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[10vh]" />
        </div>
    )
};

export default Updates;