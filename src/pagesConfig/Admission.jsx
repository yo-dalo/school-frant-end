import { NoticeDetail } from "../pages/NoticeDetail";
import { NoticeList } from "../pages/NoticeList";
import StudentAdmissionForm from "../pages/StudentAdmissionForm"


const Admission = {
    slug: "Admission",
    title: "Admission",
    sub: [

        {
            slug: "admission-Form",
            title: "Admission Form",
            content: <StudentAdmissionForm />
        },
        {
            slug: "notic",
            title: "Admission Process",
            content: <NoticeList />
        },
        {
            slug: false,
            title: "Admission Process",
            link: "notice/:id",
            content: <NoticeDetail />
        },
        {
            slug: "admission-process",
            title: "Admission Process",
            content: `The admission process at YDC is designed to be transparent, efficient, and student-friendly. It begins with the submission of a completed application form, followed by an evaluation of academic records...`
        },
        {
            slug: "eligibility-criteria",
            title: "Eligibility Criteria",
            content: "We welcome students from all backgrounds. Eligibility is based on the age of the child as per government norms and the successful completion of the previous grade."
        },
        {
            slug: "how-to-apply",
            title: "How to Apply",
            content: "Parents can apply online through our official website portal or visit the school campus to collect the admission prospectus and application form."
        },
        {
            slug: "entrance-assessment",
            title: "Entrance Assessment",
            content: "To understand a student's current level, we conduct a friendly aptitude test in core subjects like English, Mathematics, and Science for higher grades."
        },
        {
            slug: "required-documents",
            title: "Documents Required",
            content: "Key documents include the Birth Certificate, previous school's Transfer Certificate (TC), latest Report Card, and Aadhaar Card of the student and parents."
        },
        {
            slug: "interaction-session",
            title: "Parent-Principal Interaction",
            content: "We believe in a shared vision. A brief interaction session is held with parents to discuss the school's philosophy and the child’s specific needs."
        },
        {
            slug: "fee-structure",
            title: "Fee Structure & Transparency",
            content: "Our fee structure is competitive and transparent, with no hidden costs. Detailed information is provided at the time of admission or upon request."
        },
        {
            slug: "scholarships",
            title: "Scholarship Programs",
            content: "YDC offers merit-based and need-based scholarships to support talented students and ensure that quality education is accessible to everyone."
        },
        {
            slug: "campus-tours",
            title: "School Tours & Open Days",
            content: "We encourage parents to visit our campus, see our state-of-the-art facilities, and interact with our staff before making a final decision."
        },
        {
            slug: "admission-timeline",
            title: "Admission Timeline",
            content: "Admissions usually open in December for the upcoming academic session. We recommend early registration to secure a seat as seats are limited."
        }
    ]
}
export default Admission;