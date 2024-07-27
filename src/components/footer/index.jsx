import styles from './index.module.css'




function Footer() {


    return (
        <>
            <section>
                <div className={styles.after_footer}>
                    <div className={styles.after_footer_part_one}>
                        <a href="#">Privacy (Updated)</a>
                        <a href="#">California Privacy Notice</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Do Not Sell or Share My Personal Information</a>
                        <a href="#">Cookies Settings</a>
                    </div>
                    <div className={styles.after_footer_part_two}>
                        <img src="./img/arches-logo_108x108.jpg" />
                        <span>© 2017 - 2023 McDonald's. All Rights Reserved</span>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Footer;