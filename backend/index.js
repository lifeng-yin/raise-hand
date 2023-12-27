import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1730977",
  key: "ad2bebfdea2b9efca491",
  secret: "2aabfd8f447474e2b582",
  cluster: "us2",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});