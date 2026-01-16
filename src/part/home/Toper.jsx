import React from "react";

const Toper = [
    { position: 1, name: "Aarav Sharma", father: "Rajesh Sharma", image: "https://i.pravatar.cc/300?img=1" },
    { position: 2, name: "Vihaan Patel", father: "Amit Patel", image: "img/image/a18.jpg" },
    { position: 3, name: "Arjun Singh", father: "Vikram Singh", image: "img/image/a18.jpg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/a18.jpg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/student/s2.jpeg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/a18.jpg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/a18.jpg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/student/s3.jpeg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/a18.jpg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/a16.jpg" },
    { position: 4, name: "Ishaan Kumar", father: "Suresh Kumar", image: "img/image/student/s1.jpeg" },
    { position: 5, name: "Rohan Gupta", father: "Anil Gupta", image: "img/image/a18.jpg" },
];

const colorMap = {
    1: "bg-main",
};

const ToperPage = () => {
    return (
        <div className="p-6 bg-main phone:min-h-fit min-h-screen">
            <div className="center  px-8 py-9 gap-10">
                <hr className='w-full' />
                <div className="whitespace-nowrap text-mainOne text-5xl">Toppers</div>
                <hr className='w-full' />

            </div>

            <div className="flex flex-row  flex-wrap phone:flex-nowrap phone:overflow-scroll  items-center justify-center gap-6">
                {Toper.map((s,i) => (
                    <div
                        key={i}
                        className={`flex-shrink-0 relative overflow-hidden ${colorMap[s.position] || "bg-main"
                            } rounded-sm max-w-xs  group`}
                    >
                        <svg
                            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform duration-300"
                            viewBox="0 0 375 283"
                            fill="none"
                            style={{ opacity: 0.1 }}
                        >
                            <rect
                                x="159.52"
                                y="175"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 159.52 175)"
                                fill="white"
                            />
                            <rect
                                y="107.48"
                                width="152"
                                height="152"
                                rx="8"
                                transform="rotate(-45 0 107.48)"
                                fill="white"
                            />
                        </svg>

                        <div className="relative pt-0 px-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div
                                className="absolute bg-slate-900 w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                                style={{
                                    background: "radial-gradient(black, transparent 60%)",
                                    transform: "rotate3d(0,0,1,20deg) scale3d(1,0.6,1)",
                                    opacity: 0.25,
                                }}
                            />
                            <img
                                className="relative w-full h-40 object-contain  border-white"
                                src={s.image}
                                alt={s.name}
                            />
                        </div>

                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-80 -mb-1 text-sm">
                                Rank {s.position}
                            </span>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="block font-semibold text-lg">{s.name}</span>
                                    <span className="block text-xs opacity-80">
                                        Father: {s.father}
                                    </span>
                                </div>
                                <span className="block none bg-white rounded-full text-slate-800 text-xs font-bold px-3 py-2 leading-none">
                                    TOP {s.position}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToperPage;
