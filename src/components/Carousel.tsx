export default function Carousel() {
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Splash_1.png" className="d-block w-100" alt="Join Challenges, Labs, and Projects: Solve real--world problems thorugh challene-based learning" />
                </div>
                <div className="carousel-item">
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Splash_2.png" className="d-block w-100" alt="Showcase your Skills and Portfolio: Real world employers can view your profile and track your projects" />
                </div>
                <div className="carousel-item">
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Splash_3.png" className="d-block w-100" alt="Grow Your Network: Join existing teams and mmatch with new teammates to collaborate on projects together" />
                </div>
                <div className="carousel-item">
                    <img src="https://d3f06rtlkr354b.cloudfront.net/public/front/img/Splash_4.png" className="d-block w-100" alt="Get Recognized: Earn microcredentials and achievements to verify your abilities" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}