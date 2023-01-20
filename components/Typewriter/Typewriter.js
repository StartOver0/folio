import next from 'next';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import { useEffect, useRef, useState } from 'react';
import styles from './Typewriter.module.scss';

export default function WorkSection(){
    const [name, setName] = useState('');
    const namex = ['developer', "programmer", "student"];
    const idx = useRef(0)
    const inc = useRef(0);
    const curr = useRef(0)

    useEffect(() => {
        const interval = setInterval(() => {

            if(idx.current == 0 && inc.current == 0){
                inc.current = 1
                curr.current = (curr.current + 1)%namex.length;
            }

            if(idx.current == namex[curr.current].length){
                 setTimeout(() => {inc.current = 0;}, 600);
            }

            if(inc.current) idx.current++;
            else idx.current--;

            setName(namex[curr.current].slice(0, idx.current));
        }, 100)

        return () => clearInterval(interval)
    }, [])

    
    
    return(
        <span className={styles.titles}>{name}</span>
    )
}
