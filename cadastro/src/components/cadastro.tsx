import { useContext } from 'react';
import styles from '../styles/components/cadastro.module.css'

export function Cadastro() {
    return (
        <div className={styles.grid}>

            <div className={styles.container}>
                <form action="cadastro" method="POST">
                    <div className={styles.title}>Cadastrar Usuário</div>
                    <div>

                        <input className={styles.text} type="text" placeholder="Insira o Nome do Usuário" name="name" />
                        <input className={styles.text} type="text" placeholder="Insira a idade do Usuário" name="idade" />
                        <input className={styles.text} type="text" placeholder="Insira o CPF do Usuário" name="cpf" />

                        <button className={styles.button} type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>

            <div className={styles.container}>
                <form action="cadastro" method="POST">
                    <div className={styles.title}>Alterar Usuário</div>
                    <div>

                        <input className={styles.text2} type="text" placeholder="Insira o ID do Usuário" name="id" />
                        <input className={styles.text2} type="text" placeholder="Insira o Nome do Usuário" name="name" />
                        <input className={styles.text2} type="text" placeholder="Insira a idade do Usuário" name="idade" />
                        <input className={styles.text2} type="text" placeholder="Insira o CPF do Usuário" name="cpf" />

                        <button className={styles.button} type="submit">Alterar</button>
                    </div>
                </form>
            </div>

            <div className={styles.container}>
                <form action="cadastro" method="POST">
                    <div className={styles.title}>Exluir Usuário</div>
                    <div>

                        <input className={styles.text3} type="text" placeholder="Insira o ID do Usuário" name="id" />


                        <button className={styles.button} type="submit">Excluir</button>
                    </div>
                </form>
            </div>

        </div>
    );

}
