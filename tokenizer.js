const winkNLP = (await import("https://cdn.skypack.dev/wink-nlp")).default;
const mod = (await import("https://cdn.skypack.dev/wink-eng-lite-web-model"))
  .default;
const nlp = winkNLP(mod);