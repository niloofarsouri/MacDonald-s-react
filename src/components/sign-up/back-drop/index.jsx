import { useContext } from 'react';
import styles from './index.module.css'
import MacContext from '../../../context/context';



function BackDrop({ onToggleModal }) {

    const { showModal } = useContext(MacContext)


    return (
        <>
            {
                showModal ?
                    <div className={styles.backdrop} onClick={onToggleModal}></div>
                    :
                    null
            }
        </>
    )
}

export default BackDrop;