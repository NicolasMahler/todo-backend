const { getUserId } = require('../utils');

function todos(root, args, context, info) {
    let userId = getUserId(context);

    const where = args.filter ? 
        {
            todo_contains: args.filter,
            createdBy: {
                id: userId
            }
        } : { 
            createdBy: {
                id: userId
            }
        };
    
    return context.prisma.toDoes({
        where
    });
} 

async function todo(parent, args, context, info) {
    let userId = getUserId(context);

    const requestingUserIsOwner = await context.prisma.$exists.toDo({
        id: args.id,
        createdBy: {
            id: userId
        }
    });

    if (requestingUserIsOwner) {
        return ToDo = context.prisma.toDo(data = {id: args.id});
    }

    throw new Error('invalid permissions');
}

async function todoChildren(parent, args, context, info) {
    let userId = getUserId(context);
    
    const requestingUserIsOwner = await context.prisma.$exists.toDo({
        id: args.parent,
        createdBy: {
            id: userId
        }
    });

    const where = {
        parent: {
            id: args.parent
        }
    }

    if (requestingUserIsOwner && args.parent) {
        return context.prisma.toDoes(data = {
            where
        });
    }

    throw new Error('invalid permission or no parent id given');
}

module.exports = {
    todos,
    todo,
    todoChildren
}