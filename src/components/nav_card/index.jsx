import styles from './index.module.css'



function Navmenu({ key, image, title }) {


    return (
        <>
            <div className={styles.nav_menu}>
                <img src={image} />
                <p>{title}</p>
            </div>
        </>
    )
}


export default Navmenu;