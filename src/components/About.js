import AboutImg from '../assets/about.png';

export default function About(){
    const config = {
        line1:'Hi, my name is Vijayabaskar. I am a BSc Computer Science graduate (2023) and a junior FrontEnd developer passionate about creating intuitive and responsive web interfaces.',
        line2:'I completed an academic project on a Placement Management System and have honed my skills through a FrontEnd development course at Besant Technologies. I am currently seeking a full-time FrontEnd developer role where I can apply my skills and contribute to innovative projects.',
        line3:'I am proficient in FrontEnd technologies such as React.js, JavaScript, CSS3, HTML5, Bootstrap, SQL, and more.'
    }

    return(
        <section id='about' className='flex flex-col md:flex-row px-5 bg-color'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center text-white'>
                <div className='flex flex-col justify-center'>
                     <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                     <p className='pb-5'>{config.line1}</p>
                     <p className='pb-5'>{config.line2}</p>
                     <p className='pb-5'>{config.line3}</p>
                </div>
            </div>
        </section>

    );
}

// - Local:    http://localhost:3000     │
//  - Network:  http://192.168.1.6:3000  
