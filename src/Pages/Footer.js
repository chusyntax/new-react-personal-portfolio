import styles from '../CSS/Footer.module.css';

function Footer(){

return(
    <footer>
    <div className={styles.footer_content}>
        <h3>Chusyntax</h3>
        <p>Thank you for visiting my portfolio. Please don't hesitate to message me on any soical platform for oppotunities, collaborations or to just say hi :)</p>
        <ul className={styles.socials}>
            <li><a href="w"><i class="fa fa-instagram"></i></a></li>
            <li><a href="w"><i class="fa fa-linkedin-square"></i></a></li>
            <li><a href="w"><i class="fa fa-github"></i></a></li>
        </ul>
    </div>
    <div className={styles.footer_bottom}>
        <p>copyright &copy;2021 Chusyntax</p>
    </div>
</footer>
);

};

export default Footer;