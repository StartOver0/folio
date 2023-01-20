import styles from './Contact.module.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({passedRef}){
    const [isClicked, setIsClicked] = useState(0);
    const [name, setName] = useState(0);
    const [email, setEmail] = useState(0);
    const [message, setMessage] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value,
        };

        
        if(!values.name ) setName(1);
        if(!values.message) setMessage(1); 
        
        const isValid = values.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
             
        if(!isValid) setEmail(2);
        if(!values.email) setEmail(1); 
        
        if(!values.name || !values.email || !values.message || !isValid) return;

        setIsClicked(1);
        emailjs.send('service_yvascy1', 'template_h160z7i', values, 'Wgz8EAjfWNpaF2Yz_')
        .then(response => {
            console.log('bhej dia email');
            e.target[0].value = ''
            e.target[1].value = ''
            e.target[2].value = ''
            setIsClicked(2);
            setTimeout(() => {
                setIsClicked(0);
            }, 2000)

        }, error => {
            console.log('dhang se kr', error)
            setIsClicked(0);
        });
    }

    return (
        <div className={styles.container} ref={passedRef}>
            <div className={styles.left_portion}>
                <div className={styles.content}>
                   <p>Contact me</p>
                    <p>Don{"'"}t Be shy!</p>
                    <p>If you have a project in mind, got a query or just wanna say hello.</p>
                    <p>I am willing to answer all my visitors.</p>
                    
                </div>
                <div className={styles.check}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline mr-1 mb-1" viewBox="0 0 24 24"  fill="currentColor">
                        <path d="M20 4H4c-1.2003 0-2 .897-2 2v12c0 1.2003.897 2 2 2h16c1.2003 0 2-.897 2-2V6c0-1.2003-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                    </svg>
                    <div className={styles.my_email}><a href='mailto:harshitrawat881@gmail.com'>harshitrawat471@gmail.com</a></div>
                </div>
                <div className={styles.links}>
                            <a data-name='LINKEDIN'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a data-name='GITHUB' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

                            <a data-name='TWITTER' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a200.9 200.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A200.66 200.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>

                            <a data-name='INSTAGRAM' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                </div>
            </div>
            <div className={styles.right_portion} id = 'contact'>
                <form className={styles.contact} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name {name ? <span className={styles.red_text}>&nbsp;( Required )</span> : ''}</label>
                        <input type='text' className = {styles.inputs} id = 'name' onClick={() => {setName(0)}} onBlur={() => {setTimeout(() => {window.scrollTo({top: (window.innerHeight*8)})}, 200)}}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email {email? <span className={styles.red_text}>&nbsp;{email == 1 && '( Required )'}{email == 2 && '( Not valid Email )'}</span>: '' }</label>
                        <input type='text' className = {styles.inputs} id = 'email' name='email' onClick={() => {setEmail(0)}} onBlur={() => {setTimeout(() => {window.scrollTo({top: (window.innerHeight*8)})}, 200)}}/>
                    </div>
                    <div>
                        <label htmlFor='message'>Message {message ? <span className={styles.red_text}>&nbsp;( Required )</span> : ''}</label>
                        <textarea id='message' className = {styles.inputs} rows = '6' spellCheck='false' onClick={() => {setMessage(0)}} onBlur={() => {setTimeout(() => {window.scrollTo({top: (window.innerHeight*8)})}, 200)}}></textarea>
                    </div>
                    <button className={`${isClicked && styles.sendButton}`}>{isClicked  == 0 && "Send"}{isClicked  == 1 && "Sending..." }{isClicked  == 2 && "Sended"} </button>
                </form>
            </div>
        </div>
    )
}