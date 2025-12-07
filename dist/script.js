"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaDb_config_1 = require("./src/config/prismaDb.config");
async function main() {
    // Create a new user with a post
    const user = await prismaDb_config_1.prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            events: {
                create: {
                    title: 'Hello World',
                    description: 'This is my first post!',
                },
            },
        },
        include: {
            events: true,
        },
    });
    console.log('Created user:', user);
    // Fetch all users with their posts
    const allUsers = await prismaDb_config_1.prisma.user.findMany({
        include: {
            events: true,
        },
    });
    console.log('All users:', JSON.stringify(allUsers, null, 2));
}
main()
    .then(async () => {
    await prismaDb_config_1.prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prismaDb_config_1.prisma.$disconnect();
    process.exit(1);
});
