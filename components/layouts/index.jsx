import Footer from "./footer";
import Header from "./header";

const index = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "8rem"
        }}
        className="container"
      >
        {children}
      </main>

      <Footer />
    </>
  );
};

export default index;
