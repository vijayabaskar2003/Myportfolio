import IndexImg from '../assets/hero.png' ;
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Index(){
// dynamic content page create for future
    const config = {
        subtitle:'Im a Front-End developer and Designer',
        social :{
            linkedin:'https://www.linkedin.com/in/vijayabaskar-b-6265b62a2/',
            github:'https://github.com/vijayabaskar2003',
            facebook:''
        }
    }


    return(
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
           <div className='w-1/2 flex flex-col '>
                <h1 className=' text-white text-5xl font-index-font'>Hi, <br/>Im VIJAYABASKAR
                  <p className='text-2xl' >{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a className=' text-white pr-5' target='_blank' href={config.social.linkedin}><AiOutlineLinkedin size={40}/></a>
                    <a className=' text-white pr-5' target='_blank' href={config.social.github}><AiOutlineGithub size={40}/></a>
                    <a className=' text-white 'target='_blank' href={config.social.facebook}><AiOutlineFacebook size={40}/></a>
                </div>
           </div>
            <img className='md:w-1/3' src={IndexImg}/>
        </section>
    );
}