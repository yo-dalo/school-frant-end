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
            slug: "notice",
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
            slug: "course-offered",
            title: "Courses Offered",
            content: (
                <div className="space-y-6">
                    <p className="text-2xl font-semibold text-main text-center">
                        Our Courses and Programs
                    </p>

                    <p className="text-lg leading-relaxed text-main">
                        Yaduvanshi School offers a wide range of undergraduate and
                        postgraduate courses designed to provide comprehensive knowledge
                        and practical skills across multiple disciplines. Each program is
                        structured to ensure academic excellence, career readiness, and
                        holistic development.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-main">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="py-3 px-4 border-b border-gray-300 text-left">Course</th>
                                    <th className="py-3 px-4 border-b border-gray-300 text-left">Duration</th>
                                    <th className="py-3 px-4 border-b border-gray-300 text-left">Total Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">Bachelor of Arts (B.A.)</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Com</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Sc. Medical</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">80</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Sc. Non-Medical</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">80</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Sc Hons Physics</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Sc Hons Chemistry</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Sc Hons Maths</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">B.Sc Hons Zoology</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Sc Physics</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Sc Chemistry</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Sc Maths</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Sc Zoology</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">30</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Sc Botany</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">30</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Sc Geography</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">30</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.Com</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.A. English</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.A. Political Science</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b border-gray-300">M.A. Sanskrit</td>
                                    <td className="py-2 px-4 border-b border-gray-300">2 Year</td>
                                    <td className="py-2 px-4 border-b border-gray-300">40</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-lg leading-relaxed text-main">
                        Our diverse range of undergraduate and postgraduate courses ensures
                        that students can pursue their interests while gaining the skills
                        and knowledge needed for successful careers and future growth.
                    </p>
                </div>
            ),
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