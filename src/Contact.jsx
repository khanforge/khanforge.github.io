import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_eqsxnms', 'template_prn4g0d', e.target, 'kj126XJSHeWocUUId').then(
            (res) => {
                setIsSending(true);
                console.log("successfully sent");
                alert("successfully sent")
            },
            (error) => {
                setIsSending(true);
                console.log(error)
                alert('Something went wrong, please try again.');
            }
        )
    };

    return (
        <section className='text-white flex flex-col justify-around items-center w-full bg-slate-950 md:flex-row'>
            <div id="contact-details" className='flex flex-col items-center gap-1 font-extrabold p-10 font-tangerine'>
                <span className='text-6xl '>Contact</span>
                <span className='text-4xl'><a href="tel:6387480183">+91 6387480183</a></span>
                <span className='text-4xl'><a href="mailto:1999monustp+portfolio@gmail.com">1999monustp@gmail.com</a></span>
            </div>
            <div id="contact-form">
                <form action="" onSubmit={sendEmail} className='flex flex-col gap-2 text-black'>
                    <input type="text" name="name" placeholder='Name' id="" />
                    <input type="email" name="to_email" placeholder='*@me.com' id="email" />
                    <textarea name="message" placeholder='Write your message ...' id="message"></textarea>
                    <input type="submit" className='text-white' value={`${isSending ? 'Sending ...' : "send"}`} />
                </form>

            </div>
        </section>
    )
}

export default Contact