import React from "react";
import Mood from "./components/mood";

// API URL's constants

window.API_URL = "https://stressed-app.herokuapp.com/api";
window.STATUSES = window.API_URL + "/statuses/";
window.TIMESERIES = window.API_URL + "/timeseries/";

import "./../styles/main.less";

React.render(<Mood />, document.getElementById("root"));
