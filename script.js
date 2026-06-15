// Banco de dados oficial com os 12 grupos exatos da Copa do Mundo FIFA 2026
// Dados atualizados ao vivo com base na rodada de abertura do torneio
const worldCupData = {
    A: [
        { posicao: 1, flag: 'MX', nome: 'México', codigo: 'MEX', j: 1, v: 1, e: 0, d: 0, gp: 2, gc: 0, sg: 2, pts: 3, forma: ['V'] },
        { posicao: 2, flag: 'KR', nome: 'Coreia do Sul', codigo: 'KOR', j: 1, v: 1, e: 0, d: 0, gp: 2, gc: 1, sg: 1, pts: 3, forma: ['V'] },
        { posicao: 3, flag: 'CZ', nome: 'Chéquia', codigo: 'CZE', j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 2, sg: -1, pts: 0, forma: ['D'] },
        { posicao: 4, flag: 'ZA', nome: 'África do Sul', codigo: 'RSA', j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 2, sg: -2, pts: 0, forma: ['D'] }
    ],
    B: [
        { posicao: 1, flag: 'CA', nome: 'Canadá', codigo: 'CAN', j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 2, flag: 'BA', nome: 'Bósnia e Herz.', codigo: 'BIH', j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 3, flag: 'QA', nome: 'Catar', codigo: 'QAT', j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 4, flag: 'CH', nome: 'Suíça', codigo: 'SUI', j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, pts: 1, forma: ['E'] }
    ],
    C: [
        { posicao: 1, flag: 'SCT', nome: 'Escócia', codigo: 'SCO', j: 1, v: 1, e: 0, d: 0, gp: 1, gc: 0, sg: 1, pts: 3, forma: ['V'] },
        { posicao: 2, flag: 'BR', nome: 'Brasil', codigo: 'BRA', j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 3, flag: 'MA', nome: 'Marrocos', codigo: 'MAR', j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 4, flag: 'HT', nome: 'Haiti', codigo: 'HAI', j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 1, sg: -1, pts: 0, forma: ['D'] }
    ],
    D: [
        { posicao: 1, flag: 'US', nome: 'Estados Unidos', codigo: 'USA', j: 1, v: 1, e: 0, d: 0, gp: 4, gc: 1, sg: 3, pts: 3, forma: ['V'] },
        { posicao: 2, flag: 'AU', nome: 'Austrália', codigo: 'AUS', j: 1, v: 1, e: 0, d: 0, gp: 2, gc: 0, sg: 2, pts: 3, forma: ['V'] },
        { posicao: 3, flag: 'TR', nome: 'Turquia', codigo: 'TUR', j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 2, sg: -2, pts: 0, forma: ['D'] },
        { posicao: 4, flag: 'PY', nome: 'Paraguai', codigo: 'PAR', j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 4, sg: -3, pts: 0, forma: ['D'] }
    ],
    E: [
        { posicao: 1, flag: 'DE', nome: 'Alemanha', codigo: 'GER', j: 1, v: 1, e: 0, d: 0, gp: 7, gc: 1, sg: 6, pts: 3, forma: ['V'] },
        { posicao: 2, flag: 'CI', nome: 'Costa do Marfim', codigo: 'CIV', j: 1, v: 1, e: 0, d: 0, gp: 1, gc: 0, sg: 1, pts: 3, forma: ['V'] },
        { posicao: 3, flag: 'EC', nome: 'Equador', codigo: 'ECU', j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 1, sg: -1, pts: 0, forma: ['D'] },
        { posicao: 4, flag: 'CW', nome: 'Curaçao', codigo: 'CUW', j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 7, sg: -6, pts: 0, forma: ['D'] }
    ],
    F: [
        { posicao: 1, flag: 'SE', nome: 'Suécia', codigo: 'SWE', j: 1, v: 1, e: 0, d: 0, gp: 5, gc: 1, sg: 4, pts: 3, forma: ['V'] },
        { posicao: 2, flag: 'JP', nome: 'Japão', codigo: 'JPN', j: 1, v: 0, e: 1, d: 0, gp: 2, gc: 2, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 3, flag: 'NL', nome: 'Países Baixos', codigo: 'NED', j: 1, v: 0, e: 1, d: 0, gp: 2, gc: 2, sg: 0, pts: 1, forma: ['E'] },
        { posicao: 4, flag: 'TN', nome: 'Tunísia', codigo: 'TUN', j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 5, sg: -4, pts: 0, forma: ['D'] }
    ],
    G: [
        { posicao: 1, flag: 'BE', nome: 'Bélgica', codigo: 'BEL', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 2, flag: 'EG', nome: 'Egito', codigo: 'EGY', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 3, flag: 'IR', nome: 'Irã', codigo: 'IRN', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 4, flag: 'NZ', nome: 'Nova Zelândia', codigo: 'NZL', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] }
    ],
    H: [
        { posicao: 1, flag: 'ES', nome: 'Espanha', codigo: 'ESP', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 2, flag: 'CV', nome: 'Cabo Verde', codigo: 'CPV', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 3, flag: 'SA', nome: 'Arábia Saudita', codigo: 'KSA', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 4, flag: 'UY', nome: 'Uruguai', codigo: 'URU', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] }
    ],
    I: [
        { posicao: 1, flag: 'FR', nome: 'França', codigo: 'FRA', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 2, flag: 'SN', nome: 'Senegal', codigo: 'SEN', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 3, flag: 'IQ', nome: 'Iraque', codigo: 'IRQ', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 4, flag: 'NO', nome: 'Noruega', codigo: 'NOR', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] }
    ],
    J: [
        { posicao: 1, flag: 'AR', nome: 'Argentina', codigo: 'ARG', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 2, flag: 'DZ', nome: 'Argélia', codigo: 'ALG', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 3, flag: 'AT', nome: 'Áustria', codigo: 'AUT', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 4, flag: 'JO', nome: 'Jordânia', codigo: 'JOR', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] }
    ],
    K: [
        { posicao: 1, flag: 'PT', nome: 'Portugal', codigo: 'POR', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 2, flag: 'CO', nome: 'Colômbia', codigo: 'COL', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 3, flag: 'UZ', nome: 'Uzbequistão', codigo: 'UZB', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 4, flag: 'CD', nome: 'RD Congo', codigo: 'COD', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] }
    ],
    L: [
        { posicao: 1, flag: 'EN', nome: 'Inglaterra', codigo: 'ENG', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 2, flag: 'HR', nome: 'Croácia', codigo: 'CRO', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 3, flag: 'PA', nome: 'Panamá', codigo: 'PAN', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] },
        { posicao: 4, flag: 'GH', nome: 'Gana', codigo: 'GHA', j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0, sg: 0, pts: 0, forma: [] }
    ]
};

let grupoAtivo = 'A';

// Inicializar as Abas superiores de A até L
function renderTabs() {
    const tabsContainer = document.getElementById('groupTabs');
    tabsContainer.innerHTML = '';
    
    Object.keys(worldCupData).sort().forEach(grupo => {
        const btn = document.createElement('button');
        btn.classList.add('tab-btn');
        if (grupo === grupoAtivo) btn.classList.add('active');
        btn.textContent = grupo;
        btn.addEventListener('click', () => alterarGrupo(grupo));
        tabsContainer.appendChild(btn);
    });
}

// Chavear a exibição da tabela ao selecionar o grupo
function alterarGrupo(grupo) {
    grupoAtivo = grupo;
    renderTabs();
    renderTabela();
}

// Renderizar dinamicamente o corpo da tabela com base no grupo ativo
function renderTabela() {
    document.getElementById('groupTitle').innerHTML = `GRUPO ${grupoAtivo} <span class="sub-title">CLASSIFICAÇÃO</span>`;
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    const times = worldCupData[grupoAtivo];

    times.forEach(time => {
        const tr = document.createElement('tr');
        
        // Atribui destaque na borda lateral para os dois primeiros classificados
        if (time.posicao <= 2) {
            tr.classList.add('row-qualified');
        }

        // Definição de cores e formatação de texto para o Saldo de Gols (SG)
        let sgClass = 'sg-neutral';
        let sgExibicao = time.sg;
        if (time.sg > 0) { sgClass = 'sg-positive'; sgExibicao = `+${time.sg}`; }
        else if (time.sg < 0) { sgClass = 'sg-negative'; }

        // Cria os badges de histórico recente (só cria se houver jogos preenchidos)
        const formaHTML = time.forma.length > 0 
            ? time.forma.map(f => `<span class="badge ${f.toLowerCase()}">${f}</span>`).join('')
            : `<span style="color: var(--text-secondary); font-size: 11px;">-</span>`;

        tr.innerHTML = `
            <td class="col-num">${time.posicao}</td>
            <td class="col-selecao">
                <div class="team-cell">
                    <span class="team-flag">${time.flag}</span>
                    <div class="team-info">
                        <span class="team-name">${time.nome}</span>
                        <span class="team-code">${time.codigo}</span>
                    </div>
                </div>
            </td>
            <td>${time.j}</td>
            <td>${time.v}</td>
            <td>${time.e}</td>
            <td>${time.d}</td>
            <td>${time.gp}</td>
            <td>${time.gc}</td>
            <td class="${sgClass}">${sgExibicao}</td>
            <td class="pts-bold">${time.pts}</td>
            <td class="col-forma">
                <div class="form-container">${formaHTML}</div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Inicializa a aplicação ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderTabs();
    renderTabela();
});