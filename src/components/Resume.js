import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  
  const clickMe = (e) => {
    e.preventDefault();
    window.open('Resume.pdf', '_blank');
  };
  
  return (
    <section id='resume' className='flex flex-col md:flex-row px-5 bg-color'>
      <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={ResumeImg} alt='Resume Preview' />
      </div>
      <div className='md:w-1/2 flex justify-center text-white'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl border-b-4 border-primary mb-5 w-[136px] font-bold'>Resume</h1>
          <p className='pb-5'>
            You can view my resume <a className='btn' href='Resume'  onClick={clickMe} > Download CV</a>
          </p>
        </div>
      </div>
    </section>
  );
}



