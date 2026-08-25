function Header() {
  const styles = {
    topHeader: {
      width: "100%",
      height: "84px",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 14%",
      boxSizing: "border-box",
      fontFamily: "Arial, sans-serif",
    },

    logoSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    logo: {
      color: "#e52b2b",
      fontSize: "28px",
      fontWeight: "bold",
      lineHeight: "25px",
    },

    tagline: {
      color: "#333",
      fontSize: "10px",
      fontWeight: "bold",
      marginTop: "2px",
    },

    topRight: {
      display: "flex",
      alignItems: "center",
      gap: "22px",
    },

    topLink: {
      color: "#555",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "600",
    },

    greenLink: {
      color: "#61bd28",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "600",
    },

    separator: {
      color: "#999",
      fontSize: "14px",
    },

    search: {
      color: "#555",
      fontSize: "20px",
    },

    greenLine: {
      width: "100%",
      height: "4px",
    },

    navbar: {
      width: "100%",
      height: "43px",
      backgroundColor: "#3d3d3d",
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      fontFamily: "Arial, sans-serif",
    },

    navLink: {
      color: "#ffffff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "bold",
      padding: "0 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderLeft: "1px solid #666",
    },

    lastLink: {
      borderRight: "1px solid #666",
    },
  };

  return (
    <>
      <header style={styles.topHeader}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>Kawasaki</div>
          <div style={styles.tagline}>Let the Good Times Roll</div>
        </div>

        
        <div style={styles.topRight}>
          <a style={styles.greenLink}> E-Shop </a>
          <span style={styles.separator}>|</span>
          <a style={styles.topLink}>Kawasaki Global Web</a>
          <span style={styles.separator}>|</span>
          <a style={styles.topLink}> Find a dealer</a>
          <span style={styles.separator}>|</span>
          <span style={styles.search}>⌕</span>
        </div>
      </header>

      <div style={styles.greenLine}></div>

      <nav style={styles.navbar}>
        <a style={styles.navLink}>PRODUCT</a>
        <a style={styles.navLink}>PARTS & ACCESSORIES</a>
        <a style={styles.navLink}>CLOTHING & MERCHANDISE</a>
        <a style={styles.navLink}>PURCHASE TOOLS </a>
        <a style={styles.navLink}>SERVICE</a>
        <a style={styles.navLink}> NEWS</a>
        <a style={styles.navLink}>GREEN ACADEMY</a>

        <a href="#"style={{...styles.navLink,...styles.lastLink}}>W HERITAGE </a>
      </nav>
    </>
  );
}

export default Header;
