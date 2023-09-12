import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowsRotate, faAlignLeft, faAlignCenter, faAlignRight, faT, faLink, faMagnifyingGlass, faMoon, faSun, faCircleHalfStroke, faDroplet, faEyeDropper, faVolumeXmark, faBolt, faBook, faCircleDot, faArrowPointer, faImage } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Accessibility() {

    const [accessibilityLanguage, setAccessibilityLanguage] = useState('English');
    const [seizureSafe, setSeizureSafe] = useState(false);
    const [visionImpaired, setVisionImpaired] = useState(false);
    const [adhdFriendly, setAdhdFriendly] = useState(false);
    const [cognitiveDisability, setCognitiveDisability] = useState(false);
    const [keyboardNavigation, setKeyboardNavigation] = useState(false);
    const [blindUsers, setBlindUsers] = useState(false);
    const [alignLeft, setAlignLeft] = useState(false);
    const [alignCenter, setAlignCenter] = useState(false);
    const [alignRight, setAlignRight] = useState(false);
    const [highlightTitles, setHighlightTitles] = useState(false);
    const [highlightLinks, setHighlightLinks] = useState(false);
    const [textMagnifier, setTextMagnifier] = useState(false);
    const [darkContrast, setDarkContrast] = useState(false);
    const [lightContrast, setLightContrast] = useState(false);
    const [highContrast, setHighContrast] = useState(false);
    const [highSaturation, setHighSaturation] = useState(false);
    const [lowSaturation, setLowSaturation] = useState(false);
    const [monochrome, setMonochrome] = useState(false);
    const [muteSounds, setMuteSounds] = useState(false);
    const [stopAnimations, setStopAnimations] = useState(false);
    const [readMode, setReadMode] = useState(false);
    const [highlightFocus, setHighlightFocus] = useState(false);
    const [highlightHover, setHighlightHover] = useState(false);
    const [hideImages, setHideImages] = useState(false);

    const languages = [
        {
            language: 'English',
            flag: 'https://www.worldometers.info//img/flags/small/tn_us-flag.gif',
            country: 'USA'
        },
        {
            language: 'Español',
            flag: 'https://www.worldometers.info//img/flags/small/tn_sp-flag.gif',
            country: 'Spain'
        },
        {
            language: 'Deutsch',
            flag: 'https://www.worldometers.info//img/flags/small/tn_gm-flag.gif',
            country: 'Germany'
        },
        {
            language: 'Português',
            flag: 'https://www.worldometers.info//img/flags/small/tn_po-flag.gif',
            country: 'Portugal'
        },
        {
            language: 'Français',
            flag: 'https://www.worldometers.info//img/flags/small/tn_fr-flag.gif',
            country: 'France'
        },
        {
            language: 'Italiano',
            flag: 'https://www.worldometers.info//img/flags/small/tn_it-flag.gif',
            country: 'Italy'
        },
        {
            language: 'עברית',
            flag: 'https://www.worldometers.info//img/flags/small/tn_is-flag.gif',
            country: 'Israel'
        },
        {
            language: '繁體中文',
            flag: 'https://www.worldometers.info//img/flags/small/tn_tw-flag.gif',
            country: 'Taiwan'
        },
        {
            language: 'Pусский',
            flag: 'https://www.worldometers.info//img/flags/small/tn_rs-flag.gif',
            country: 'Russia'  
        }, 
        {
            language: 'العربية',
            flag: 'https://www.worldometers.info//img/flags/small/tn_ae-flag.gif',
            country: 'UAE'
        },
        {
           language: 'Nederlands',
            flag: 'https://www.worldometers.info//img/flags/small/tn_nl-flag.gif',
            country: 'Netherlands'
        },
        {
            language: '简体中文',
            flag: 'https://www.worldometers.info//img/flags/small/tn_ch-flag.gif',
            country: 'China'
        },   
        {
            language: '日本語',
            flag: 'https://www.worldometers.info//img/flags/small/tn_ja-flag.gif',
            country: 'Japan'
        },
        {
            language: 'Polski',
            flag: 'https://www.worldometers.info//img/flags/small/tn_pl-flag.gif',
            country: 'Poland'
        },
        {
            language: 'Türkçe',
            flag: 'https://www.worldometers.info//img/flags/small/tn_tu-flag.gif',
            country: 'Turkey'
        },
        {
            language: 'Čeština',
            flag: 'https://www.worldometers.info//img/flags/small/tn_ez-flag.gif',
            country: 'Czechia'
        },
        {
            language: 'Magyar',
            flag: 'https://www.worldometers.info//img/flags/small/tn_hu-flag.gif',
            country: 'Hungary'
        },
        {
            language: 'Slovenčina',
            flag: 'https://www.worldometers.info//img/flags/small/tn_lo-flag.gif',
            country: 'Slovakia'
        },
    ];

    const medium: React.CSSProperties = {
        width: '45px',
        height: '45px'
    };
    const small: React.CSSProperties = {
        width: '22px',
        height: '26px'
    };

    const xsmall: React.CSSProperties = {
        width: '16px',
        height: '16px'
    };

    const buttons: React.CSSProperties = {
        width: '47%',
    };

    const handleReset = () => {
        setAccessibilityLanguage('English');
        setSeizureSafe(false);
        setVisionImpaired(false);
        setAdhdFriendly(false);
        setCognitiveDisability(false);
        setKeyboardNavigation(false);
        setBlindUsers(false);
        setAlignLeft(false);
        setAlignCenter(false);
        setAlignRight(false);
        setHighlightTitles(false);
        setHighlightLinks(false);
        setTextMagnifier(false);
        setDarkContrast(false);
        setLightContrast(false);
        setHighContrast(false);
        setHighSaturation(false);
        setLowSaturation(false);
        setMonochrome(false);
        setMuteSounds(false);
        setStopAnimations(false);
        setReadMode(false);
        setHighlightFocus(false);
        setHighlightHover(false);
        setHideImages(false);
    };

    return (
        <>
            <button className="btn btn-success position-fixed rounded-circle end-0 m-2" data-bs-toggle="modal" data-bs-target="#accessibilityModal" style={medium}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 57" className="text-white" fill="white" style={small}><path xmlns="http://www.w3.org/2000/svg" d="M20.821 0a5.364 5.364 0 1 0 .001 10.727A5.364 5.364 0 0 0 20.821 0zm-2.889 11.083c-3.158.007-3.741 1.995-3.741 3.622v19.138a2.96 2.96 0 0 0 2.969 2.969l13.597-.06s4.681 7.089 7.026 10.628c.703 1.061 1.638 1.999 2.988 1.999 1.781 0 3.421-1.453 3.226-3.226-.074-.695-.231-1.354-.652-1.979-2.091-3.117-6.234-9.859-8.511-12.39-.578-.643-1.377-1.112-2.315-1.109l-11.242.04V18.802l8.016 5.542a2.527 2.527 0 0 0 3.522-.653 2.526 2.526 0 0 0-.653-3.523l-12.508-8.629c-.434-.3-1.236-.456-1.722-.456zm30.994 5.364a.75.75 0 0 0-.535.217l-9.995 9.995H24.225a.748.748 0 0 0-.751.752v.277c0 .419.333.752.751.752h14.567a.832.832 0 0 0 .573-.217l10.292-10.292a.756.756 0 0 0 0-1.069l-.198-.198a.75.75 0 0 0-.533-.217zm-36.16 5.225C5.423 23.879 0 30.721 0 38.949 0 48.995 8.121 57 17.892 57c7.486 0 14.004-4.687 16.645-11.4l-2.691-4.058c-1.22 6.446-6.914 11.421-13.953 11.421-7.955 0-14.21-6.363-14.21-14.014 0-5.9 3.735-11.026 9.084-13.062v-4.215z"></path></svg>
            </button>
            <div className="modal fade" id="accessibilityModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <button type="button" className="btn-close m-0 btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            <button className="btn rounded text-white" data-bs-toggle="modal" data-bs-target="#language">
                                <img 
                                src={languages.find((item) => item.language === accessibilityLanguage)?.flag || 'https://www.worldometers.info//img/flags/small/tn_us-flag.gif'} 
                                alt="USA flag" className="rounded-circle me-1" style={xsmall}/>
                                <span className="me-1">{accessibilityLanguage}</span>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>
                        <div className="modal-body bg-info">
                            <div>
                                <h3 className="text-center mb-3">Accessibility Adjustments</h3>
                                <button className="btn mb-3" onClick={handleReset}><FontAwesomeIcon icon={faArrowsRotate} /> Reset Settings</button>
                                <input type="text" className="form-control mb-3" placeholder="Search" />
                            </div>
                            <div className="container bg-white rounded p-3 mb-5">
                                <h5 className="mb-4">Choose the right accessibility profile for you</h5>
                                <div className="form-check form-switch border-bottom mb-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="seizure-safe" checked={seizureSafe} onChange={() => setSeizureSafe(!seizureSafe)}/>
                                    <div>
                                        <label className="form-check-label" htmlFor="seizure-safe"><h5 className="mb-1">Seizure Safe Profile</h5></label>
                                        <p className="text-muted">Clear flashes and reduces color</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch border-bottom mb-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="vision-impared" checked={visionImpaired} onChange={() => setVisionImpaired(!visionImpaired)} />
                                    <div>
                                        <label className="form-check-label" htmlFor="vision-impared"><h5 className="mb-1">Vision Impaired Profile</h5></label>
                                        <p className="text-muted">Enhances website visuals</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch border-bottom mb-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="adhd-friendly" checked={adhdFriendly} onChange={() => setAdhdFriendly(!adhdFriendly)} />
                                    <div>
                                        <label className="form-check-label" htmlFor="adhd-friendly"><h5 className="mb-1">ADHD Friendly Profile</h5></label>
                                        <p className="text-muted">More focus and fewer distractions</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch border-bottom mb-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="cognitive-disability" checked={cognitiveDisability} onChange={() => setCognitiveDisability(!cognitiveDisability)}/>
                                    <div>
                                        <label className="form-check-label" htmlFor="cognitive-disability"><h5 className="mb-1">Cognitive Disability Profile</h5></label>
                                        <p className="text-muted">Assists with reading and focusing</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch border-bottom mb-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="keyboard-navigation" checked={keyboardNavigation} onChange={() => setKeyboardNavigation(!keyboardNavigation)} />
                                    <div>
                                        <label className="form-check-label" htmlFor="keyboard-navigation"><h5 className="mb-1">Keyboard Navigation</h5></label>
                                        <p className="text-muted">Use website with the keyboard</p>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-2">
                                    <input className="form-check-input" type="checkbox" role="switch" id="blind-users" checked={blindUsers} onChange={() => setBlindUsers(!blindUsers)} />
                                    <div>
                                        <label className="form-check-label" htmlFor="blind-users"><h5 className="mb-1">Blind Users (Screen Readers)</h5></label>
                                        <p className="text-muted">Optimize website for screen-readers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container bg-white rounded p-3 mb-5">
                                <h4 className="mb-4">Content Adjustments</h4>
                                <div className="row">
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${alignLeft ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setAlignLeft(!alignLeft)}><FontAwesomeIcon icon={faAlignLeft} size="2xl" className="mb-2" />Align Left</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${alignCenter ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setAlignCenter(!alignCenter)}><FontAwesomeIcon icon={faAlignCenter} size="2xl" className="mb-2" />Align Center</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${alignRight ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setAlignRight(!alignRight)} ><FontAwesomeIcon icon={faAlignRight} size="2xl" className="mb-2" />Align Right</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${highlightTitles ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHighlightTitles(!highlightTitles)}><FontAwesomeIcon icon={faT} size="2xl" className="mb-2" />Highlight Titles</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${highlightLinks ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHighlightLinks(!highlightLinks)}><FontAwesomeIcon icon={faLink} size="2xl" className="mb-2" />Highlight Links</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${textMagnifier ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setTextMagnifier(!textMagnifier)}><FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" className="mb-2" />Text Magnifier</button>
                                    </div>
                                </div>
                            </div>
                            <div className="container bg-white rounded p-3 mb-5">
                                <h4 className="mb-4">Color Adjustments</h4>
                                <div className="row">
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${darkContrast ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setDarkContrast(!darkContrast)}><FontAwesomeIcon icon={faMoon} size="2xl" className="mb-2" />Dark Contrast</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${lightContrast ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setLightContrast(!lightContrast)}><FontAwesomeIcon icon={faSun} size="2xl" className="mb-2" />Light Contrast</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${highContrast ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHighContrast(!highContrast)}><FontAwesomeIcon icon={faCircleHalfStroke} size="2xl" className="mb-2" />High Contrast</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${highSaturation ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHighSaturation(!highSaturation)}><FontAwesomeIcon icon={faDroplet} size="2xl" className="mb-2" />High Saturation</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${lowSaturation ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setLowSaturation(!lowSaturation)}><FontAwesomeIcon icon={faEyeDropper} size="2xl" className="mb-2" />Low Saturation</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${monochrome ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setMonochrome(!monochrome)} ><FontAwesomeIcon icon={faCircleHalfStroke} size="2xl" className="mb-2" />Monochrome</button>
                                    </div>
                                </div>
                            </div>
                            <div className="container bg-white rounded p-3 mb-5">
                                <h4 className="mb-4">Orientation Adjustments</h4>
                                <div className="row">
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${muteSounds ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setMuteSounds(!muteSounds)}><FontAwesomeIcon icon={faVolumeXmark} size="2xl" className="mb-2" />Mute Sounds</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${stopAnimations ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setStopAnimations(!stopAnimations)}><FontAwesomeIcon icon={faBolt} size="2xl" className="mb-2" />Stop Animations</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${readMode ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setReadMode(!readMode)}><FontAwesomeIcon icon={faBook} size="2xl" className="mb-2" />Read Mode</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${highlightFocus ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHighlightFocus(!highlightFocus)}><FontAwesomeIcon icon={faCircleDot} size="2xl" className="mb-2" />Highlight Focus</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${highlightHover ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHighlightHover(!highlightHover)}><FontAwesomeIcon icon={faArrowPointer} size="2xl" className="mb-2" />Highlight Hover</button>
                                    </div>
                                    <div className="col-6 col-md-4 mb-4">
                                        <button className={`btn ${hideImages ? 'btn-success text-white' : 'btn-info'} d-flex flex-column w-100 p-4 h-100 justify-content-center`} onClick={() => setHideImages(!hideImages)}><FontAwesomeIcon icon={faImage} size="2xl" className="mb-2" />Hide Images</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="language" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close m-0" data-bs-toggle="modal" data-bs-target="#accessibilityModal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h4>Choose the interface language</h4>
                            <div className="d-flex flex-wrap justify-content-between">
                                {languages.map((item) => (
                                    <button className="btn mb-4 btn-info py-2" key={item.language} onClick={() => setAccessibilityLanguage(item.language)} data-bs-toggle="modal" data-bs-target="#accessibilityModal" style={buttons}><img src={item.flag} alt={item.country + ' flag'} className="rounded-circle me-1" style={small} />{item.language}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}