function createdBy(parent, args, context) {
    return context.prisma.toDo({ id: parent.id }).createdBy();
}

function parent(parent, args, context) {
    return context.prisma.toDo({id: parent.id}).parent();
}

function children(parent, args, context) {
    return context.prisma.toDo({id: parent.id}).children();
}

module.exports = {
    createdBy, 
    parent,
    children
}