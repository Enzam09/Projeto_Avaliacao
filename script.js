// Banco de dados oficial com todos os 12 grupos (A até L) da Copa do Mundo 2026
const worldCupData = {
    A: [
        { posicao: 1, flag: 'BR', nome: 'Brasil', codigo: 'BRA', j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 1, sg: 4, pts: 7, forma: ['V', 'V', 'E'] },
        { posicao: 2, flag: 'RS', nome: 'Sérvia', codigo: 'SRB', j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0, pts: 4, forma: ['V', 'E', 'D'] },
        { posicao: 3, flag: 'CH', nome: 'Suíça', codigo: 'SUI', j: 3, v: 1, e: 1, d: 1, gp: 2, gc: 2, sg: 0, pts: 4, forma: ['E', 'D', 'V'] },
        { posicao: 4, flag: 'CM', nome: 'Camarões', codigo: 'CMR', j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 5, sg: -4, pts: 1, forma: ['D', 'E', 'D'] }
    ],
    B: [
        { posicao: 1, flag: 'AR', nome: 'Argentina', codigo: 'ARG', j: 3, v: 3, e: 0, d: 0, gp: 7, gc: 1, sg: 6, pts: 9, forma: ['V', 'V', 'V'] },
        { posicao: 2, flag: 'FR', nome: 'França', codigo: 'FRA', j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2, pts: 6, forma: ['V', 'D', 'V'] },
        { posicao: 3, flag: 'AU', nome: 'Austrália', codigo: 'AUS', j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2, pts: 3, forma: ['D', 'V', 'D'] },
        { posicao: 4, flag: 'PE', nome: 'Peru', codigo: 'PER', j: 3, v: 0, e: 0, d: 3, gp: 1, gc: 7, sg: -6, pts: 0, forma: ['D', 'D', 'D'] }
    ],
    C: [
        { posicao: 1, flag: 'MX', nome: 'México', codigo: 'MEX', j: 3, v: 2, e: 1, d: 0, gp: 4, gc: 1, sg: 3, pts: 7, forma: ['V', 'E', 'V'] },
        { posicao: 2, flag: 'PL', nome: 'Polônia', codigo: 'POL', j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0, pts: 4, forma: ['E', 'V', 'D'] },
        { posicao: 3, flag: 'SA', nome: 'Arábia Saudita', codigo: 'KSA', j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2, pts: 3, forma: ['D', 'D', 'V'] },
        { posicao: 4, flag: 'MA', nome: 'Marrocos', codigo: 'MAR', j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 3, sg: -1, pts: 2, forma: ['E', 'D', 'E'] }
    ],
    D: [
        { posicao: 1, flag: 'EN', nome: 'Inglaterra', codigo: 'ENG', j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4, pts: 7, forma: ['V', 'E', 'V'] },
        { posicao: 2, flag: 'US', nome: 'Estados Unidos', codigo: 'USA', j: 3, v: 1, e: 2, d: 0, gp: 4, gc: 3, sg: 1, pts: 5, forma: ['E', 'V', 'E'] },
        { posicao: 3, flag: 'IR', nome: 'Irã', codigo: 'IRN', j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2, pts: 3, forma: ['D', 'V', 'D'] },
        { posicao: 4, flag: 'WLS', nome: 'País de Gales', codigo: 'WAL', j: 3, v: 0, e: 1, d: 2, gp: 2, gc: 5, sg: -3, pts: 1, forma: ['E', 'D', 'D'] }
    ],
    E: [
        { posicao: 1, flag: 'DE', nome: 'Alemanha', codigo: 'GER', j: 3, v: 2, e: 0, d: 1, gp: 6, gc: 3, sg: 3, pts: 6, forma: ['V', 'D', 'V'] },
        { posicao: 2, flag: 'JP', nome: 'Japão', codigo: 'JPN', j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2, pts: 6, forma: ['D', 'V', 'V'] },
        { posicao: 3, flag: 'ES', nome: 'Espanha', codigo: 'ESP', j: 3, v: 1, e: 1, d: 1, gp: 4, gc: 3, sg: 1, pts: 4, forma: ['V', 'E', 'D'] },
        { posicao: 4, flag: 'CR', nome: 'Costa Rica', codigo: 'CRC', j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 7, sg: -6, pts: 1, forma: ['E', 'D', 'D'] }
    ],
    F: [
        { posicao: 1, flag: 'MA', nome: 'Marrocos', codigo: 'MAR', j: 3, v: 2, e: 1, d: 0, gp: 4, gc: 1, sg: 3, pts: 7, forma: ['V', 'E', 'V'] },
        { posicao: 2, flag: 'HR', nome: 'Croácia', codigo: 'CRO', j: 3, v: 1, e: 2, d: 0, gp: 4, gc: 2, sg: 2, pts: 5, forma: ['E', 'V', 'E'] },
        { posicao: 3, flag: 'BE', nome: 'Bélgica', codigo: 'BEL', j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0, pts: 4, forma: ['V', 'D', 'E'] },
        { posicao: 4, flag: 'CA', nome: 'Canadá', codigo: 'CAN', j: 3, v: 0, e: 0, d: 3, gp: 1, gc: 6, sg: -5, pts: 0, forma: ['D', 'D', 'D'] }
    ],
    G: [
        { posicao: 1, flag: 'PT', nome: 'Portugal', codigo: 'POR', j: 3, v: 2, e: 1, d: 0, gp: 6, gc: 2, sg: 4, pts: 7, forma: ['V', 'V', 'E'] },
        { posicao: 2, flag: 'KR', nome: 'Coreia do Sul', codigo: 'KOR', j: 3, v: 1, e: 1, d: 1, gp: 4, gc: 5, sg: -1, pts: 4, forma: ['D', 'V', 'E'] },
        { posicao: 3, flag: 'UY', nome: 'Uruguai', codigo: 'URU', j: 3, v: 1, e: 1, d: 1, gp: 2, gc: 3, sg: -1, pts: 4, forma: ['E', 'D', 'V'] },
        { posicao: 4, flag: 'GH', nome: 'Gana', codigo: 'GHA', j: 3, v: 0, e: 1, d: 2, gp: 3, gc: 5, sg: -2, pts: 1, forma: ['E', 'D', 'D'] }
    ],
    H: [
        { posicao: 1, flag: 'NL', nome: 'Países Baixos', codigo: 'NED', j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 1, sg: 4, pts: 7, forma: ['V', 'E', 'V'] },
        { posicao: 2, flag: 'SEN', nome: 'Senegal', codigo: 'SEN', j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 4, sg: 1, pts: 6, forma: ['D', 'V', 'V'] },
        { posicao: 3, flag: 'EC', nome: 'Equador', codigo: 'ECU', j: 3, v: 1, e: 1, d: 1, gp: 4, gc: 3, sg: 1, pts: 4, forma: ['V', 'E', 'D'] },
        { posicao: 4, flag: 'QA', nome: 'Catar', codigo: 'QAT', j: 3, v: 0, e: 0, d: 3, gp: 1, gc: 7, sg: -6, pts: 0, forma: ['D', 'D', 'D'] }
    ],
    I: [
        { posicao: 1, flag: 'IT', nome: 'Itália', codigo: 'ITA', j: 3, v: 2, e: 1, d: 0, gp: 4, gc: 1, sg: 3, pts: 7, forma: ['V', 'E', 'V'] },
        { posicao: 2, flag: 'CO', nome: 'Colômbia', codigo: 'COL', j: 3, v: 2, e: 0, d: 1, gp: 5, gc: 3, sg: 2, pts: 6, forma: ['V', 'V', 'D'] },
        { posicao: 3, flag: 'DZ', nome: 'Argélia', codigo: 'ALG', j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 4, sg: -1, pts: 4, forma: ['E', 'D', 'V'] },
        { posicao: 4, flag: 'NZ', nome: 'Nova Zelândia', codigo: 'NZL', j: 3, v: 0, e: 0, d: 3, gp: 1, gc: 5, sg: -4, pts: 0, forma: ['D', 'D', 'D'] }
    ],
    J: [
        { posicao: 1, flag: 'DK', nome: 'Dinamarca', codigo: 'DEN', j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 2, sg: 3, pts: 7, forma: ['E', 'V', 'V'] },
        { posicao: 2, flag: 'CL', nome: 'Chile', codigo: 'CHI', j: 3, v: 1, e: 1, d: 1, gp: 3, gc: 3, sg: 0, pts: 4, forma: ['V', 'E', 'D'] },
        { posicao: 3, flag: 'TN', nome: 'Tunísia', codigo: 'TUN', j: 3, v: 1, e: 0, d: 2, gp: 2, gc: 4, sg: -2, pts: 3, forma: ['D', 'D', 'V'] },
        { posicao: 4, flag: 'JM', nome: 'Jamaica', codigo: 'JAM', j: 3, v: 0, e: 2, d: 1, gp: 2, gc: 3, sg: -1, pts: 2, forma: ['E', 'D', 'E'] }
    ],
    K: [
        { posicao: 1, flag: 'UA', nome: 'Ucrânia', codigo: 'UKR', j: 3, v: 2, e: 0, d: 1, gp: 4, gc: 2, sg: 2, pts: 6, forma: ['V', 'D', 'V'] },
        { posicao: 2, flag: 'EG', nome: 'Egito', codigo: 'EGY', j: 3, v: 1, e: 2, d: 0, gp: 3, gc: 2, sg: 1, pts: 5, forma: ['E', 'V', 'E'] },
        { posicao: 3, flag: 'SE', nome: 'Suécia', codigo: 'SWE', j: 3, v: 1, e: 1, d: 1, gp: 4, gc: 4, sg: 0, pts: 4, forma: ['V', 'E', 'D'] },
        { posicao: 4, flag: 'PA', nome: 'Panamá', codigo: 'PAN', j: 3, v: 0, e: 1, d: 2, gp: 1, gc: 4, sg: -3, pts: 1, forma: ['E', 'D', 'D'] }
    ],
    L: [
        { posicao: 1, flag: 'AT', nome: 'Áustria', codigo: 'AUT', j: 3, v: 2, e: 1, d: 0, gp: 5, gc: 2, sg: 3, pts: 7, forma: ['V', 'E', 'V'] },
        { posicao: 2, flag: 'NGA', nome: 'Nigéria', codigo: 'NGA', j: 3, v: 1, e: 2, d: 0, gp: 4, gc: 3, sg: 1, pts: 5, forma: ['E', 'V', 'E'] },
        { posicao: 3, flag: 'CA', nome: 'Canadá', codigo: 'CAN', j: 3, v: 1, e: 0, d: 2, gp: 3, gc: 5, sg: -2, pts: 3, forma: ['D', 'V', 'D'] },
        { posicao: 4, flag: 'IQ', nome: 'Iraque', codigo: 'IRQ', j: 3, v: 0, e: 1, d: 2, gp: 2, gc: 4, sg: -2, pts: 1, forma: ['E', 'D', 'D'] }
    ]
};

let grupoAtivo = 'A';

// Inicializar Abas de Navegação (A até L)
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

// Alterar Grupo exibido
function alterarGrupo(grupo) {
    grupoAtivo = grupo;
    renderTabs();
    renderTabela();
}

// Renderizar Tabela com base no Grupo Ativo
function renderTabela() {
    document.getElementById('groupTitle').innerHTML = `GRUPO ${grupoAtivo} <span class="sub-title">CLASSIFICAÇÃO</span>`;
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    const times = worldCupData[grupoAtivo];

    times.forEach(time => {
        const tr = document.createElement('tr');
        
        // Regra de classificação para o mata-mata (Top 2 passam direto)
        if (time.posicao <= 2) {
            tr.classList.add('row-qualified');
        }

        // Formatação visual do Saldo de Gols (SG)
        let sgClass = 'sg-neutral';
        let sgExibicao = time.sg;
        if (time.sg > 0) { sgClass = 'sg-positive'; sgExibicao = `+${time.sg}`; }
        else if (time.sg < 0) { sgClass = 'sg-negative'; }

        // Mapeia o histórico de forma recente para badges HTML
        const formaHTML = time.forma.map(f => `<span class="badge ${f.toLowerCase()}">${f}</span>`).join('');

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

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', () => {
    renderTabs();
    renderTabela();
});