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

//Vaga mais compatível com o perfil do candidato

class vaga{
    constructor(id, empresa, cargo, requisitos, salario, modalidade){
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }
}

const melhorVaga = new vaga("id: 1", "TechStart", "Desenvolvedor Front-End Júnior", ["JavaScript", "Lógica de Programação", "GitHub", "Kanban"], 2800, "Remoto");


console.log(`A vaga mais compatível para ${candidato.nome} é:`);
console.log(`${melhorVaga.cargo} na empresa ${melhorVaga.empresa}`);
console.log(`Salário: R$ ${melhorVaga.salario} | Modalidade: ${melhorVaga.modalidade}`);

//Sugestão de estudo para o candidato melhorar a compatibilidade com as vagas

class sugestaoestudo extends vaga{
    constructor(id, empresa, cargo, requisitos, salario, modalidade){
        super(id, empresa, cargo, requisitos, salario, modalidade);
    }   
}
const sugestao = new sugestaoestudo("id: 3", "WebSolutions", "Programador JavaScript Júnior", ["JavaScript", "Arrays", "Objetos", "Funções"], 3000, "Presencial");

console.log(`\n Sugestão de estudo para ${candidato.nome}:`);
console.log(`Para aumentar a compatibilidade com a vaga de ${sugestao.cargo} na empresa ${sugestao.empresa}, é recomendado estudar os seguintes tópicos:`);
console.log(sugestao.requisitos.filter(requisito => !candidato.habilidades.includes(requisito)).join(", "));
    
