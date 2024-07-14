// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const POST = async (request) => {
//     try {
//         const { userId, prompt, tag } = await request.json();

        

//         await connectToDB();
//         const newPrompt = new Prompt({ creator: userId, prompt, tag });
//         await newPrompt.save();
//         return new Response(JSON.stringify(newPrompt), { status: 201 });
//     } catch (error) {
//         console.error('Error creating new prompt:', error);
//         return new Response(JSON.stringify({ error: 'Failed to create new prompt', details: error.message }), { status: 500 });
//     }
// };
import Prompt from "@models/prompts";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    try {
        const { userId, prompt, tag } = await request.json();
        console.log('Received data:', { userId, prompt, tag });

        // Ensure required fields are present
        if (!userId || !prompt || !tag) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.error('Error creating new prompt:', error);
        return new Response(JSON.stringify({ error: 'Failed to create new prompt', details: error.message }), { status: 500 });
    }
};
