import "./App.css";
import ContentComponent from "./components/ContentComponent";
import ThemeProvider from "./context/ThemeProvider";


function App() {
  
  // const userInfo = {username: "Admin", isAdmin: true}

  return (
     <ThemeProvider>
      <ContentComponent/>
     </ThemeProvider>


    // <UserInfoContext.Provider value={userInfo}>
    //   <BlogPage/>
    // </UserInfoContext.Provider>
  );
}

export default App;
