import MenuCard from '../menu_card';
import styles from './index.module.css'

const BREAKFAST = [
    {
        image: "./breakfast img/BaconEggCheeseBiscuit.jpg",
        title: "Bacon Egg Cheese Biscuit",
        id: 1,
    },
    {
        image: "./breakfast img/EggMcMuffin.jpg",
        title: "Egg McMuffin",
        id: 2,
    },
    {
        image: "./breakfast img/SausageMcMuffin.jpg",
        title: "Sausage McMuffin",
        id: 3,
    },
    {
        image: "./breakfast img/SausageEggMcMuffin.jpg",
        title: "Sausage Egg McMuffin",
        id: 4,
    },
    {
        image: "./breakfast img/Sausage Biscuit.jpg",
        title: "Sausage Biscuit",
        id: 5,
    },
    {
        image: "./breakfast img/Sausage Egg Biscuit.jpg",
        title: "Sausage Egg Biscuit",
        id: 6,
    },
    {
        image: "./breakfast img/BEC_McGriddle.jpg",
        title: "Bacon, Egg & Cheese McGriddle",
        id: 7,
    },
    {
        image: "./breakfast img/Sausage McGriddle.jpg",
        title: "Sausage McGriddle",
        id: 8,
    },
    {
        image: "./breakfast img/EggMcMuffin_Coffee_Glass.jpg",
        title: "Egg McMuffin Meal",
        id: 9,
    },
    {
        image: "./breakfast img/SausageEggMcMuffin_Coffee_Glass.jpg",
        title: "Sausage Egg McMuffin",
        id: 10,
    },
    {
        image: "./breakfast img/SausageEggBiscuit_Coffee_Glass.jpg",
        title: "Sausage Egg Biscuit",
        id: 11,
    },
    {
        image: "./breakfast img/BaconEggCheeseBiscuit_Coffee_Glass.jpg",
        title: "Bacon Egg Cheese Biscuit",
        id: 12,
    },

]



function Breakfast() {


    return (
        <>
            <section className={styles.part_two}>
                <h1>Breakfast</h1>

                <div className={styles.breakfast_card}>
                    {
                        BREAKFAST.map(item => {
                            return <MenuCard
                                key={item.id}
                                image={item.image}
                                title={item.title}
                            />
                        })
                    }
                </div>
            </section>




        </>
    )
}


export default Breakfast;