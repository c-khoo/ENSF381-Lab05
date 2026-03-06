function Footer(){
    var currentYear = new Date().getFullYear();
    return(
        
        <Footer>
            <p>Nayha & Chloe</p>
            <p>{currentYear}</p>
        </Footer>

    );
}

export default Footer;