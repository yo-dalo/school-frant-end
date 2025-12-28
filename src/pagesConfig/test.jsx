import Notic from "../pages/Notic";



const test = {
    slug: "notic",
    link: "link",
    title: "About Us",
    sub: [
        {
            slug: "about-school/:id",
            link: "link",
            title: "About Our School",
            content: <Notic />,
        },
        {
            slug: "our-mission",
            title: "Our Mission",
            content: "To empower students with knowledge, skills, and values that will enable them to become lifelong learners and responsible global citizens."
        },
        {
            slug: "our-vision",
            title: "Our Vision",
            content: "To be a center of excellence in education, fostering innovation, creativity, and character building for a better tomorrow."
        },
        {
            slug: "school-history",
            title: "Our History",
            content: "Founded in 1995, our school has a rich legacy of academic excellence and has grown from a small building to a premier educational institution."
        },
        {
            slug: "principal-message",
            title: "Principal's Message",
            content: "We believe in the power of education to transform lives. Our focus is on creating a safe and stimulating environment for every child."
        },
        {
            slug: "academic-excellence",
            title: "Academic Excellence",
            content: "With a rigorous curriculum and modern teaching methodologies, we consistently achieve top results in board examinations and competitions."
        },
        {
            slug: "infrastructure",
            title: "Infrastructure & Facilities",
            content: "Our campus features smart classrooms, high-tech science labs, a digital library, and a massive sports complex for holistic growth."
        },
        {
            slug: "faculty-staff",
            title: "Our Faculty",
            content: "We have a team of highly qualified and dedicated educators who are mentors and role models for our students."
        },
        {
            slug: "co-curricular",
            title: "Co-Curricular Activities",
            content: "From music and dance to robotics and debating, we provide diverse platforms for students to explore their hidden talents."
        },
        {
            slug: "sports-culture",
            title: "Sports & Physical Education",
            content: "Physical fitness is key. We offer professional coaching in football, cricket, swimming, and athletics to ensure healthy lifestyles."
        },
        {
            slug: "community-service",
            title: "Community Outreach",
            content: "We teach our students the value of giving back through regular social service camps, environmental drives, and charity events."
        }
    ]
}

export default test;