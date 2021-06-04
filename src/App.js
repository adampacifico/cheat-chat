import "./App.css";

// routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Login from "./components/Login";
import Chat from "./components/Chat";

// context API provider
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chats" exact component={Chat} />
          <Route />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
