import emailjs from 'emailjs-com';
import { useState } from 'react';
import './css/contact.css'
import swal from 'sweetalert2'

const Contact = () => {
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_eqsxnms', 'template_prn4g0d', e.target, 'kj126XJSHeWocUUId').then(
            (res) => {
                setIsSending(false);
                swal.fire({
                    icon: 'success',              // Type of alert (success)
                    title: 'Success!',            // Title of the alert
                    text: 'Your operation was successful.',  // Message to be displayed
                    confirmButtonText: 'Great!'   // Custom text for the confirm button
                });
            },
            (error) => {
                setIsSending(false);
                // alert('Something went wrong, please try again.');
                swal.fire({
                    icon: 'error',          // Type of alert (error)
                    title: 'Oops...',       // Title of the alert
                    text: 'Something went wrong!',  // Message to be displayed
                    confirmButtonText: 'OK' // Custom text for the confirm button
                });
            }
        )
    };

    const validate = () => {
        const name = document.getElementById("name").value;
        const mail = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const contact = document.getElementById("contact").value;
        if (!name, !mail, !contact, !message) {
            return false;
        }
        setIsSending(true);
        return true;
    }

    return (
        <section className='flex flex-col justify-around items-center w-full bg-slate-950 pt-10 pb-14 md:flex-row'>
            <div id="contact-details" className='flex flex-col items-center gap-1 font-extrabold text-violet-500 p-10 font-tangerine'>
                <span className='text-8xl '>Contact</span>
                <span className='text-4xl'><a href="tel:6387480183">+91 6387480183</a></span>
                <span className='text-4xl'><a href="mailto:1999monustp+portfolio@gmail.com">1999monustp@gmail.com</a></span>
            </div>
            <div id="contact-form">
                <form action="" onSubmit={(e) => sendEmail(e)} className='flex flex-col gap-2 text-black font-tangerine text-3xl' >
                    <input type="text" name="name" placeholder='Name' id="name" required />
                    <input type="number" name="contact" placeholder='contact' id="contact" required />
                    <input type="email" name="to_email" placeholder='*@me.com' id="email" required />
                    <textarea name="message" placeholder='Write your message ...' id="message" required></textarea>
                    <input type="submit" className='text-4xl' onClick={() => validate()} value={`${isSending ? 'Sending ...' : "send"}`} />
                </form>

            </div>
        </section>
    )
}

export default Contact