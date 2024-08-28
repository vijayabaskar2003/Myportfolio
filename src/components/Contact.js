export default function Contact(){

    const config = {
        email:'vijayabaskar1306@gmail.com',
        phone:'+91-9361651339'
    };

    return(
        <section id="contact" className='flex flex-col  px-5 py-32 bg-secondary'>
           
            <div className='flex flex-col items-center text-white'>
                
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[136px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in details, please contact me</p>
                <p className="py-2"><span className="font-bold">Email : </span>{config.email}</p>
                <p className="py-2"><span className="font-bold">Phone : </span>{config.phone}</p>
            </div>
        </section>

    );
}

