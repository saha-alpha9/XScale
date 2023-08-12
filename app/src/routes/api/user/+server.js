import { json } from '@sveltejs/kit';
import { DB } from '$lib/db.js';

/** USER ROUTES */
export async function GET({ url }) {

    
    const data = {
        x: Math.random(),
    }
    
    console.log("Backend RUN", data);

    return json(data);

}


export async function POST({ body }){

    // DB.collection('users').insert(data);
    return json({ 
        status: 'success', 
        message: 'Inserted data sucessfully',
    });

}