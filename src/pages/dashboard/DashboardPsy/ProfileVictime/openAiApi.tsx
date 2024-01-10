import OpenAI from "openai";
import pdfParse from 'pdf-parse';
import * as pdfjsLib from 'pdfjs-dist';

// const API_KEY = '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';
const API_KEY = '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';
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/IA_M3AK/completions';
const openai = new OpenAI({ 'apiKey': API_KEY, dangerouslyAllowBrowser: true });
interface OpenAIResponse {
  choices: [{ text: string }];
}
// async function readPdfFile(filePath: string): Promise<string> {
//   console.log(pdfjsLib.version)
//   pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/browse/pdfjs-dist@4.0.269/build/pdf.worker.min.mjs`;
//   const loadingTask = pdfjsLib.getDocument(filePath);
// return 'pdf.getPage(0)'
// }
export const generateOpenAICompletion = async (prompt: string): Promise<string> => {
  // console.log(readPdfFile('../../../../assets/images/Oussama_Elamraoui.pdf'))
  // content: "i want to create a costum gpts and after that use it as api fo integrate to my web site."
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: 'hey how are you'},
    { role: "system", content: "Provide information based on real things."},
    // { role: "assistant", content: 'https://www.ecenglish.com/en/101-ways-to-learn-english#:~:text=Practise%20every%20day.%20Decide%20how%20much%20time%20a,Choose%203%20or%204%20to%20practise%20each%20day'}
    ],
    model: "gpt-3.5-turbo",
  });


  return completion.choices[0].message.content || 'error';
};
