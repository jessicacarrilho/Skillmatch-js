//Projeto Skillmatch-JS - Simulador de compatibilidade entre candidatos e vagas Front-End Júnior.
//Autor(a): Jessica de Castro Vasconcelos Carrilho
//=======================================================================================
//Dados do candidato e das vagas disponíveis
const candidato = {
    nome: "Mariana Silva",
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    experienciaMeses: 3
};

const vagas = [
    {
        id: 1,
        empresa: "TechStart",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "Lógica de Programação", "GitHub", "Kanban"],
        salario: 2800,
        modalidade: "Remoto",

    },
    {
        id: 2,
        empresa: "CodeLab",
        cargo: "Estágio Front-End",
        requisitos: ["JavaScript", "Kanban", "GitHub", "HTML e CSS"],
        salario: 1500,
        modalidade: "Híbrido",

    },
    {
        id: 3,
        empresa: "WebSolutions",
        cargo: "Programador JavaScript Júnior",
        requisitos: ["JavaScript", "Arrays", "Objetos", "Funções"],
        salario: 3000,
        modalidade: "Presencial",

    }
];
// Calculo da compatibilidade entre o candidato e as vagas

const vagasCompativeis = vagas.map(vaga => {
    const habilidadesEncontradas = vaga.requisitos.filter(requisito =>
        candidato.habilidades.includes(requisito)
    );
    const habilidadesFaltantes = vaga.requisitos.filter(requisito =>
        !candidato.habilidades.includes(requisito)
    );

    const compatibilidade = habilidadesEncontradas.length / vaga.requisitos.length * 100;

    let classificacao;
    if (compatibilidade >= 80) {
        classificacao = "Alta";
    } else if (compatibilidade >= 50) {
        classificacao = "Média";
    } else {
        classificacao = "Baixa";
    }
    return {
        ...vaga,
        compatibilidade,
        classificacao,
        habilidadesEncontradas,
        habilidadesFaltantes
    };
});
// Exibição dos resultados

console.log(`Vagas compatíveis para ${candidato.nome}:\n`);
vagasCompativeis.forEach((vaga, index) => {
    console.log(`${index + 1}. ${vaga.cargo} na ${vaga.empresa}`);
    console.log(`Salário: R$ ${vaga.salario} | Modalidade: ${vaga.modalidade}`);
    console.log(`Compatibilidade: ${vaga.compatibilidade}%`);
    console.log(`Classificação: ${vaga.classificacao}`);
    console.log(`Habilidades encontradas: ${vaga.habilidadesEncontradas.join(", ")}`);
    console.log(`Habilidades faltantes: ${vaga.habilidadesFaltantes.length > 0 ? vaga.habilidadesFaltantes.join(", ") : "Nenhuma"}`);
    console.log(" ");
});
