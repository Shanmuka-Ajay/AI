//import functions from langchain
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "@langchain/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import dotenv from "dotenv";
dotenv.config();
//tools calculator, google search
const tools = [new Calculator(), new SerpAPI()];

//build agent, open AI GPT 3.5
const llm = new ChatOpenAI({ modelName: "gpt-3.5-turbo", temperature: 0 });

const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

//execute "prompt"
const result = await executor.run("Enter the prompt you need. "); //customize the prompt.

//print the log
console.log(result);
