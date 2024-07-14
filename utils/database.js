// // import mongoose from "mongoose";

// // let isConnected = false;

// // export const connectToDB = async()=>{
// //     mongoose.set('strictQuery', true);

// //     if(isConnected){
// //         console.log('MongoDB is alreday connected');
// //         return;
// //     }
// //     try {
// //         await mongoose.connect(process.env.MONGODB_URI,{
// //             dbName: "Promptopia",
// //             // useNewUrlParser: true,
// //             // useUnifiedTopology: true,
// //         })
// //         isConnected = true;
// //         console.log('MongoDB connected')
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }

// import mongoose from "mongoose";

// let isConnected = false;

// export const connectToDB = async () => {
//     mongoose.set('strictQuery', true);

//     if (isConnected) {
//         console.log('MongoDB is already connected');
//         return;
//     }
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: "Promptopia"
//         });
//         isConnected = true;
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.log(error);
//     }
// };



import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Promptopia",
            serverSelectionTimeoutMS: 30000, // Increased timeout to 30 seconds
            socketTimeoutMS: 45000 // Socket timeout
        });
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
        throw error;
    }
};
