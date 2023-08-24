interface FooterProps {
    toggleDarkMode: boolean;
}

export default function Footer({toggleDarkMode}: FooterProps) {
    const maxWidth: React.CSSProperties = {
        maxWidth: '1440px',
    };

    return(
        <footer className={`footer p-2 ${toggleDarkMode ? "bg-dark-subtle" : "bg-white"}`}>
            <div className="mx-auto d-flex justify-content-end justify-content-md-between flex-wrap" style={maxWidth}>
                <label className="text-muted">v22.0.0</label>
                <div className="d-inline">
                    <a className="text-decoration-none text-secondary p-2" href="https://prepr.org/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</a>
                    <a className="text-decoration-none text-secondary p-2" href="https://prepr.org/terms-of-use/" target="_blank" rel="noreferrer">Terms of use</a>
                    <a className="text-decoration-none text-secondary p-2" href="https://intercom.help/preprme/en/" target="_blank" rel="noreferrer">Help Center</a>
                </div>
                <label className="text-secondary mt-2 mt-md-0">Powered by <a href="https://learnlab.ai" className="text-secondary text-decoration-none" target="_blank" rel="noreferrer"><b>LearnLab.ai</b></a></label>
            </div>
        </footer>
    );
}