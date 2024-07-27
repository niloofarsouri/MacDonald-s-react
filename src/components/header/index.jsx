import styles from './index.module.css'



function Header() {



    return (
        <>
            <header>
                <div className={styles.main_header}>
                    <div id={styles.logo}>
                        <img src="./img/logo.jpg" />
                    </div>

                    <div className={styles.sub_main_header}>
                        <div className={styles.header_items_top}>

                            <div class={styles.top_items_left}>
                                <a href="#">Language</a>
                                <a href="#">Sign Up For Email</a>
                                <a href="#">Carees</a>
                            </div>

                            <div className={styles.top_items_right}>
                                <img src="./icons/icons8-search.svg" />
                                <a href="#" class={styles.location}><img src="./icons/red location.png" />change your location</a>
                                <div className={styles.order}>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.header_items_bottom}>
                            <nav>
                                <a href="#">Our Menu</a>
                                <a href="#">Download App</a>
                                <a href="#">MyMcDonald's Rewards</a>
                                <a href="#">Exclusive Deals</a>
                                <a href="#">About Our Food</a>
                                <a href="#">Locate</a>
                                <a href="#">Gift Cards</a>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header;