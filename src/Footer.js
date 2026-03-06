function Footer(){
    var currentYear = new Date().toLocaleDateString('en-CA');
    return(
        <div>
            <footer>
                <p>Nayha & Chloe</p>
                <p>{currentYear}</p>
            </footer>
        </div>
    );
}

export default Footer;