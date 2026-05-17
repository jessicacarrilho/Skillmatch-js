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

console.log(`Vagas compatíveis para ${candidato.nome}:\n`);
vagasCompativeis.forEach((vaga, index) => {
    console.log(`${index + 1}. ${vaga.cargo} na empresa ${vaga.empresa}`);
    console.log(`Salário: R$ ${vaga.salario} | Modalidade: ${vaga.modalidade}`);
    console.log(`Compatibilidade: ${vaga.compatibilidade}%`);
    console.log(`Classificação: ${vaga.classificacao}`);
    console.log(`Habilidades encontradas: ${vaga.habilidadesEncontradas.join(", ")}`);
    console.log(`Habilidades faltantes: ${vaga.habilidadesFaltantes.length > 0 ? vaga.habilidadesFaltantes.join(", ") : "Nenhuma"}`);
    console.log(" ");
});

//Vaga mais compatível

const vagaMaisCompatível = vagasCompativeis.reduce((maisCompatível, vagaAtual) => {
    return vagaAtual.compatibilidade > maisCompatível.compatibilidade ? vagaAtual : maisCompatível;
}, vagasCompativeis[0]);

console.log(`Vaga mais compatível para ${candidato.nome}:\n`);
console.log(`Compatibilidade: ${vagaMaisCompatível.compatibilidade}% | Classificação: ${vagaMaisCompatível.classificacao}`);
console.log(`${vagaMaisCompatível.cargo} na empresa ${vagaMaisCompatível.empresa}`);
console.log(`Salário: R$ ${vagaMaisCompatível.salario} | Modalidade: ${vagaMaisCompatível.modalidade}`);

//Sugestão de estudo para o candidato, com base nas habilidades faltantes da vaga mais compatível.
const habilidadesFaltantes = vagaMaisCompatível.habilidadesFaltantes;
if (habilidadesFaltantes.length > 0) {
    console.log(`\nPara aumentar suas chances de conseguir a vaga mais compatível, ${candidato.nome} pode focar em estudar as seguintes habilidades:`);
    habilidadesFaltantes.forEach(habilidade => {
        console.log(`- ${habilidade}`);
    });
} else {
    console.log(`\nParabéns, ${candidato.nome}! Você possui todas as habilidades necessárias para a vaga mais compatível.`);
}   

class vaga {
    constructor(empresa, cargo, requisitos, salario, modalidade) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }
    exibirResumo() {
        console.log(`Empresa: ${this.empresa}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Requisitos: ${this.requisitos.join(", ")}`);
        console.log(`Salário: R$ ${this.salario}`);
        console.log(`Modalidade: ${this.modalidade}`);
    }


        }
    