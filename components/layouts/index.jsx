import Footer from "./footer";
import Header from "./header";

const index = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main
        style={{
          marginTop: "6rem"
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default index;
