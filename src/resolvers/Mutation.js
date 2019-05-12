const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password});
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
        token,
        user
    }
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
        throw new Error('no such user found');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
        throw new error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
        token,
        user
    }
}

async function createToDo(parent, args, context, info) {
    const userId = getUserId(context);

    if (args.parent) {
        let doesParentBelongToUser = context.prisma.$exists.toDo({
            id: args.parent,
            createdBy: {
                id: userId
            }
        });

        if (doesParentBelongToUser) {
            return context.prisma.createToDo({
                todo: args.todo,
                completed: args.completed,
                parent: { connecT: { id: args.parent } },
                createdBy: { connect: { id: userId } },
            });
        } else {
            throw new Error("parent does not belong to user");
        }

    } else {
        return context.prisma.createToDo({
            todo: args.todo,
            completed: args.completed,
            createdBy: { connect: { id: userId } },
        });
    }
}

async function deleteToDo(parent, args, context, info) {
    const userId = getUserId(context);

    const requestingUserIsOwner = await context.prisma.$exists.toDo({
        id: args.parent,
        createdBy: {
            id: userId
        }
    });
}

module.exports = {
    signup,
    login,
    createToDo,
    deleteToDo,
}

