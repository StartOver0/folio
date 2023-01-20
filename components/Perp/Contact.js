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
            <input type='text' />
        </div>
    )
}