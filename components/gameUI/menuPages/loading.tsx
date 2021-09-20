import SvgBackground from "../components/svg.tsx";
import styles from "../styles/loading.module.scss";

export default function LoadingScreen(props) {


    return (
        <div className={styles.Root}>
            <SvgBackground />
            <div style={{zIndex: 10}}>
                <h1>Loading...</h1>
                <br></br>
                <h3>{props.status}</h3>
            </div>
        </div>
    );
}
