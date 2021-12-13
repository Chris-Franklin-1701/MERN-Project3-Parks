const { AuthenticationError } = require("apollo-server-express");
const { User, Visited } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('saveVisited').select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in.");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with the given email.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveVisited: async (parent, {parkId}, context) => {
      if (context.user) {
        const visited = await Visited.create(
          { parkId }
        );

        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { saveVisited:  visited._id } },
          { new: true }
        );

        return user;
      }
    }
  },
};

module.exports = resolvers;
