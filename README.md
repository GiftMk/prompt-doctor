# Prompt Doctor

Improve your LLM prompts based on [OpenAI's guidelines]("https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-the-openai-api";).

## Getting Started

- First install dependencies

```bash
pnpm install
```

- Create a `.env` file at the repository root and add your OpenAI api key and a six character long password

```
OPENAI_API_KEY=<your api key>
PROMPT_DOCTOR_PASSWORD=abc123
```

- Then, run the development server

```bash
pnpm dev
```
