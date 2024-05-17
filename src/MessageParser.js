class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);

    const replyBack = message.toLowerCase();
    console.log(this.state);
    if (replyBack.includes("Hello Gopala")) {
      console.log("Hi");
    }
  }
}

export default MessageParser;
