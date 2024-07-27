import { useState } from 'react';
import styles from './index.module.css'
import MenuCard from '../menu_card';
import Navmenu from '../nav_card';


const MENU_LIST = [
    {
        image: "./img/SpicyCrispyChicken.jpg",
        title: "Spicy Crispy Chicken",
        id: 1,
    },
    {
        image: "./img/BigMac.jpg",
        title: "Big Mac",
        id: 2,
    },
    {
        image: "./img/McNuggets_Stacked.jpg",
        title: "Chicken Mc Nuggets",
        id: 3,
    },
    {
        image: "./img/QuarterPounderwithCheese.jpg",
        title: "Quarter Pounder with Cheese",
    },
    {
        image: "./img/Iced Coffee.jpg",
        title: "Iced Coffee",
        id: 4,
    },
    {
        image: "./img/Egg McMuffin.jpg",
        title: "Egg McMuffin",
        id: 5,
    },
    {
        image: "./img/SausageBurrito.jpg",
        title: "Sausage Burrito",
        id: 6,
    }
]

const NAV_MENU = [
    {
        image: "./img/breakfast.jpg",
        title: "Breakfast",
        id: 1,
    },
    {
        image: "./img/burgers.jpg",
        title: "Burgers",
        id: 2,
    },
    {
        image: "./img/nav_chickenfishsandwiches.jpg",
        title: "Chicken & Fish sandwich",
        id: 3,
    },
    {
        image: "./img/nav_mcnuggetscombo.jpg",
        title: "McNuggets and Meals",
        id: 4,
    },
    {
        image: "./img/snacks_sides.jpg",
        title: "Fries & Sides",
        id: 5,
    },
    {
        image: "./img/nav_happy_meal.jpg",
        title: "Happy Meal",
        id: 6,
    },
    {
        image: "./img/mccafe.jpg",
        title: "Mc Cafe Coffees",
        id: 7,
    },
    {
        image: "./img/sweet&Treates.jpg",
        title: "sweets & Treats",
        id: 8,
    },
    {
        image: "./img/drinks_beverages.jpg",
        title: "Beverages",
        id: 9,
    },
    {
        image: "./img/1$2$3$.jpg",
        title: "1$2$3$ Menu",
        id: 10,
    }

]

function Menulist() {

    // const [menuList, setMenuList] = useState([])


    return (
        <>

            <section>
                <div className={styles.main_container}>
                    <div className={styles.navigation}>
                        <a href="#">
                            <div className={styles.first_nav}>
                                <img src="./img/Featured Favorites.jpg" />
                                <p>Featured Favorites</p>
                            </div>
                        </a>

                        <div className={styles.main_all_nav}>

                            {
                                NAV_MENU.map(item => {
                                    return <Navmenu
                                        key={item.id}
                                        image={item.image}
                                        title={item.title}
                                    />
                                })
                            }

                        </div>
                    </div>


                    <div className={styles.menu_list}>
                        <h1>McDonald's Menu</h1>
                        <h2>Featured Favorites</h2>

                        <ul>
                            {
                                MENU_LIST.map(item => {
                                    return <MenuCard
                                        key={item.id}
                                        image={item.image}
                                        title={item.title}
                                    />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Menulist;