import { useState, useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import Accessibility from "./Accessibility"

export default function Explore() {

    const challenges = useMemo(() =>  [
        {
            href: "https://preprlabs.org/challengeManager/challenge-3-presenting-complex-ideas-in-a-structured-manner",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/BB1AIcv16BrLabaD8WdnO5mT1.png",
            title: "Challenge 3: Presenting Complex Ideas in a Structured Manner",
            description: "The ability to present complex ideas in a structured manner is a skill that is highly sought after by employers. In this challenge, you will be tasked with presenting a complex idea in a structured manner. You will be given a topic and a set of resources to help you complete this challenge. You will be required to submit a presentation that is no longer than 5 minutes. You can use any presentation software of your choice. You will also be required to submit a reflection on your presentation.",
        },
        {
            href: "https://preprlabs.org/challengeManager/challenge-2-advanced-email-marketing-campaign",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/jJPTtzIzjrE7jf7tnZyRKK9ol.png",
            title: "Challenge 2: Advanced Email Marketing Campaign",
            description: "In this Challenge, the student will create an advanced email marketing campaign with a focus on segmentation, personalization, and automation.",
        },
        {
            href: "https://preprlabs.org/challengeManager/fun-industry-future-challenge-to-support-business-june-august-2023",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/fKDOMgdft4VvsK0HCM1zUPRNR.png",
            title: "F.U.N. - Industry Future Challenge to Support Business: June - August 2023",
            description: "How might we better support businesses around us? Businesses around the world have had to adapt over the last 2 years as the nature of sales has diversified and changed, and will need to continue to evolve to meet the realities of a post-pandemic world.",
        },
        {
            href: "https://preprlabs.org/challengeManager/devops-lifecycle-for-challenges",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/GVBCh2RC4kYIs7vqoEA6pdpIo.png",
            title: "Devops Lifecycle for Challenges",
            description: "Continuous Development This phase involves the planning and coding of the software. The vision of the project is decided during the planning phase. And the developers begin developing the code for the application.",
        },
        {
            href: "https://preprlabs.org/challengeManager/ansible-working",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/QbsuXRtr4f3iU9wiTv1kFHwOZ.jpg",
            title: "Ansible Working",
            description: "As organizations grow and expand geographi cally, they start extending their IT infrastructure into the distributed and far edge layers through opening new branch offices.",
        }
    ],[])

    const labs = useMemo(()=> [
        {
            href: "https://preprlabs.org/labs/setting-up-jira-workflow-for-high-performing-teams",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/r0j1SDa6Dvyll4EJvQpo10LlQ.png",
            title: "Challenge 3: Presenting Complex Ideas in a Structured Manner",
            description: "This Lab will give an idea of setting up a workflow with checklist transitions, conditions and triggers.",
        },
        {
            href: "https://preprlabs.org/labs/health-conscious",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/cSNWSXT63JdHPjdEyAlaFcRqp.jpg",
            title: "Health Conscious",
            description: "In this created all health realted challenges that will improve your stamina and made you fit.",
        },
        {
            href: "https://preprlabs.org/labs/scss-syntactically-awesome-style-sheets",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/uBA1UPPly8xaPAPIh0RnZOlrj.png",
            title: "SCSS : Syntactically Awesome Style Sheets",
            description: "In this lab, we can learn SCSS. The term SCSS is an acronym for Sassy Cascading Style Sheets. It is basically more advanced and evolved variant of the CSS language.",
        },
        {
            href: "https://preprlabs.org/labs/getting-started-lab-for-employment-service-providers-esp",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/GU4ZjyHg7uFtLdcW4A44qcQtj.png",
            title: "Getting Started Lab for Employment Service Providers (ESP)",
            description: "If you're here then you're a passionate employment service provider who’s constantly looking for new tools and concepts. We've prepared a series of Challenges just for you!",
        },
        {
            href: "https://preprlabs.org/labs/canada-digital-adoption-program-cdap-youth-magnet-machine-learning-engineer-career-lab",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/hZ6eUZAyS1P8ud1pgUacUM8Oq.jpg",
            title: "Youth Boost - Machine Learning Engineer Career Lab",
            description: "Machine Learning Engineer Career Lab",
        },
    ],[])

    const projects = useMemo(() => [
        {
            href: "https://preprlabs.org/projects/vanessa-mccarthy-lab-programs-and-challenge-paths",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/projects/id-9910/Vanessa%20Mccarthy%20(1).png",
            title: "Vanessa McCarthy - Lab Programs and Challenge Paths",
            description: "By completing all of the Labs in a program, a user earns a microcredential in order to demonstrate their achievement.",
        },
        {
            href: "https://preprlabs.org/projects/social-media-strategy-challenge",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/projects/id-9824/alpineInstagram.jpg",
            title: "Social Media Strategy Challenge",
            description: "Setting up a social media account for an outdoor equipment business!",
        },
        {
            href: "https://preprlabs.org/projects/ux-designer-challenge-3-wireframing",
            src: "https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/projects/id-9745/MyCondo-Wireframes-Banner.png",
            title: "UX Designer Challenge 3: Wireframing",
            description: "High-Fidelity Wireframes for MyCondo App",
        }
    ],[])

    const [listItems, setListItems] = useState(challenges);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id === "labs") {
            setListItems(labs)
        } else if (id === "projects") {   
            setListItems(projects)
        } else {
            setListItems(challenges)
        }
        
    }, [id, challenges, labs, projects]);

    const maxWidth: React.CSSProperties = {
        maxWidth: '1440px',
    };
    
    return (
        <>
            <Accessibility />
            <div className="card mx-auto mt-2" style={maxWidth}>
                <div className="card-body">
                    <div className="row">
                        <div className="jumbotron container bg-success text-white p-5 text-center m-0 w-100">
                            <h2>Welcome, <b>Richard Tillo</b></h2>
                        </div>
                    </div>

                    {id ? null :
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0">
                                <div className="card-block">
                                    <h3 className="card-title text-center">Recommended Challenges</h3>
                                    <div>
                                        <a href="https://preprlabs.org/challengeManager/future-of-technology-and-artificial-intelligence" className="text-decoration-none link-success">
                                            <div>
                                                    <img className="card-img-top" src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/xioCw8Gfl48spPPubzwfAc5J0wYm3wrnj3nTiVLj.png" alt="Future of Technology and Artificial Intelligence banner" />
                                            </div>
                                            <h5>Future of Technology and Artificial Intelligence</h5>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://preprlabs.org/challengeManager/magnet-machine-learning-1-sql" className="text-decoration-none link-success">
                                            <div>
                                                <img className="card-img-top" src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/challenge/SePyyhZftJxJaXQtZV7nvKxA4.png" alt="Machine Learning Engineer: SQL CHallenge banner" />
                                            </div>
                                            <h5>Magnet - Machine Learning 1: SQL</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0">
                                <div className="card-block">
                                    <h3 className="card-title text-center">Recommended Labs</h3>
                                    <div>
                                        <a href="https://preprlabs.org/labs/getting-started-lab-for-business-chambers-7137-22360" className="text-decoration-none link-success">
                                            <div>
                                                <img className="card-img-top" src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/rkVCArtK8UyOSo4HLH6QtzZbd.png" alt="Getting Started Business Chambers banner" />
                                            </div>
                                            <h5>Getting Started Lab For Business Chamber.</h5>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://preprlabs.org/labs/ux-feedback-lab" className="text-decoration-none link-success">
                                            <div>
                                                <img className="card-img-top" src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/labs/XQCvHLwke2XeHj34yugFinwYl.png" alt="UX Feedback Lab banner" />
                                            </div>
                                            <h5>UX Feedback Lab</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0">
                                <div className="card-block">
                                    <h3 className="card-title text-center">Recommended Resources</h3>
                                    <div>
                                        <a href="https://preprlabs.org/resource-module/digital-skills-passport-summary/view" className="text-decoration-none link-success">
                                            <div>
                                                <img className="card-img-top" src="https://d3f06rtlkr354b.cloudfront.net/uploads/resources/image/yoAtcQVNr3og2nwluvrOKl4OvTFbKLKrNGePUgTV.png" alt="Skills for Success: Digital Skills & Passport Summary banner" />
                                            </div>
                                            <h5>Digital Skills Passport Summary</h5>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://preprlabs.org/resource-module/graphic-design-typography/view" className="text-decoration-none link-success">
                                            <div>
                                                <img className="card-img-top" src="https://d3f06rtlkr354b.cloudfront.net/uploads/resources/image/ydlBeJgrpDGqEKA1RB1JFbRQEUcGsi0lg0ByjQAv.jpg" alt="Typography banner" />
                                            </div>
                                            <h5> Graphic Design: Typography </h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            Explore
                        </div>
                        <div className="col">
                            <div className="float-start float-md-end">
                                <div className="btn-group">
                                    <a className={`btn border ${id ? null : "link-success bg-info"}`} href="/">Challenges</a>
                                    <a className={`btn border ${id === "labs" ? "link-success bg-info" : null }`} href="/labs">Labs</a>
                                    <a className={`btn border ${id === "projects" ? "link-success bg-info" : null}`} href="/projects">Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {listItems.map( item => (
                        <div className="row border-bottom border-secondary py-4" key={item.href}>
                            <div className="col-sm-5">
                                <a href={item.href}>
                                    <img src={item.src} className="img-responsive mw-100" alt={`banner for ${item.title}`} />
                                </a>
                            </div>
                            <div className="col-sm-7">
                                <a href={item.href} className="text-decoration-none link-success">
                                    <h4>{item.title}</h4>
                                </a>
                                <div className="text-secondary mb-3">
                                    {id === "labs" ? "Labs" : id === "projects" ? "Projects" : "Challenges"}
                                </div>
                                <p className="mb-3 mb-lg-5">{item.description}</p>
                                <div className="text-end">
                                    <a href={item.href} className="text-decoration-none link-success">View</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
