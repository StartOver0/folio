import styles from './ImageSection.module.scss';
import img from '/public/images/sup.jpg';
import Image from 'next/image';

export default function ImageSection(){
    return (
        <div className={styles.container}> 
            <div className={`${styles.img_cover} img-shadow`}>
                <Image src = {img} alt = 'not found' layout='fill' objectFit='cover' objectPosition={'top'}/>
            </div>
        </div>
    )
}