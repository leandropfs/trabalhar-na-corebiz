import styles from '../scss/components/SearchBox.module.scss'

function SearchBox () {
    return (
        <form className={styles.searchBox}>
            <fieldset className={styles["searchBox-fieldset"]}>
                <input type="search" name="search" placeholder="O que está procurando?" className={styles["searchBox-searchInput"]} />
                <button className={styles["searchBox-searchSubmit"]} type='submit'>
                    <i className={styles["searchBox-searchSubmit-icon"]}></i>
                    Buscar
                </button>
            </fieldset>
        </form>
    )
}

export default SearchBox