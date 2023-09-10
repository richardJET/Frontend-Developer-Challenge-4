import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import app from './firebase';
import { onValue, ref, getDatabase } from 'firebase/database';

export default function Dashboard() {
    Chart.register(ArcElement);
    const [projects, setProjects] = useState<any>(null);

    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, `/projects`);
        onValue(dbRef, res => {
            const projects = res.val();
            const projectList = [];
            for (let id in projects) {
                projectList.push({ id, ...projects[id] });
            }
            setProjects(projectList);   
        });
    }, []);


    const textCenterChallenges = {
        id: 'textCenterChallenges',
        beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const {ctx} = chart;
            ctx.save();
            ctx.font = '16px sans-serif';
            ctx.fillStyle = 'rgb(8, 113, 78)';
            ctx.textAlign = 'center';
            // Split the text into multiple lines
            const lines = ['7/20', 'Challenges'];

            // Calculate the total height of the text
            const lineHeight = 20;
            const totalHeight = lines.length * lineHeight;

            // Calculate the starting y coordinate to center the text vertically
            const startY = (chart.height - totalHeight / 2) / 2;

            // Loop through lines and draw them
            lines.forEach((line, index) => {
                ctx.fillText(line, chart.width / 2, startY + index * lineHeight);
            });
        }
    };

    const textCenterLabs = {
        id: 'textCenterLabs',
        beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const {ctx} = chart;
            ctx.save();
            ctx.font = '16px sans-serif';
            ctx.fillStyle = 'rgb(39, 118, 214)';
            ctx.textAlign = 'center';
            // Split the text into multiple lines
            const lines = ['0/3', 'Labs'];

            // Calculate the total height of the text
            const lineHeight = 20;
            const totalHeight = lines.length * lineHeight;

            // Calculate the starting y coordinate to center the text vertically
            const startY = (chart.height - totalHeight / 2) / 2;

            // Loop through lines and draw them
            lines.forEach((line, index) => {
                ctx.fillText(line, chart.width / 2, startY + index * lineHeight);
            });
        }
    };

    const textCenterResources = {
        id: 'textCenterResources',
        beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const {ctx} = chart;
            ctx.save();
            ctx.font = '16px sans-serif';
            ctx.fillStyle = 'rgb(158, 49, 225)';
            ctx.textAlign = 'center';
            // Split the text into multiple lines
            const lines = ['1/834', 'Resources'];

            // Calculate the total height of the text
            const lineHeight = 20;
            const totalHeight = lines.length * lineHeight;

            // Calculate the starting y coordinate to center the text vertically
            const startY = (chart.height - totalHeight / 2) / 2;

            // Loop through lines and draw them
            lines.forEach((line, index) => {
                ctx.fillText(line, chart.width / 2, startY + index * lineHeight);
            });
        }
    };


    const chartStyle: React.CSSProperties = {
        width: '160px',
        height: '160px',
    };

    const imgStyle: React.CSSProperties = {
        height: '35px',
    };

    return (
      <div>
        <div className="container-fluid my-2">
            <div>
                <p><b>Good evening, Richard. </b> <a href="https://preprlabs.org/profile/RichardTillo"> Complete profile </a></p>
            </div>
            <div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-xl-12 col-sm-12">
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-3">
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white d-flex justify-content-between border-0 flex-column flex-lg-row">
                                            <h3 className="card-title fw-bold">My Progress</h3>
                                            <ul className='nav nav-tabs' role='tablist'>
                                                <li className='nav-item' role='presentation'>
                                                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#challenges" type="button" role="tab" aria-controls='challenges' aria-selected="true" id="challenges-tab">Challenges</button>
                                                </li>
                                                <li className='nav-item' role='presentation'>
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#labs" type="button" role="tab" aria-controls='labs' aria-selected="true" id="labs-tab">Labs</button>
                                                </li>
                                                <li className='nav-item' role='presentation'>
                                                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#resources" type="button" role="tab" aria-controls='resources' aria-selected="true" id="resources-tab">Resources</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-content">
                                            <div className='tab-pane show active' id="challenges" aria-labelledby='challenges-tab'>
                                                <p>You joined Preprlabs on Aug 8, 2023, here is your Challenge journey.</p>
                                                <div className="d-flex align-items-center flex-column flex-xxl-row justify-content-around">
                                                    <div style={chartStyle} className='my-auto order-xxl-1 mb-2'>
                                                        <Doughnut data={{
                                                            labels: ['Submitted', 'Remaining'],
                                                            datasets: [{
                                                                label: 'Challenges',
                                                                data: [7, 13],
                                                                backgroundColor: [
                                                                    'rgb(8, 113, 78)',
                                                                    'rgb(243, 244, 248)',
                                                                ],
                                                                hoverOffset: 4,
                                                            }],
                                                            }} 
                                                            options={{
                                                                cutout: 50,
                                                            }}
                                                            plugins= { [textCenterChallenges]}
                                                            className='my-auto'
                                                        />
                                                    </div>
                                                    <ul className='list-unstyled my-auto pb-2'>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className='d-flex'>
                                                                <img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-1.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Projects Submitted:</p>
                                                            </div>
                                                            <p className='my-auto ms-5'>7</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-2.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Projects Created:</p>
                                                            </div>
                                                            <p className='my-auto ms-5'>7</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-3.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Invited:</p>
                                                            </div>
                                                            <p className='my-auto ms-5'>7</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/challenge-leaf-4.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Followed:</p>
                                                            </div>
                                                            <p className='my-auto ms-5'>0</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='tab-pane' id="labs" aria-labelledby='labs-tab'>
                                                <p>You joined Preprlabs on Aug 8, 2023, here is your Lab journey.</p>
                                                <div className="row d-flex justify-content-center flex-wrap">
                                                    <ul className='list-unstyled w-25 my-auto'>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className='d-flex'>
                                                                <img src="https://preprlabs.org/assets/images/dashboard/lab-leaf-1.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Completed:</p>
                                                            </div>
                                                            <p className='my-auto'>0</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/lab-leaf-2.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>In Progress:</p>
                                                            </div>
                                                            <p className='my-auto'>3</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/lab-leaf-3.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Not Started:</p>
                                                            </div>
                                                            <p className='my-auto'>0</p>
                                                        </li>
                                                    </ul>
                                                    <div style={chartStyle} className='my-auto'>
                                                        <Doughnut data={{
                                                            labels: ['Completed', 'Remaining'],
                                                            datasets: [{
                                                                label: 'Labs',
                                                                data: [0, 3],
                                                                backgroundColor: [
                                                                    'rgb(8, 113, 78)',
                                                                    'rgb(39, 118, 214)',
                                                                ],
                                                                hoverOffset: 4,
                                                            }],
                                                        }}
                                                            options={{
                                                                cutout: 50,
                                                            }}
                                                            plugins={[textCenterLabs]}
                                                            className='my-auto'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='tab-pane' id="resources" aria-labelledby='resources-tab'>
                                                <p>You joined Preprlabs on Aug 8, 2023, here is your Resource Module journey.</p>
                                                <div className="row d-flex justify-content-center flex-wrap">
                                                    <ul className='list-unstyled w-25 my-auto'>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className='d-flex'>
                                                                <img src="https://preprlabs.org/assets/images/dashboard/resource-leaf-1.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Completed:</p>
                                                            </div>
                                                            <p className='my-auto'>1</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/resource-leaf-2.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>In Progress:</p>
                                                            </div>
                                                            <p className='my-auto'>4</p>
                                                        </li>
                                                        <li className='d-flex mb-2 justify-content-between'>
                                                            <div className="d-flex">
                                                                <img src="https://preprlabs.org/assets/images/dashboard/resource-leaf-3.svg" alt="leaf logo" />
                                                                <p className='text-nowrap my-auto'>Not Started:</p>
                                                            </div>
                                                            <p className='my-auto'>830</p>
                                                        </li>
                                                    </ul>
                                                    <div style={chartStyle} className='my-auto'>
                                                        <Doughnut data={{
                                                            labels: ['Completed', 'Remaining'],
                                                            datasets: [{
                                                                label: 'Labs',
                                                                data: [1, 834],
                                                                backgroundColor: [
                                                                    'rgb(158, 49, 225)',
                                                                    'rgb(243, 244, 248)',
                                                                ],
                                                                hoverOffset: 4,
                                                            }],
                                                        }}
                                                            options={{
                                                                cutout: 50,
                                                            }}
                                                            plugins={[textCenterResources]}
                                                            className='my-auto'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-md-4 mb-3'>
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white border-0">
                                            <h3 className=" fw-bold">Continue Where You Left Off</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Start your PreprLabs journey now!</p>
                                            <div style={chartStyle} className='mx-auto'>
                                                <img className="w-100 ms-3" src="https://preprlabs.org/assets/images/dashboard/last-visited-icon.png" alt="last visited icon" />
                                            </div>
                                            <div className="text-center">
                                                <a href="https://preprlabs.org/explore">
                                                    <button className="btn btn-success text-white">Explore more</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-md-4 mb-3'>
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white border-0">
                                            <h3 className="card-title fw-bold">Upcoming Challenge Deadlines</h3>
                                        </div>
                                        <div className="card-body">
                                            <a className='d-flex text-decoration-none border-bottom text-black' href="https://preprlabs.org/challengeManager/fun-team-marketing-challenge-june-auguest-2023">
                                                <img src="https://preprlabs.org/assets/images/dashboard/calendar-normal.svg" className='me-xl-5' alt="calendar icon" />
                                                <div>
                                                    <p className="m-0">F.U.N -Team Marketing Challenge: June - August 2023</p>
                                                    <p className="text-muted mb-1">Due August 4 at 4:00PM</p>
                                                </div>
                                            </a>
                                            <a className='d-flex text-decoration-none border-bottom text-black' href="https://preprlabs.org/challengeManager/frontend-developer-challenge-1-web-page-creation">
                                                <img src="https://preprlabs.org/assets/images/dashboard/calendar-normal.svg" className='me-xl-5' alt="calendar icon"  />
                                                <div>
                                                    <p className='m-0'>Frontend Developer Challenge 1: Web Page Creation</p>
                                                    <p className="text-muted mb-1">Due August 16 at 2:08PM</p>
                                                </div>
                                            </a>
                                            <a className='d-flex text-decoration-none border-bottom text-black' href="https://preprlabs.org/challengeManager/frontend-developer-challenge-2-login-system">
                                                <img src="https://preprlabs.org/assets/images/dashboard/calendar-normal.svg" className='me-xl-5' alt="calendar icon"  />
                                                <div>
                                                    <p className='m-0'>Frontend Developer Challenge 2: Login System</p>
                                                    <p className="text-muted mb-1">Due August 31 at 3:35PM</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-sm-12">
                            <div className="row">
                                <div className="col-xl-8 col-md-8 mb-3">
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white d-flex justify-content-between border-0">
                                            <h3 className='card-title fw-bold me-2'>Leaderboard</h3>
                                            <a className="btn btn-success text-white" href="https://preprlabs.org/my-leader-board">
                                                View Leaderboard
                                            </a>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row table-responsive w-100 mx-auto">
                                                <table className="table mw-100">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">Learning Points</th>
                                                            <th scope="col">Learning Rank</th>
                                                            <th scope="col">Achievements</th>
                                                        </tr>
                                                        </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">111</th>
                                                            <td><img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/users/5MvaiLmgAVSbNucPSJFn8hGo6fPqQzWyjs2ripoo.jpg" className='rounded-circle' style={imgStyle} alt="profile icon" />Richard Tillo (You)</td>
                                                            <td>5890</td>
                                                            <td>10</td>
                                                            <td>11</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td><img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/default-user.png" className='rounded-circle' style={imgStyle} alt="profile icon" />Balogun Olaide</td>
                                                            <td>155206</td>
                                                            <td>153</td>
                                                            <td>8</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td><img src="https://prepr-preprlabs-prod-bucket.s3.ca-central-1.amazonaws.com/uploads/users/rvKhSZ1bzzSGA98YFctV4PhMp3jsVFrWdldhXuus.png" className='rounded-circle' style={imgStyle} alt="profile icon" />Mike Smith</td>
                                                            <td>57022</td>
                                                            <td>93</td>
                                                            <td>13</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                                <td><img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/default-user.png" className='rounded-circle' style={imgStyle} alt="profile icon" />Usheni Kiven</td>
                                                            <td>53877</td>
                                                            <td>90</td>
                                                            <td>7</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-md-4 mb-3'>
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white d-flex border-0">
                                                <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Achievements.svg" className="me-2" alt="achievement icon" />
                                            <h3 className="card-title fw-bold">Latest Achievements</h3>
                                        </div>
                                        <div className="card-body d-flex flex-column align-items-center">
                                            <img src="https://d3f06rtlkr354b.cloudfront.net/uploads/labs/eIM9Ga5pRfUUwoQzudo2EOYY4.png" style={chartStyle} alt="digital skills ready summer 2023"/>
                                            <h3>Digital Skills Ready</h3>
                                            <a href="https://tinyurl.com/2d6ukpn5" target="_blank" rel="noreferrer">
                                                <button className="btn btn-success text-white">
                                                    View Detail
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-12 col-sm-12'>
                            <div className="row">
                                <div className="col-xl-4 col-md-4 mb-3">
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white">
                                            <a className="text-decoration-none link-success d-flex" href="https://preprlabs.org/joinedLab"><img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Lab.svg" className='me-2' alt="lab icon" />
                                            <h4 className='m-0 fw-bold'>3 Labs</h4>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div  className='border-bottom'>
                                                <div className='d-flex justify-content-between'>
                                                    <a className="text-decoration-none" href="https://preprlabs.org/labs/web-developer-career-lab">
                                                        Web Developer Career Lab
                                                    </a>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUserFriends} /> 87
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <img src="https://d3f06rtlkr354b.cloudfront.net/uploads/labs/R0gpwVFsCiJdNMwLvsJRMFTwh.png" alt="Web Developer Career Lab" style={imgStyle} className='me-2'/>
                                                    <p className='text-muted'>Web Developer Career Lab ... </p>
                                                </div>
                                            </div>
                                            <div className='border-bottom'>
                                                <div className='d-flex justify-content-between'>
                                                    <a className="text-decoration-none" href="https://preprlabs.org/labs/career-planning-lab">
                                                        Career Plaanning Lab
                                                    </a>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUserFriends} /> 401
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <img src="https://d3f06rtlkr354b.cloudfront.net/uploads/labs/R0gpwVFsCiJdNMwLvsJRMFTwh.png" alt="Career Planning Lab" style={imgStyle} className='me-2'/>
                                                    <p className='text-muted'>Career Planning Lab ... </p>
                                                </div>
                                            </div>
                                            <div className='border-bottom'>
                                                <div className='d-flex justify-content-between'>
                                                    <a className="text-decoration-none" href="https://preprlabs.org/labs/fun-lab-august-september-2023">
                                                        FUN Lab: August - September 2023
                                                    </a>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUserFriends} /> 36
                                                    </div>
                                                </div>
                                                <div className='d-flex'>
                                                    <img src="https://d3f06rtlkr354b.cloudfront.net/uploads/labs/oL6XazGJjQuqdaO6lO1Oc4hU7.png" alt="FUN Lab: August - September 2023" style={imgStyle} className='me-2'/>
                                                    <p className='text-muted'> 
                                                        FUN Lab: August - September 2023
                                                        Welcome to the first summer 2022 cohort of the F.U.N. program! ...
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-md-4 mb-3'>
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white">
                                             <a className="text-decoration-none d-flex link-success" href="https://preprlabs.org/list/challenge"><img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Challenge.svg" className='me-2' alt="challenge icon"/>
                                            <h4 className='m-0 fw-bold'>3 Challenges</h4>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <div className='border-bottom'>
                                                <a className="text-decoration-none" href='https://preprlabs.org/challengeManager/fun-team-landing-page-challenge-august-september-2023'>F.U.N. - Team Landing Page Challenge: August - September 2023</a>
                                                <div className='d-flex'>
                                                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/no-img.jpg" alt="F.U.N. - Team Landing Page Challenge: August - September 2023" style={imgStyle}/>
                                                    <p> 
                                                        Your task as a team is to develop a landing page...
                                                    </p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCalendar} /> Sep 09,2023 
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUserFriends} /> 36
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border-bottom'>
                                                <a className="text-decoration-none" href='https://preprlabs.org/challengeManager/fun-team-marketing-challenge-august-september-2023'>F.U.N. - Team Marketing Challenge: August - September 2023</a>
                                                <div className='d-flex'>
                                                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/no-img.jpg" alt="F.U.N. - Team Marketing Challenge: August - September 2023" style={imgStyle}/>
                                                    <p> 
                                                        Your task as a team is to develop a marketing plan ...
                                                    </p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCalendar} /> Sep 09,2023 
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUserFriends} /> 36
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border-bottom'>
                                                <a className="text-decoration-none" href='https://preprlabs.org/challengeManager/prepr-fun-industry-future-challenge-to-support-business-august-september-2023'>F.U.N. - Industry Future Challenge to Support Business: August - September 2023</a>
                                                <div className='d-flex'>
                                                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/no-img.jpg" alt="F.U.N. - Team Marketing Challenge: August - September 2023" style={imgStyle}/>
                                                    <p> 
                                                        Your task as a team is to develop a marketing plan ...
                                                    </p>
                                                </div>
                                                <div className='d-flex justify-content-between'>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCalendar} /> Sep 09,2023 
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faUserFriends} /> 36
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className='col-xl-4 col-md-4 mb-3'>
                                    <div className="card h-100 p-2">
                                        <div className="card-header bg-white d-flex justify-content-between">
                                            <a className="text-decoration-none link-success d-flex" href="https://preprlabs.org/my-projects"><img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Project.svg" className='me-2' alt="project icon"/> 
                                            <h4 className='mb-0 me-1 fw-bold text-nowrap'>{projects? projects.length : null} Projects</h4>
                                            </a>
                                            <a className="btn btn-success text-white" href="/create-project/0">Create</a>
                                        </div>
                                        <div className="card-body">
                                            {projects ? projects.map((project: any) => {
                                                return (
                                                    <div className='border-bottom' key={project.id}>
                                                        <a className="text-decoration-none" href={`https://preprlabs.org/projects/${project.id}`}>{project.title}</a>
                                                        <div className='d-flex'>
                                                            <img src={project.banner} alt={project.name} style={imgStyle}/>
                                                            <p> 
                                                                {project.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            }):null}
                                        </div>                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
      </div>
    )
};