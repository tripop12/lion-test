import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
// import awsconfig from "./aws-exports";
const awsconfig = {
  aws_project_region: "ap-southeast-1",
  aws_appsync_graphqlEndpoint:
    "https://svkbtbxzrvdopkmskthp5zma2e.appsync-api.ap-southeast-1.amazonaws.com/graphql",
  aws_appsync_region: "ap-southeast-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-vqxe3hpvnnf7fleu7l3zaxgxzq",
};

Amplify.configure(awsconfig);

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
