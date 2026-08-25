function Footer() {
  return (
    <footer style={{width: "100%",backgroundColor: "#222",color: "white",fontFamily: "Arial, sans-serif",}}>
      <div style={{display: "grid",gridTemplateColumns: "repeat(4, 1fr)",gap: "40px",padding: "45px 8%",boxSizing: "border-box",borderBottom: "1px solid #444",}}>
        
        <div>
          <h2 style={{margin: "0 0 8px",color: "#e52b2b",fontSize: "28px",}}>Kawasaki</h2>
          <p style={{margin: "0 0 10px",color: "#aaa",fontSize: "13px",}}>Let the Good Times Roll</p>
          <p style={{margin: 0,color: "#999",fontSize: "13px",lineHeight: "1.6",}}>Explore Kawasaki motorcycles, accessories,clothing and more.</p>
        </div>

        
        <div>
          <h3 style={{marginBottom: "15px",fontSize: "16px",color: "white",}}>PRODUCTS</h3>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Motorcycles</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Parts & Accessories</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Clothing & Merchandise</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Purchase Tools</p>
        </div>

        <div>
          <h3 style={{marginBottom: "15px",fontSize: "16px",color: "white",}}>SUPPORT</h3>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Service</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Find a Dealer</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Test Ride</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Contact Us</p></div>

        <div>
          <h3 style={{marginBottom: "15px",fontSize: "16px",color: "white",}}>COMPANY</h3>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>News</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Green Academy</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>W Heritage</p>
          <p style={{ margin: "8px 0", color: "#aaa", fontSize: "14px" }}>Kawasaki Global Web</p>
        </div>
      </div>

      <div
        style={{display: "flex",justifyContent: "space-between",alignItems: "center",padding: "18px 8%",backgroundColor: "#171717",boxSizing: "border-box",}}>
        <p style={{margin: 0,color: "#888",fontSize: "12px",}}>© 2026 Kawasaki. All Rights Reserved.</p>

        <div style={{display: "flex",gap: "20px",}}>
          <span style={{ color: "#888", fontSize: "12px" }}>Privacy Policy</span>
          <span style={{ color: "#888", fontSize: "12px" }}>Terms & Conditions </span>
          <span style={{ color: "#888", fontSize: "12px" }}>Cookies</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;