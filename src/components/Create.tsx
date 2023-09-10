import { useState, ChangeEvent } from 'react';
import app from './firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [title, setTitle] = useState('');
    const [description, setDescription ] = useState('');
    const [slug, setSlug] = useState('');
    const [viewShare, setViewShare] = useState(false);
    const [downloadShare, setDownloadShare] = useState(false);
    const [activeChallenge, setActiveChallenge] = useState('select-challenge');
    const [associatedLab, setAssociatedLab] = useState('select-lab');
    const [recruiting, setRecruiting] = useState(false);
    const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
    const [banner, setBanner] = useState('https://d3f06rtlkr354b.cloudfront.net/public/front/img/no-img.jpg');

    const navigate = useNavigate();

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const db = getDatabase(app);
        const userRef = ref(db, `/projects/${slug}`);
        const newProject = {
            title: title,
            description: description,
            viewShare: viewShare,
            downloadShare: downloadShare,
            activeChallenge: activeChallenge,
            associatedLab: associatedLab,
            recruiting: recruiting,
            requiredSkills: requiredSkills,
            banner: banner
        };    
        set(userRef, newProject);
        navigate('/user/home');
    };
        
    const requiredSkillsHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(e.target.selectedOptions).map((option) => option.value);
        setRequiredSkills(selectedOptions);
    };


    return (
        <div className='container bg-white my-2 shadow rounded'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2 className='text-uppercase border-bottom pb-2'>Create Project</h2>
                    <div>
                        <form id="create_project_form" onSubmit={handleSubmit}>
                            <div className="row m-2 mb-4 shadow-sm rounded p-3">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Title<sup className="text-danger">*</sup></label>
                                        <input id="title" className="form-control mb-3" onChange={e => setTitle(e.target.value)} value={title} placeholder='Max. 150 Characters'></input>
                                        <label>Description<sup className="text-danger">*</sup></label>
                                        <textarea className="form-control mb-3" onChange={e => setDescription(e.target.value)} value={description} placeholder='Max. 300 Characters'></textarea>
                                        <div>
                                            <label className='mb-3'>
                                                <input type="checkbox" id="public-view" className="form-check-input me-2" onChange={() => setViewShare(!viewShare)}></input>
                                                Allow users outside your team to view your project
                                            </label>
                                        </div>
                                        <div>
                                            <label className='mb-3'>
                                                <input type="checkbox" id="public-dl" className="form-check-input me-2" onChange={() => setDownloadShare(!downloadShare)}></input>
                                                Allow users outside your team to download your project files
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Project slug<sup className="text-danger">*</sup></label>
                                        <input id="slug" className="form-control mb-3" onChange={e => {setSlug(e.target.value)}}></input>
                                        <label>Active Challenge<sup className="text-danger">*</sup></label>
                                        <select className="form-control mb-3" onChange={e => setActiveChallenge(e.target.value)} value={activeChallenge}>
                                            <option value="select-challenge" disabled>Select Challenge</option>
                                            <option value="one-earth">One Earth</option>
                                            <option value="learn-react-redux">Learn React Redux</option>
                                            <option value="ux-feedback-challenge">UX Feedback Challenge</option>
                                            <option value="gender-equality">Gender Equality</option>
                                            <option value="affordable-energy">Affordable Energy</option>
                                        </select>
                                        <label>Associated Lab</label>
                                        <select className="form-control mb-3" onChange={e => setAssociatedLab(e.target.value)} value={associatedLab}>
                                            <option value="select-lab" disabled>Select Lab</option>
                                            <option value="fun-lab">FUN lab</option>
                                            <option value="career-planning-lab">Career Planning Lab</option>
                                            <option value="web-development-career-lab">Web Development Career Lab</option>
                                        </select>                                            
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2 shadow-sm rounded p-3 mb-4">
                                <h2>Building your team</h2>
                                <p>Building a team is important for your project</p>
                                <div>
                                    <input type="checkbox" id="recruiting" className="form-check-input mb-3 me-2" onChange={() => setRecruiting(!recruiting)}></input>
                                    <label>Currently Recruiting?</label>
                                </div>
                                <label>Required Skills</label>
                                <select className="form-control mb-3" multiple size={2} onChange={requiredSkillsHandler} value={requiredSkills}>
                                    <option value="java">Java</option>
                                    <option value="javascript">JavaScript</option>
                                    <option value="python">Python</option>
                                    <option value="c">C</option>
                                    <option value="c++">C++</option>
                                </select>
                            </div>
                            <div className="row m-2 shadow-sm rounded p-3 mb-4">
                                <h2>Upload Project Banner</h2>
                                <p>Please select png, jpg or jpeg image with minimum dimension of width: 625px, height: 355px </p>
                                <input type="url" id="img" name="img" className="form-control" onChange={e => setBanner(e.target.value)} pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png|.gif)"></input>
                            </div>
                            <div className="d-flex justify-content-around p-3 mb-4">
                                <a href="/user/home" className="btn border border-success text-success px-3 py-2"> Cancel</a>
                                <button type="submit" className="btn border border-success text-success px-3 py-2">Create Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};