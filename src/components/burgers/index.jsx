import styles from './index.module.css'


const BURGERS = [
    {
        image: "./burger.img/BigMac.jpg",
        title: "Big Mac",
        id: 1,
    },
    {
        image: "./burger.img/QuarterPounderwithCheese.jpg",
        title: "Quarter Pounder with Cheese",
        id: 2,
    },
    {
        image: "./burger.img/DoubleQuarterPounderwithCheese.jpg",
        title: "Double Quarter Pounder with Cheese",
        id: 3,
    },
    {
        image: "./burger.img/QuarterPounderCheeseDeluxe.jpg",
        title: "Quarter Pounder Cheese Deluxe",
        id: 4,
    },
    {
        image: "./burger.img/McDouble.jpg",
        title: "Mc Double",
        id: 5,
    },
    {
        image: "./burger.img/BaconQPC.jpg",
        title: "Bacon QPC",
        id: 6,
    },
    {
        image: "./burger.img/Cheeseburger.jpg",
        title: "Cheese burger",
        id: 7,
    },
    {
        image: "./burger.img/DoubleCheeseburger.jpg",
        title: "Double Cheese burger",
        id: 8,
    },
]


function Burgers() {


    return (
        <>


            <section className={styles.part_three}>
                <h1>Burgers</h1>
                <div className={styles.burgers}>

                    {
                        BURGERS.map(item => {
                            return (
                                <div className={styles.burger_card}>
                                    <img src={item.image} />
                                    <p>{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>


            </section >


        </>
    )
}

export default Burgers;