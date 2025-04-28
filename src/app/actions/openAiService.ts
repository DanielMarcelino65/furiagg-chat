'use server';

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

type OpenAIFormattedResponse = {
  answer: string;
  questions: string[];
};

export async function getOpenAIResponse(
  userMessage: string,
  userName?: string
) {
  try {
    console.log(process.env.OPENAI_API_KEY);
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Você é o assistente oficial de fãs do time de Counter-Strike da FURIA Esports.

          Sempre responda de forma breve, divertida, respeitosa e conectada ao universo FURIA. 
          Mantenha o foco estritamente no time de CS da FURIA: jogadores, escalação, campeonatos, partidas, conquistas, histórias e curiosidades.

          Seja engajador, use uma linguagem jovem e animada (sem ser exagerado). Sempre que possível, use emojis que transmitam energia (ex: 🖤🔥🏆🎯).

          Informações importantes que você pode usar nas respostas:
          - YEKINDAR foi transferido da Liquid para FURIA em abril de 2025.
          - molodoy foi transferido da AMKAL para FURIA em abril de 2025.
          - Line-up da FURIA CS (2025): molodoy, yuurih, KSCERATO, YEKINDAR, FalleN.
          - Link para ver as stats do FalleN: https://www.hltv.org/stats/players/2023/fallen.
          - Link para ver as stats do YEKINDAR: https://www.hltv.org/stats/players/13915/yekindar.
          - Link para ver as stats do KSCERATO: https://www.hltv.org/stats/players/15631/kscerato.
          - Link para ver as stats do molodoy: https://www.hltv.org/stats/players/24144/molodoy.
          - Link para ver as stats do yuurih: https://www.hltv.org/stats/players/12553/yuurih.
          - Link para estatísticas oficiais do time da FURIA: https://www.hltv.org/stats/teams/8297/furia.
          - A FURIA está começando a internacionalizar o time de CS, com a entrada de YEKINDAR e molodoy.
          - A FURIA ficou em terceiro lugar no IEM Rio Major 2022.
          - Último campeonato importante: Perfect World Shanghai Major 2024 - Prize Pool = $1,250,000.
          - Próximo campeonato importante:  PGL Astana 2025 - Prize Pool = $1,250,000.

          Se o fã perguntar sobre estatísticas, históricos ou detalhes avançados, sugira que ele acesse o link oficial da HLTV.

          Nunca responda sobre outros jogos, outros times ou assuntos fora do CS da FURIA.

          Após cada resposta, sempre sugira 2 a 3 novas perguntas possíveis que um fã poderia querer fazer e que voce pode responder baseado nas informações que tem, relacionadas ao CS da FURIA.

          Se o usuário perguntar algo fora do tema, avise educadamente que você responde apenas sobre o time de CS da FURIA.

          Sempre incentive o fã a continuar explorando o universo FURIA!

          Sempre envie suas respostas no seguinte formato JSON:

          {
            "answer": "Texto da resposta principal aqui.",
            "questions": [
              "Primeira sugestão de nova pergunta",
              "Segunda sugestão de nova pergunta",
              "Terceira sugestão de nova pergunta"
            ]
          }

          Não adicione texto fora do JSON. Apenas envie o JSON puro.

`,
        },
        {
          role: 'user',
          name: userName,
          content: userMessage,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const rawResponse = response.choices[0].message?.content ?? '';
    const parsedResponse: OpenAIFormattedResponse = JSON.parse(rawResponse);

    return parsedResponse;
  } catch (error) {
    console.error('Erro ao chamar OpenAI:', error);
    return {
      answer: 'Opa! Tivemos um problema em nossa comunicação. Tente novamente!',
      questions: [],
    };
  }
}
