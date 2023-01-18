import Footer from "./footer";
import Header from "./header";

const index = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default index;
