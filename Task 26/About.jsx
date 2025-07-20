function About() {

    const teamMembers = [
        {
            name: 'Toumik Haque',
            role: 'Founder & CEO',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            name: 'Md Salauddin',
            role: 'UI/UX Designer',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            name: 'Fatima Khan',
            role: 'Backend Developer',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            name: 'Arjun Das',
            role: 'Frontend Developer',
            image: 'https://via.placeholder.com/300x200',
        },
        {
            name: 'Simran Roy',
            role: 'Marketing Manager',
            image: 'https://via.placeholder.com/300x200',
        },
    ];

    return (

        <div>
            <h2 className="text-center mt-4 text-white">Our Team</h2>
            <div id="teamCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">

                    {teamMembers.map((member, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="card pt-3" style={{ width: '18rem' }}>
                                    <img src='/user.png' className="card-img-top rounded-circle align-self-center" alt={member.name} />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{member.name}</h5>
                                        <p className="card-text">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#teamCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#teamCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default About