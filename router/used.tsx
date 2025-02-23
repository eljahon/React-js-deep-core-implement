import React from "react";
import { RouterProvider, Route, Link } from "./MyRouter"; // Hooklarimizni import qilamiz

const Home = () => <h1>🏠 Home Page</h1>;
const About = () => <h1>ℹ️ About Page</h1>;

const App = () => {
  return (
    <RouterProvider>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Route path="/" component={<Home />} />
      <Route path="/about" component={<About />} />
    </RouterProvider>
  );
};

export default App;
