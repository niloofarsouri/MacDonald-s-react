import styles from './index.module.css'

const ABOUT_US = [
    {
        title: "About Us Overview",
        id: 1,
    },
    {
        title: "Leadership Team",
        id: 2,
    },
    {
        title: "Values In Action",
        id: 3,
    },
    {
        title: "Franchise Info",
        id: 4,
    },
    {
        title: "Recalls & Alerts",
        id: 5,
    },
    {
        title: "Real Estate",
        id: 6,
    },
    {
        title: "Accessibility",
        id: 7,
    },
    {
        title: "Investor Relations",
        id: 8,
    },
    {
        title: "News & Notifications",
        id: 9,
    },
]

const SERVICES = [
    {
        title: "Services Overview",
        id: 1,
    },
    {
        title: "Wi-Fi",
        id: 2,
    },
    {
        title: "PlayPlaces & Parties",
        id: 3,
    },
    {
        title: "McDelivery®",
        id: 4,
    },
    {
        title: "Mobile Order & Pay",
        id: 5,
    },
    {
        title: "Trending Now",
        id: 6,
    },
    {
        title: "McDonald’s Merchandise",
        id: 7,
    },
    {
        title: "Family Fun Hub",
        id: 8,
    },
    {
        title: "MyMcDonald's Rewards",
        id: 9,
    },
    {
        title: "McCafé®",
        id: 10,
    },
]

const COMMUNITY = [
    {
        title: "Community Overview",
        id: 1,
    },
    {
        title: "Meet the 1 in 8",
        id: 2,
    },
    {
        title: "HACER® Scholarships for Hispanic Students",
        id: 3,
    },
    {
        title: "Ronald McDonald House Charities",
        id: 4,
    },
    {
        title: "McDonald’s Asian Pacific American",
        id: 5,
    },
    {
        title: "McDonald’s International",
        id: 6,
    },
    {
        title: "Black and Positively Golden",
        id: 7,
    },
    {
        title: "McDonald’s LGBTQ+",
        id: 8,
    },
]

const CONTACT_US = [
    {
        title: "Contact Us Overview",
        id: 1,
    },
    {
        title: "Gift Card FAQs",
        id: 2,
    },
    {
        title: "Donations",
        id: 3,
    },
    {
        title: "Employment",
        id: 4,
    },
    {
        title: "Customer Feedback",
        id: 5,
    },
    {
        title: "Frequently Asked",
        id: 6,
    },
    {
        title: "Questions",
        id: 7,
    },
]

function Communication() {



    return (
        <>
            <section>
                <div className={styles.main_final}>
                    <div className={styles.sub_final}>
                        <h3>About Us</h3>
                        <ul>
                            {
                                ABOUT_US.map(item => {
                                    return <li key={item.id}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className={styles.sub_final}>
                        <h3>Services</h3>
                        <ul>
                            {
                                SERVICES.map(item => {
                                    return <li key={item.id}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className={styles.sub_final}>
                        <h3>Community</h3>
                        <ul>
                            {
                                COMMUNITY.map(item => {
                                    return <li key={item.id}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>

                    <div className={styles.sub_final}>
                        <h3>Contact Us</h3>
                        <ul>
                            {
                                CONTACT_US.map(item => {
                                    return <li key={item.id}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>

                </div>

                <div className={styles.icons_footer}>
                    <img src="./footeer_icons/icons8-facebook.svg" />
                    <img src="./footeer_icons/icons8-twitterx.svg" />
                    <img src="./footeer_icons/icons8-youtube.svg" />
                    <img src="./footeer_icons/icons8-instagram.svg" />
                    <img src="./footeer_icons/icons8-t-26.png" />

                </div>
            </section>
        </>
    )
}


export default Communication;


