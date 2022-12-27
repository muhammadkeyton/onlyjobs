import type { NextApiRequest, NextApiResponse } from 'next'

import { Configuration, OpenAIApi } from "openai";

type jobTags = {
  name: string
}


const OPENAIAPIKEY = "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"


const configuration = new Configuration({
    apiKey: OPENAIAPIKEY,
});


const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest,res: NextApiResponse) {

    if(req.method === "POST"){
        try{
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `${req.body.worker}`,
                temperature: 0,
                max_tokens: 3000,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
              });
              console.log(response.data.choices[0])
              res.status(200).json(response.data.choices[0]);
        }catch(error){
            console.log(error)
            res.status(500).json(error)
        }

    }
   
}
