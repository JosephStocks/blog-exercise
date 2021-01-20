"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("authors", [
            {
                firstName: "John",
                lastName: "Smith",
                bio: "I like long walks on the beach.",
                imageURL:
                    "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg",
                email: "jsmith@gmail.com",
                twitter: "@jsmith",
                linkedin: "jsmith",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: "Jack",
                lastName: "Skellington",
                bio:
                    "You may have heard of me. I am the Pumpkin King of Halloweentown",
                imageURL:
                    "https://bitchenstickerz.com/wp-content/uploads/2018/03/nightmarebeforechristmas-Jack.jpg",
                email: "jskellington@gmail.com",
                twitter: "@jskellington",
                linkedin: "jskellington",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: "John",
                lastName: "McClane",
                bio: "I like blowing up bad guys.",
                imageURL:
                    "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2020/05/28/USATODAY/usatsports/imageForEntry17-tmg.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp",
                email: "jmcclane@gmail.com",
                twitter: "@jmcclane",
                linkedin: "jmcclane",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                firstName: "Leeloo",
                lastName: 'aka "The Fifth Element"',
                bio:
                    "I was sent to save the world.. no big deal. I'm also called the 5th element.",
                imageURL:
                    "https://imgix.bustle.com/rehost/2016/9/13/df46f351-b39c-49f4-af96-106b791f6de7.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
                email: "leeloo@gmail.com",
                twitter: "@leeloo",
                linkedin: "leeloo",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete("authors", null, {});
    },
};
