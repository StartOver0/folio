import styles from './Header.module.scss'

function giveLogo(){
    return(
        <div >
        <svg className={styles.logo} width="60" height="60" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 2">
        <rect width="75" height="75" fill="transparent"/>
        <g id="Group 2">
        <g id="logo">
        <g id="greenhands">
        <rect x="36.6266" y="18" width="4.05499" height="16.7623" rx="2.02749" fill="#5abdbd"/>
        <rect width="3.89896" height="25.3222" rx="1.94948" transform="matrix(0.83818 -0.545394 0.638337 0.769757 40.5679 37.5081)" fill="#43C4C7"/>
        </g>
        <g id="orangehands">
        <rect x="36.5255" y="39.7958" width="4.05499" height="16.463" rx="2.02749" fill="#fc6e6e"/>
        <rect width="4" height="18" rx="2" transform="matrix(-0.0408308 -0.999166 0.999995 0.00323571 17.7 39.25)" fill="#fc6e6e"/>
        </g>
        </g>
        <circle r="1.25" transform="matrix(0.982732 -0.185032 0.233335 0.972396 38.5061 37.3565)" fill="#43C4C7"/>
        </g>
        </g>
        </svg>
        </div>

    )
}
export default function Header({color, toggleblur, setNavopen, isNavopen, gotoSection}) {

    const handleClick = (e) => {
        setNavopen(); 
        toggleblur();
    }

    const downloadOnclick = () => {
        fetch('downloadable/Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className={`${styles.container} ${color == 'orange'? styles.orange: ' '} ${color == 'green'? styles.green: ' '} ${color == 'nospike'? styles.nospike: ' '}`}>
            <div className={`${styles.nav} ${isNavopen? styles.blur: ''}`} >
                {giveLogo()}
                <ol className={`${styles.navlinks_desktop}`}>
                    <li onClick={() => {window.scrollTo({top: (window.innerHeight - 73)})}}><button>About</button></li>
                    <li onClick={() => {gotoSection('work')}}><button>Projects</button></li>
                    <li onClick={() => {gotoSection('contact')}}><button>Contact</button></li>
                    <li><button onClick={downloadOnclick}>Resume</button></li>
                </ol>
            </div>
            <div className={styles.nav_mobile} >
                <div >
                    {giveLogo()}
                    <div onClick={handleClick}>
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100" height="100" fill="transparent"/>
                        <g id="Frame 1">
                        <rect width="100" height="100" fill="transparent"/>
                        <g className={`${isNavopen ? styles.open: styles.close}`}>
                        <rect className={styles.bot}x="32" y="63" width="55" height="8" rx="4" fill="white"/>
                        <rect className={styles.mid} x="22" y="44" width="65" height="8" rx="4" fill="white"/>
                        <rect className={styles.top2} x="12" y="25" width="75" height="8" rx="4" fill="white"/>
                        <rect className={styles.top1} x="12" y="25" width="75" height="8" rx="4" fill="white"/>
                        </g>
                        </g>
                        </svg>

                    </div>
                </div>
                <ol className={`${styles.navlinks_mobile} ${!isNavopen? styles.nav_isopen: styles.nav_isclose}` } >
                    <li onClick={() => {window.scrollTo({top: (window.innerHeight*2 + 5)});  handleClick();}}><button>About</button></li>
                    <li onClick={() => {gotoSection('work'); handleClick();}}><button>Projects</button></li>
                    <li onClick={() => {gotoSection('contact'); handleClick();}}><button>Contact</button></li>
                    <li><button>Resume</button></li>
                </ol>
            </div>
            
            <div className={`${styles.triangles} ${isNavopen? styles.blur: ''}`}>
                {Array.from(Array(140)).map((atri, index) => (
                    <div className={styles.tile} key={index}></div>
                ))}
            </div>
        </div>
    )
}