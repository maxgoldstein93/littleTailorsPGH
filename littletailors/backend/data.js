import bcrypt from "bcryptjs"

const data ={
    users: [
        {
            name: "Max",
            email: "email@example.com",
            password: bcrypt.hashSync("Bode1", 8),
            isAdmin: true,
        },
        {
            name: "Bode",
            email: "bode@example.com",
            password: bcrypt.hashSync("Max1", 8),
            isAdmin: false,

        },
    ],
    products: [
        {
            name: "Chicken Kreplach Dumplings",
            category: "Food",
            image:"/images/dumpling-1.png",
            price: 12.99,
            countInStock: 25,
            rating: 5,
            numReviews: 10,
            description: "magically delicious"
        },
        {
            name: "Beef Kreplach Dumplings",
            category: "Food",
            image:"/images/dumpling-1.png",
            price: 12.99,
            countInStock: 10,
            rating: 4.5,
            numReviews: 9,
            description: "magically delicious"
        },
        {
            name: " Brisket Kreplach Dumplings",
            category: "Food",
            image:"/images/dumpling-1.png",
            price: 12.99,
            countInStock: 5,
            rating: 5,
            numReviews: 8,
            description: "magically delicious"
        },
        {
            name: "Duck Kreplach Dumplings",
            category: "Food",
            image:"/images/dumpling-1.png",
            price: 12.99,
            countInStock: 2,
            rating: 5,
            numReviews: 7,
            description: "magically delicious"
        },
        {
            name: "Lobster Kreplach Dumplings",
            category: "Food",
            image:"/images/dumpling-1.png",
            price: 12.99,
            countInStock: 0,
            rating: 2.5,
            numReviews: 6,
            description: "magically delicious"
        },
        {
            name: " Mystery Kreplach Dumplings",
            category: "Food",
            image:"/images/dumpling-1.png",
            price: 11.99,
            countInStock: 3,
            rating: 4,
            numReviews: 8,
            description: "magically delicious"
        }
        
    ],
};
export default data;