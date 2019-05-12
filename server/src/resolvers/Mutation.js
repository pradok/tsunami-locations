const messages =  require('../fixtures');

const Mutation = {
  addMessage: (_, { title, body }) => {
    const newMessage = { title, body };
    messages.push(newMessage);
    return newMessage;
  }
};

module.exports = Mutation;