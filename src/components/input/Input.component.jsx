import classNames from "classnames";
import { useRef } from "react";
import styles from "./input.module.scss";

const Input = (props) => {
    const { label, value = "", ...restProps } = props;

    const inputRef=useRef()
 

    const labelClasses = classNames({
        [styles.label]: true,
        [styles.active]: value,
    });

    const handleInputClick=()=>{
        const el=inputRef.current
        el.focus()

    }


    return (
        <div className={styles.container}>
            <input className={styles.input} value={value} {...restProps}  ref={inputRef}/>
            <label className={labelClasses} onClick={handleInputClick}>{label}</label>
        </div>
    );
};

export default Input;
