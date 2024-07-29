import styles from './index.module.css'


function MenuCard({ key, image, title }) {


    return (
        <>

            <a href="#">
                <div className={styles.menucard}>
                    <li key={key}>
                        <img src={image} />
                        <p>{title}</p>
                    </li>
                </div>
            </a>

        </>
    )
}


export default MenuCard;