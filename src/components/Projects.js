import websiteImg0 from '../assets/jobc.jpg'
import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/cosmetics.jpeg';
import websiteImg4 from '../assets/cal1.jpg';
import websiteImg5 from '../assets/lr.jpg';
import websiteImg6 from '../assets/gues.jpg';

export default function projects(){

    const config = {
        projects :[
            {
                image:websiteImg0,
                description:'Placement Management System Academy project. Built with Html, css, JavaScript, php & sql',
                link:'https://github.com/vijayabaskar2003/clg-project.git'
            },
            {
                image:websiteImg1,
                description:'A Ecommerce website. Built with Html, css, JavaScript',
                link:'https://github.com/vijayabaskar2003/e_commerce.git'
            },
            {
                image:websiteImg2,
                description:' Food website Like Restaurants. Built with Html, css',
                link:'https://github.com/vijayabaskar2003/Restaurants-demo.git'
            },
            {
                image:websiteImg3,
                description:'Beauty shop website like Beauty Parlour. Built with Html,css',
                link:'https://github.com/vijayabaskar2003/Beautycare.git'
            },
            {
                image:websiteImg4,
                description:'A simple Calculator. Built with Html, css, JavaScript',
                link:'https://github.com/vijayabaskar2003/Calculator.git'
            },
            {
                image:websiteImg5,
                description:'Register & Login page with validation Built with Html, css, React.js',
                link:'https://github.com/vijayabaskar2003/Sign-login.git'
            },
            {
                image:websiteImg6,
                description:'GuessNo mini Game page Built with Html, css, React.js',
                link:'https://github.com/vijayabaskar2003/GuessNo.git'
            },
        ]

    };

    return(
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
            <div className="w-full ">
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[135px] font-bold'>Projects</h1>
                    <p>These are some of my best projects. I have built these with React, JavaScript, Html and css. Check them out</p>
                </div>
            </div>
            <div className="w-full">

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10'>
                {/* <div className='flex flex-col md:flex-row px-10 gap-5 '> */}
                    {config.projects.map((project) => (
                        <div className='relative'>
                            <img  className='h-[200px] w-[500px] ' src={project.image} />  
                            <div className='project-desc '>
                                <p className='text-center px-5 py-4'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


