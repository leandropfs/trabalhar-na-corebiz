import { useForm } from "react-hook-form";

import styles from '../scss/components/Newsletter.module.scss'
import { useState } from "react";
import axios from "axios";

function Newsletter () {

    const [isSent, setIsSent] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = handleSubmit((data) => {
        axios.post('https://fakestoreapi.com/users', data)
        .then(function () {
            setIsSent(true)
        })
        .catch(function (error) {
            console.error(error);
        })
    })

    function resetForm() {
        reset()
        setIsSent(false)
    }


    return (
        <div className={styles.newsletter}>
            {isSent ? (
                <div className={styles["newsletter-success"]}>
                    <h3 className={styles["newsletter-success-heading"]}>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p className={styles["newsletter-success-text"]}>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <button 
                        onClick={resetForm}
                        className={`${styles["newsletter-success-reset"]} button button-primary`}
                    >
                        Cadastrar novo e-mail
                    </button>
                </div>
            ) : (
                <form 
                    className={styles["newsletter-form"]} 
                    onSubmit={onSubmit}
                >
                    <h2 className={styles["newsletter-heading"]}>Participe de nossas news <br /> com promoções e novidades!</h2>
                    <fieldset className={styles["newsletter-fieldset"]}>
                        <label className={styles["newsletter-label"]}>
                            <input 
                                {...register("username", {
                                    required: "Esse campo é obrigatório",
                                    validate: {
                                    matchPattern: (v) =>
                                        /[a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ]* [a-zzéúíóáèùìòàõãñêûîôâëyüïöäA-ZÉÚÍÓÁÈÙÌÒÀÕÃÑÊÛÎÔÂËYÜÏÖÄ](.*)/.test(v) ||
                                        "Preencha com seu nome completo",
                                    },
                                })} 
                                type="text" 
                                name="username" 
                                placeholder="Digite seu nome" 
                                className={`${styles["newsletter-input"]} ${errors.username && styles["newsletter-input-error"]}`}
                            />
                            {errors.username?.message && (
                                <small className={styles["newsletter-error-message"]}>{errors.username.message.toString()}</small>
                            )}
                        </label>
                        <label className={styles["newsletter-label"]}>
                            <input 
                                {...register("email", {
                                    required: "Esse campo é obrigatório",
                                    validate: {
                                    matchPattern: (v) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                                        "Preencha com um e-mail válido",
                                    }
                                })} 
                                type="text" 
                                id="email"
                                placeholder="Digite seu email" 
                                className={`${styles["newsletter-input"]} ${errors.email && styles["newsletter-input-error"]}`}
                            />
                            {errors.email?.message && (
                                <small className={styles["newsletter-error-message"]}>{errors.email.message.toString()}</small>
                            )}
                        </label>
                        <label className={styles["newsletter-label"]}>
                            <button 
                                type="submit" 
                                className={`${styles["newsletter-submit"]} button button-primary`}
                            >
                                Eu quero!
                            </button>
                        </label>
                    </fieldset>
                </form>
            )}
            
        </div>
    )
}

export default Newsletter