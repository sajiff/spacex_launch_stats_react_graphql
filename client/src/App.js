import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src="http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png"
            alt="spacex"
            style={{
              width: 300,
              display: "block",
              margin: "auto",
            }}
          />
          <Routes>
            <Route exact path="/" element={<Launches />} />
            <Route exact path="/launch/:flight_number" element={<Launch />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
