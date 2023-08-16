import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  faUserPlus } from '@fortawesome/free-solid-svg-icons';

interface SideMenuProps {
    toggleSideMenu: boolean;
    toggleDarkMode: boolean;
}

export default function SideMenu({ toggleSideMenu, toggleDarkMode }: SideMenuProps) {

    const menuStyle: React.CSSProperties = {
        maxWidth: '220px',
        height: 'calc(100vh - 52.5px)',
    };

    return (
        toggleSideMenu ?
        <aside id="slide-out" className={`position-fixed z-3 left-0 overflow-auto ${toggleDarkMode ? "bg-dark-subtle" : "bg-white"} shadow-sm`} style={menuStyle}>
            <div className="p-4">
                <a href=" https://preprlabs.org/profile/RichardTillo">
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/default-user.png" alt="profile" className="img-fluid" />
                </a>
            </div>
            <a href="https://preprlabs.org/profile/RichardTillo" className="text-decoration-none">
                <p className="text-center text-success">Richard Tillo</p>
            </a>
            <ul className="list-unstyled">
                <li className={`${toggleDarkMode ? "bg-black" : "bg-info"} p-2 `}>Browse</li>
                <li className="p-2">
                    <a href="https://preprlabs.org/explore" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/explore.png" alt="explore icon" className="me-4"/>Explore
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/joinedLab" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/labs.png" alt="labs icon" className="me-4" />Labs
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/list/challenge" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/challenges_icn.png" alt="challenges icon" className="me-4" />Challenges
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/organisation-details" className="text-secondary text-decoration-none">
                            <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/organisation.png" alt="organisation icon" className="me-4" />Organisation
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/userSkills/RichardTillo" className="text-secondary text-decoration-none ms-5">
                        Skills
                        <span className="border border-success ms-2 p-1">Beta</span>
                    </a>
                </li>
                <li className={`${toggleDarkMode ? "bg-black text-light" : "bg-info"} p-2`}>My Activity</li>
                <li className="p-2">
                    <a href="https://preprlabs.org/my-projects" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/my_projects.png" alt="project icon" className="me-4" />Projects
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/my-project-assessments" className="text-secondary text-decoration-none d-flex">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/my_projects.png" alt="project assessment icon" className="me-4 object-fit-contain" />
                        <p className="m-0">My Project Assessments</p>
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/my-leader-board" className="text-secondary text-decoration-none">
                            {toggleDarkMode ? <FontAwesomeIcon icon={faStar} size="lg" className="me-4" /> :
                        <img src="https://preprlabs.org/front/img/leaderboard.png" alt="leaderboard icon" className="me-4" />}My Leaderboard
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/team-matching" className="text-secondary text-decoration-none">
                        {toggleDarkMode ? <FontAwesomeIcon icon={faUserPlus} size="lg" className="me-4" /> :
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/c_organisation.png" alt="team icon" className="me-4" />}Team Matching
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/achievements" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/achievements_icn.png" alt="achievements icon" className="me-4" />Achievements
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/resource" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/nav_resources.png" alt="resources icon" className="me-4" />Resources
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://preprlabs.org/userlab" className="text-secondary text-decoration-none">
                        <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/labs.png" alt="lab management icon" className="me-4" />Lab Management
                    </a>
                </li>
                <li className="p-2">
                    <a href="https://intercom.help/preprme/en/" className="text-secondary text-decoration-none ms-5">
                        Help Center
                    </a>
                </li>
                <li className="p-2"><a href="/#" className="text-secondary text-decoration-none ms-5">v22.0.0</a></li>
            </ul>
        </aside>
        : null
    );
}





