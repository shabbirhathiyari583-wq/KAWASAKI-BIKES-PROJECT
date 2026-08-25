import "./components/Home.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";


 const kawasakiBikes = [
  {
    img: "https://static.auto42.in/auto42web/wp-content/uploads/2023/07/Kawasaki-Ninja-H2R-Front-Left-Side-View.webp",
    companyName: "Kawasaki",
    modelName: "Ninja H2R",
    price: "₹79,90,000",
    description:
      "An extreme performance motorcycle featuring supercharged engineering, aggressive styling, and advanced racing technology."
  },
  {
    img: "https://th.bing.com/th/id/OIP.fWlA92lDj8lMxE_NiWLGswHaEK?w=328&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
    companyName: "Kawasaki",
    modelName: "Ninja H2 SX SE",
    price: "₹65,50,000",
    description:
      "A premium supercharged sport-tourer designed for powerful performance, long-distance comfort, and advanced technology."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-svErflezVY4-HcwQIDeo0sgNh4M5xzBdz5s5OSQUg&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja ZX-10R Elite",
    price: "₹58,75,000",
    description:
      "A premium supersport motorcycle combining aggressive aerodynamics, powerful performance, and advanced electronics."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vQnLuGRBHV3sDwp7UwM_U3dAUJcOXlh-gNJoHw9CKQ&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja ZX-6R Premium",
    price: "₹52,40,000",
    description:
      "A high-performance supersport motorcycle built around sharp handling, responsive acceleration, and race-inspired design."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbozbxgteaGkVGb7IxKun7DRsOWXFf6J-6CY7ArmBllw&s=10",
    companyName: "Kawasaki",
    modelName: "Z H2 SE Elite",
    price: "₹57,90,000",
    description:
      "A supercharged streetfighter offering powerful performance, premium equipment, and bold aggressive styling."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPRcH8GSkrIqexpcimZZwiRS56mEmWJCAviDCh2yTAw&s=10",
    companyName: "Kawasaki",
    modelName: "Z900RS Heritage",
    price: "₹51,25,000",
    description:
      "A premium modern classic motorcycle combining timeless styling with modern performance and advanced technology."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QfAYCCeJtbcHN35XJqN4y0GF3GsA3sJZqJD-ZmPQPw&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja 1100SX Premium",
    price: "₹54,80,000",
    description:
      "A premium sport-touring motorcycle offering strong performance, advanced technology, and comfortable long-distance riding."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrytmwReOVFmQfmIT0amG8SCUtSquoLIwyO3K4mVIbcg&s=10",
    companyName: "Kawasaki",
    modelName: "Versys 1100 Adventure",
    price: "₹56,40,000",
    description:
      "A premium adventure-tourer designed for powerful road performance, comfort, and versatile long-distance travel."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyE0FvOlJEfisTg3K82O53_hwjl3C8hYIP3FwtCP_A2Q&s=10",
    companyName: "Kawasaki",
    modelName: "Vulcan S Custom",
    price: "₹50,90,000",
    description:
      "A premium cruiser featuring relaxed ergonomics, distinctive styling, and smooth road-going performance."
  },
  {
    img: "https://imgcdn.zigwheels.ph/large/gallery/exterior/74/1863/kawasaki-ninja-h2-slant-rear-view-full-image-543626.jpg",
    companyName: "Kawasaki",
    modelName: "Ninja H2 Carbon",
    price: "₹82,50,000",
    description:
      "A premium supercharged motorcycle featuring exclusive styling, advanced engineering, and exceptional performance."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiN07MbxKVj_B8jxPeMuU6MtDpKVaIJksNcoLdGpxKog&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja H2 Touring",
    price: "₹74,75,000",
    description:
      "A high-end performance motorcycle designed to combine supercharged power with premium touring capability."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94zgmBKnj1bD5938A7hOnq2X_HYJPg1cl8mwrU8sc4Q&s=10",
    companyName: "Kawasaki",
    modelName: "Z H2 Performance",
    price: "₹61,20,000",
    description:
      "A premium supercharged naked motorcycle delivering powerful acceleration, advanced electronics, and striking design."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSlI9YlpdRc1GDgus__2CrhgRaauAnEH3voTCPnmQ1w&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja ZX Racing",
    price: "₹68,90,000",
    description:
      "A fictional premium racing-inspired motorcycle focused on aggressive styling, performance, and advanced riding technology."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9fdeyi9Hnq45IyyvdIufzK1FsSArVGDwldXAVlpHpw&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja RR Limited",
    price: "₹72,50,000",
    description:
      "A fictional limited-edition supersport motorcycle featuring exclusive styling and high-performance engineering."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdFHtYvUe73K9t8vX3REqgY3fserJNv3M7Iz-ZfwttQ&s=10",
    companyName: "Kawasaki",
    modelName: "Z Ultimate",
    price: "₹59,80,000",
    description:
      "A fictional premium streetfighter designed with aggressive styling, powerful performance, and advanced electronics."
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oJABci0g6NT762zcj_8jQiSexhFoy-zb3hiOPfTQEg&s=10",
    companyName: "Kawasaki",
    modelName: "Ninja Grand Touring",
    price: "₹63,40,000",
    description:
      "A fictional premium sport-tourer combining high performance, refined comfort, and advanced touring technology."
  },
  {
    img: "https://images.hindustantimes.com/auto/img/2024/02/21/960x540/2024_Kawasaki_Ninja_500_1708520693857_1708520700679.jpg",
    companyName: "Kawasaki",
    modelName: "Ninja Black Edition",
    price: "₹55,60,000",
    description:
      "A fictional premium Ninja edition featuring exclusive dark styling, powerful performance, and modern electronics."
  },
  {
    img: "https://c.ndtvimg.com/2024-11/jfs3re9o_kawasaki-z-h2_625x300_18_November_24.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
    companyName: "Kawasaki",
    modelName: "Z Hyper Performance",
    price: "₹67,25,000",
    description:
      "A fictional high-performance street motorcycle combining muscular styling with advanced performance technology."
  },
  {
    img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/163355/kawasaki-ninja-1000-right-front-three-quarter1.jpeg?isig=0",
    companyName: "Kawasaki",
    modelName: "Ninja Titanium",
    price: "₹76,80,000",
    description:
      "A fictional ultra-premium Ninja edition designed around exclusive styling, advanced engineering, and high performance."
  },
  {
    img: "https://assets.carandclassic.com/uploads/cars/kawasaki/C1598349/1988-kawasaki-ex250-f2-6490b139057de.jpg?fit=fillmax&h=500&ixlib=php-4.1.0&q=85&w=500&s=36271c71b66a744a6e2cd974dab5f26e",
    companyName: "Kawasaki",
    modelName: "Kawasaki GPX Ultimate",
    price: "₹89,90,000",
    description:
      "A fictional flagship performance motorcycle created for the project with premium styling, advanced technology, and extreme performance."
  }
];
function App() {


  return (
    <>
      <Header />
      <Home kawasakiBikes={kawasakiBikes} />
      <Footer />
    </>
  );
}
export default App;
