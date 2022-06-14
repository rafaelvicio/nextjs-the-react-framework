// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export default async function handler(req, res) {
  await sleep(1000)

  const posts = [
    {
      id: 0,
      title:
        'Brand Experience: o que te faz se sentir junto mesmo estando longe?',
      description:
        'O que a ciência diz sobre Brand Experience (BX) e como colocamos em prática para fortalecer nossa cultura remote first.',
      link:
        'https://blog.novatics.com.br/brand-experience-o-que-te-faz-se-sentir-junto-mesmo-estando-longe-1ee6432bf70d',
      Author: 'Maria Antonia Zanta Nobre',
      image: '/1.png',
    },
    {
      id: 1,
      title: 'Desbravando o mundo das facilitações completamente remotas',
      description:
        'Todo mundo já cansou de ler e ouvir sobre o "novo normal", mas espero que você possa tirar algumas boas ideias do meu relato sobre facilitar uma Design Sprint em um contexto de pandemia e isolamento social mandatório.',
      link:
        'https://blog.novatics.com.br/desbravando-o-mundo-das-facilita%C3%A7%C3%B5es-completamente-remotas-a816927903f3',
      Author: 'Gabriel Corá',
      image: '/2.png',
    },
    {
      id: 2,
      title: 'O que é BPMN e como ela pode te ajudar a ser um DEV melhor',
      description:
        'BPMN é um acrônimo para Business Process Model Notation, uma notação criada e aprimorada pela OMG (Object Management Group), uma associação sem fins lucrativos responsável por desenvolver padrão e especificações na área da tecnologia, dentre elas também a notação UML.',
      link:
        'https://blog.novatics.com.br/o-que-%C3%A9-bpmn-e-como-ela-pode-te-ajudar-a-ser-um-dev-melhor-9d41ad55003e',
      Author: 'Matheus Gonçalves',
      image: '/3.png',
    },
  ]

  res.status(200).json(posts)
}
