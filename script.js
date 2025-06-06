const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a conscientização sobre a homofobia pode ser integrada às celebrações da Semana Farroupilha, promovendo a diversidade cultural do Rio Grande do Sul?",
        alternativas: [
            {
                texto: "Podemos promover palestras e debates sobre inclusão e respeito Noà diversidade sexual em piquetes e eventos tradicionalistas.",
                afirmacao: [" Essas ações ajudariam a desmistificar preconceitos e a fortalecer a ideia de que a tradição gaúcha é acolhedora para todos.",
                    
                ]
            },
            {
                texto: "É possível desenvolver materiais educativos e campanhas informativas que utilizem elementos da cultura gaúcha.",
                afirmacao: ["Isso permitiria transmitir mensagens de combate à homofobia, alcançando um público amplo e consolidando valores de acolhimento.",
                   
                ]
            }
        ]
    },
    {
        enunciado: "Qual a importância de abordar a questão da homofobia ao discutir a preservação da fauna e flora nativas do Rio Grande do Sul, usando a Semana Farroupilha como pano de fundo?",
        alternativas: [
            {
                texto: "Ao defender a diversidade biológica, reforçamos o valor da diversidade em todas as suas formas.",
                afirmacao: ["Combater a homofobia alinha-se com a premissa de um ecossistema social inclusivo, onde todas as espécies (pessoas) são importantes para o equilíbrio.",
                ]
            },
            {
                texto: "Celebrar a Semana Farroupilha é valorizar a identidade gaúcha, que inclui um profundo respeito pela terra.",
                afirmacao: ["Essa valorização deve se estender a todas as formas de vida e a todos os indivíduos, independentemente de sua orientação sexual, para uma sociedade verdadeiramente harmoniosa e preservacionista."
                ]
            }
        ]
    },
    {
        enunciado: "Durante a Semana Farroupilha, de que forma a valorização das tradições pode ser utilizada para promover a empatia e combater a homofobia, mantendo a essência cultural gaúcha?",
        alternativas: [
            {
                texto: "Podemos destacar os valores de camaradagem, hospitalidade e união que são inerentes à cultura gaúcha.",
                afirmacao: ["Esses valores podem ser expandidos para incluir o respeito a todas as pessoas, independentemente de sua orientação sexual, mostrando que a tradição é inclusiva."
                ]
            },
            {
                texto: "É possível incorporar a temática da diversidade através de manifestações artísticas e culturais nos eventos farroupilhas, como peças teatrais ou apresentações musicais.",
                afirmacao: ["Essa abordagem sensibiliza o público de forma orgânica e positiva, promovendo a aceitação sem perder a autenticidade cultural."
                ]
            }
        ]
    },
    {
        enunciado: "Considerando a urgência da extinção de animais, como a celebração da Semana Farroupilha pode inspirar ações de conservação que também ressoem com a luta contra a homofobia?",
        alternativas: [
            {
                texto: "Ao celebrar a riqueza da cultura gaúcha, podemos estender essa valorização à riqueza da biodiversidade local.",
                afirmacao: ["Promover a conservação de espécies ameaçadas e, ao mesmo tempo, lutar contra a homofobia são atos de respeito à vida em suas diversas manifestações."
                ]
            },
            {
                texto: "A Semana Farroupilha representa um momento de união e mobilização da comunidade.",
                afirmacao: ["Essa energia pode ser canalizada para projetos de conservação ambiental que também abordem a importância da diversidade social, conectando a preservação do meio ambiente com a construção de uma sociedade mais justa e inclusiva."
                ]
            }
        ]
    },
    {
        enunciado: "De que maneira a luta contra a extinção de espécies e o combate à homofobia compartilham princípios éticos que podem ser enfatizados durante a Semana Farroupilha? ",
        alternativas: [
            {
                texto: "Ambos os movimentos são fundamentalmente baseados no respeito à vida e na valorização da diversidade.",
                afirmacao: "Enfatizar a importância de proteger todas as formas de vida (sejam espécies animais ou indivíduos LGBTQIA+) é um princípio ético universal que se alinha com os valores de humanidade e justiça."
            },
            {
                texto: "A ideia de preservar o que é nosso na Semana Farroupilha pode ser expandida para preservar o que é essencial para todos.",
                afirmacao: "Isso inclui tanto a biodiversidade do planeta quanto o direito de todas as pessoas existirem e serem respeitadas, fortalecendo a coesão social e ambiental."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();