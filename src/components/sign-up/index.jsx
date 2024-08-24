import { Button, TextField } from '@mui/material';
import styles from './index.module.css'
import { useContext, useState } from 'react';
import MacContext from '../../context/context';
import BackDrop from './back-drop';
import LogIn from './log-in';



function SignUp({ onToggleModal }) {

    const { showModal } = useContext(MacContext)
    const [login, setLogin] = useState(false)


    const handleLogin = () => {
        // alert("hi")
        setLogin(!login)
    }


    if (!showModal) {
        return null;
    }

    return (
        <>

            <BackDrop onToggleModal={onToggleModal} />

            <div className={styles.container}>

                <div className={styles.main_signup}>
                    <img src="./sign-up.png" />

                    <div className={styles.sub_main_input}>
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
                    </div>

                    {
                        login ?
                            <LogIn onToggleModal={onToggleModal} />
                            :
                            null
                    }
                    <div className={styles.sub_main_btn}>
                        <Button variant='contained'>Log in</Button>
                        <Button variant='outlined' onClick={handleLogin}>Sign in</Button>
                    </div>

                </div>

            </div>
        </>
    )
}


export default SignUp;