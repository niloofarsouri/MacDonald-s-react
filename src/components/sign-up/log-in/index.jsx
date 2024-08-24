import styles from './index.module.css'
import BackDrop from '../back-drop';
import { TextField, Button } from '@mui/material';
import { useContext } from 'react';
import MacContext from '../../../context/context';


function LogIn({ onToggleModal }) {



    return (
        <>
            <BackDrop onToggleModal={onToggleModal} />

            <div className={styles.container}>

                <div className={styles.main_login}>
                    <img src="./sign-up-burger.jpg" />

                    <div className={styles.sub_main_input}>

                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Family"
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="E-mail"
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Phone"
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                        />
                    </div>

                    <div className={styles.sub_main_btn}>
                        <Button variant='contained'>Sign up</Button>
                        <Button variant='outlined' onClick={onToggleModal}>Cancel</Button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default LogIn;