import React from "react";

const institutions = [
    {
        name: "Yaduvanshi College of Engineering & Technology (B.Tech., M.Tech.)",
        location: "Narnaul",
        email: "ycetnnl@gmail.com",
        phone: "+91 9729429766",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/01.jpg",
        link: "https://ycetnnl.yaduvanshigroup.edu.in/",
        category: "technical",
    },
    {
        name: "Yaduvanshi College of Engineering & Technology (B.Tech)",
        location: "Sohali",
        email: "ycetsohali@gmail.com",
        phone: "+91 9728396599",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/02.jpg",
        link: "https://ycetsohali.yaduvanshigroup.edu.in/",
        category: "technical",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Mahendergarh",
        email: "ysnmg1995@gmail.com",
        phone: "+91 9466341799",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/03.jpg",
        link: "https://ysnmgh.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Rewari",
        email: "ysnrew@gmail.com",
        phone: "+91 8901167461",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/04.jpg",
        link: "https://ysnrewari.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Narnaul",
        email: "ysnnnl@gmail.com",
        phone: "+91 9468061387",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/05.jpg",
        link: "https://ysnnnl.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Nangal Chaudhary",
        email: "ysntws@gmail.com",
        phone: "+91 9050784050",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/06.jpg",
        link: "https://ysnnch.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "MLD Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Sohali (Raj.)",
        email: "myyaduvanshi8@gmail.com",
        phone: "+91 9991217659",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/07.jpg",
        link: "https://ysnsohali.yaduvanshigroup.edu.in",
        category: "school",
    },
    {
        name: "Yaduvanshi College of Education (B.Ed.)",
        location: "Narnaul",
        email: "ycenarnaul@gmail.com",
        phone: "+91 8222852523",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/08.jpg",
        link: "https://ycennl.yaduvanshigroup.edu.in/",
        category: "educational",
    },
    {
        name: "Yaduvanshi College of Education (B.Ed., M.Ed.)",
        location: "Mahendergarh",
        email: "yaduvanshigroups@rediffmail.com",
        phone: "+91 7056720275",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/09.jpg",
        link: "https://ycemgh.yaduvanshigroup.edu.in/",
        category: "educational",
    },
    {
        name: "Yaduvanshi College of Education (B.Ed.)",
        location: "Sohali",
        email: "ycesohali@gmail.com",
        phone: "+91 8003221699",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/10.jpg",
        link: "https://ycesohali.yaduvanshigroup.edu.in/",
        category: "educational",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Satnali",
        email: "ysnsatnali@gmail.com",
        phone: "+91 9812330666",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/11.jpg",
        link: "https://ysnsatnali.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Jind",
        email: "ysnjind@gmail.com",
        phone: "9053905361-63",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/12.jpg",
        link: "https://ysnjind.yaduvanshigroup.edu.in",
        category: "school",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Sec. 82 Gurugram",
        email: "ysnggm82@gmail.com",
        phone: "+91 9911998595",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/13.jpg",
        link: "https://ysngurugramsec82.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "Yaduvanshi Shiksha Niketan (Sr. Sec. School)",
        location: "Kosli",
        email: "Yaduvanshikosli@gmail.com",
        phone: "+91 9053002458",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/14.jpg",
        link: "https://ysnkosli.yaduvanshigroup.edu.in/",
        category: "school",
    },
    {
        name: "Yaduvanshi Polytechnic",
        location: "Sohali",
        email: "ycetsohali@gmail.com",
        phone: "+91 9728396599",
        image: "https://yaduvanshigroup.edu.in/assets/img/school/15.jpg",
        link: "https://ypsohali.yaduvanshigroup.edu.in/",
        category: "technical",
    },
    {
        name: "Yaduvanshi Pvt. ITI",
        location: "Sohali",
        email: "itisohali@gmail.com",
        phone: "+91 9728396599",
        image: "https://yaduvanshigroup.edu.in/assets/img/College/16.jpg",
        link: "https://yitisohali.yaduvanshigroup.edu.in/",
        category: "technical",
    }

];

const Branch = () => {
    return (
        <section className="w-full py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Our Institutions</h2>
                </div>

                <div className="flex justify-center gap-4 mb-10 flex-wrap">
                    <button className="px-4 py-2 bg-gray-200">All</button>
                    <button className="px-4 py-2 bg-gray-200">Colleges</button>
                    <button className="px-4 py-2 bg-gray-200">Technical Institutes</button>
                    <button className="px-4 py-2 bg-gray-200">Educational Institutes</button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {institutions.map((item, index) => (
                        <div key={index} className="bg-white shadow border overflow-hidden">
                            <a href={item.link} target="_blank" rel="noreferrer">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-52 object-cover"
                                />

                                <div className="p-4 space-y-2 text-sm">
                                    <p className="font-semibold text-gray-900">{item.name}</p>

                                    <p className="text-gray-600">
                                        📍 {item.location}
                                    </p>

                                    <p className="text-gray-600">
                                        ✉ {item.email}
                                    </p>

                                    <p className="text-gray-600">
                                        📞 {item.phone}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Branch;