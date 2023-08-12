function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer content__element">
      <p className="footer__copyright">&copy;{currentYear} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
