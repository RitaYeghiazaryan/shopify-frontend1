//COMPONENTS
import SignIn from './Components/sign-in/SignIn.component';
import SignUp from './Components/sign-up/SignUp.component';

//STYLES
import styles from './auth.module.scss'
const Auth = () => {
    return (
        <div className={styles.container}>
            <SignIn/>
            <SignUp/>
            
        </div>
    )
}

export default Auth;
