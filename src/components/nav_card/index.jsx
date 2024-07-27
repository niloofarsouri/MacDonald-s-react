import styles from './index.module.css'



function Navmenu({ key, image, title }) {


    return (
        <>
            <div className={styles.nav_menu}>
                {/* <li key={key}> */}
                <img src={image} />
                <p>{title}</p>
                {/* </li> */}
            </div>
        </>
    )
}


export default Navmenu;