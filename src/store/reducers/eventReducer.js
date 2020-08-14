// import events from "./data/events.json";

const initState = {
  events: [],
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      // console.log("created event", action.event);
      return state;
    case "CREATE_EVENT_ERROR":
      console.log("Error creating event!", action.err);
      return state;
    default:
      return state;
  }
};

export default eventReducer;
