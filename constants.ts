
import { EventDay, FAQItem } from './types';

export const EVENT_DAYS: EventDay[] = [
  {
    date: '11/03',
    dayLabel: 'Quarta-feira',
    theme: 'Chegada e Boas-vindas',
    activities: [
      { time: '11:00', title: 'Início do Transfer In', description: 'Serviço de traslado Aeroporto/Hotel disponível.', location: 'Aeroporto / Lobby', type: 'Networking' },
      { time: '15:00', title: 'Check-in no Resort', description: 'Acomodação dos congressistas nos quartos.', location: 'Recepção', type: 'Break' },
      { time: '19:00', title: 'Limite Transfer In', description: 'Encerramento do serviço de traslado de chegada.', location: 'Aeroporto', type: 'Networking' },
      { 
        time: '21:00', 
        title: 'Celebração de Abertura', 
        description: 'Abertura Especial + Show Bruno Galba. Dress Code: Traje Social Leve.', 
        location: 'Auditório da Plenária', 
        type: 'Networking' 
      },
    ]
  },
  {
    date: '12/03',
    dayLabel: 'Quinta-feira',
    theme: 'Implantes Hormonais e Terapias Endócrinas - Segurança e Personalização',
    activities: [
      { time: '08:30', title: 'ABERTURA OFICIAL', description: 'Início oficial dos trabalhos científicos.', location: 'Auditório da Plenária', type: 'Keynote' },
      { time: '09:00', title: 'Desmistificando os detalhes técnicos e regulatórios', description: 'Palestra técnica sobre regulação.', location: 'Auditório da Plenária', speaker: 'Dr. Wilson Saback', type: 'Keynote' },
      { time: '09:20', title: 'Progesterona x Progestina na TH', description: 'Análise comparativa em terapias hormonais.', location: 'Auditório da Plenária', speaker: 'Dr. Leonardo Jacobsen', moderator: 'Dra. Ana Paula Leal', type: 'Keynote' },
      { time: '09:50', title: 'Lipedema', description: 'Discussão clínica sobre lipedema.', location: 'Auditório da Plenária', speaker: 'Dr. Thales Medeiros, Dr. Diogo Vianna', moderator: 'Dr. Guilherme Renke', type: 'Panel' },
      { time: '10:40', title: 'Endometriose', description: 'Abordagens modernas no tratamento.', location: 'Auditório da Plenária', speaker: 'Dr. Ricardo Pereira', type: 'Keynote' },
      { time: '11:00', title: 'COFFEE-BREAK', description: 'Intervalo para networking na EXPO ENATIH.', location: 'Expo ENATIH', type: 'Break' },
      { time: '11:50', title: 'IMPLANTES NA TH FEMININA', description: 'Período reprodutivo, perimenopausa e situações especiais.', location: 'Auditório da Plenária', speaker: 'Dr. Walter Pace, Dr. Ricardo Barone', moderator: 'Dr. Luiz Carlos Calmon', type: 'Panel' },
      { time: '13:30', title: 'ALMOÇO', description: 'Serviço no Restaurante Principal.', location: 'Restaurante Principal', type: 'Break' },
      { time: '15:00', title: 'Segurança no uso dos implantes hormonais', description: 'Androgênicos, risco CV e segurança jurídica na prescrição.', location: 'Auditório da Plenária', speaker: 'Dr. Guilherme Renke, Dr. Lymark Komaroff', moderator: 'Dra. Consuelo Callizo', type: 'Panel' },
      { time: '16:00', title: 'Gestrinona e seu impacto na Fertilidade Feminina', description: 'Discussão sobre impactos reprodutivos.', location: 'Auditório da Plenária', speaker: 'Dr. Caio Parente', moderator: 'Dr. Walter Pace', type: 'Keynote' },
      { time: '16:30', title: 'Sarcopenia / Osteopenia', description: 'Manejo de sarcopenia e osteosarcopenia com Nandrolona e ativos.', location: 'Auditório da Plenária', speaker: 'Dr. Henrique Barreto, Dr. Minnuzzi', moderator: 'Dra. Clarice Haddad', type: 'Panel' },
      { time: '17:10', title: 'Estroboloma', description: 'Saúde intestinal e hormônios.', location: 'Auditório da Plenária', speaker: 'Dr. Murilo Pereira', moderator: 'Dra. Juliane Lotuffo', type: 'Keynote' },
    ]
  },
  {
    date: '13/03',
    dayLabel: 'Sexta-feira',
    theme: 'Longevidade - para além de viver mais, viver melhor!',
    activities: [
      { time: '08:30', title: 'Terapias suplementares', description: 'Microbioma e preparo gastrointestinal com injetáveis.', location: 'Auditório da Plenária', speaker: 'Dr. Felipo Pedrinola, Dra. Thamires', moderator: 'Dr. Sang Cha', type: 'Panel' },
      { time: '09:30', title: 'Estradiol - Novas Evidências no Uso para Proteção Cerebral', description: 'Neuroproteção e terapias hormonais.', location: 'Auditório da Plenária', speaker: 'Dr. Diogo Vianna', moderator: 'Dr. Ricardo Barone', type: 'Keynote' },
      { time: '10:00', title: 'Uso de testosterona na TH Feminina', description: 'Protocolos e evidências.', location: 'Auditório da Plenária', speaker: 'Dr. Leonardo Jacobsen', moderator: 'Dra. Ana Paula Leal', type: 'Keynote' },
      { time: '10:30', title: 'Menstruação, a Sangria Inútil - 30 anos de uma revolução', description: 'Homenagem e revisão científica.', location: 'Auditório da Plenária', speaker: 'Dr. Walter Pace', moderator: 'Dra. Consuelo Callizo', type: 'Keynote' },
      { time: '11:00', title: 'COFFEE-BREAK', description: 'Intervalo para networking.', location: 'Expo ENATIH', type: 'Break' },
      { time: '11:30', title: 'PAINEL INTERNACIONAL', description: 'Atualizações globais em terapias hormonais.', location: 'Auditório da Plenária', speaker: 'Dr. Tamer Erel', moderator: 'Dr. Guilherme Renke', type: 'Panel' },
      { time: '12:30', title: 'A segurança dos Implantes de Silástico', description: 'Discussão sobre materiais e segurança.', location: 'Auditório da Plenária', speaker: 'Dr. Wilson Saback, Dra. Consuelo Callizo', type: 'Panel' },
      { time: '13:00', title: 'Estratificação Cardiovascular pré TH', description: 'Avaliação de risco CV.', location: 'Auditório da Plenária', speaker: 'Dra. Aline Silveira Renke', moderator: 'Dr. Thales Medeiros', type: 'Keynote' },
      { time: '13:30', title: 'ALMOÇO', description: 'Restaurante Principal.', location: 'Restaurante Principal', type: 'Break' },
      { time: '15:00', title: 'IA na Medicina', description: 'Inteligência Artificial aplicada à prática clínica.', location: 'Auditório da Plenária', speaker: 'Dr. Carlos Lopes', moderator: 'Dr. Luiz Calmon', type: 'Keynote' },
      { time: '15:50', title: 'Combate à Obesidade', description: 'Associação de TH aos Análogos de GLP-1 e manejo de colaterais.', location: 'Auditório da Plenária', speaker: 'Dr. Thales Medeiros, Dr. Guilherme Renke', moderator: 'Dr. Henrique Barreto', type: 'Panel' },
      { time: '16:40', title: 'Terapias Regenerativas', description: 'Células Tronco na regeneração ovariana e peptídeos FDA.', location: 'Auditório da Plenária', speaker: 'Dr. Sang Cha, Dr. Guilherme Renke', moderator: 'Clarice Haddad', type: 'Panel' },
    ]
  },
  {
    date: '14/03',
    dayLabel: 'Sábado',
    theme: 'Prática Clínica e Gestão',
    activities: [
      { time: '08:30', title: 'Gestão de Consultório', description: 'Estratégias de gestão para médicos.', location: 'Auditório da Plenária', speaker: 'Rogério Magalhães', type: 'Keynote' },
      { time: '09:00', title: 'Temas Recorrentes na prática clínica da Ginecologia', description: 'Climatério, Monitoramento, SOP e SUA.', location: 'Auditório da Plenária', speaker: 'Dra. Juliane Lotuffo, Dra. Ana Paula Leal, Dra. Cinthia Fonseca, Dra. Juliana Paolo', moderator: 'Dra. Consuelo Callizo', type: 'Panel' },
      { time: '10:30', title: 'Terapia Hormonal Masculina', description: 'Uso de pellets e alternativas.', location: 'Auditório da Plenária', speaker: 'Dra. Clarice Haddad', moderator: 'Dr. Ricardo Barone', type: 'Keynote' },
      { time: '11:00', title: 'COFFEE-BREAK', description: 'Networking final na EXPO.', location: 'Expo ENATIH', type: 'Break' },
      { time: '11:30', title: 'PAINEL INTERNACIONAL', description: 'Perda ponderal GLP-1 e flacidez vulvar: desafios.', location: 'Auditório da Plenária', speaker: 'Dra. Belisa Vides', moderator: 'Dr. José Antônio Zelaquete', type: 'Panel' },
      { time: '12:00', title: 'Terapias Hormonais e Cirurgias Íntimas', description: 'Análise antropológica e impacto da modulação hormonal.', location: 'Auditório da Plenária', speaker: 'Dr. José Antônio Zelaquete, Dra. Ana Luisa Pace', type: 'Panel' },
      { time: '13:00', title: 'Metabolômica dos esteroides', description: 'Quando a via importa mais que a dose.', location: 'Auditório da Plenária', speaker: 'Dr. Antonio Pacileo', moderator: 'Dr. Sang Cha', type: 'Keynote' },
      { time: '13:30', title: 'ALMOÇO DE ENCERRAMENTO', description: 'Restaurante Principal.', location: 'Restaurante Principal', type: 'Break' },
      { 
        time: '21:00', 
        title: 'Celebração de Encerramento', 
        description: 'Shows Negra Cor/Adelmo Cazé + DJ Papau. Dress Code: Azul e Branco / Resort Chic.', 
        location: 'Auditório da Plenária', 
        type: 'Networking' 
      },
    ]
  },
  {
    date: '15/03',
    dayLabel: 'Domingo',
    theme: 'Retorno e Check-out',
    activities: [
      { time: '06:00', title: 'Início Transfer Out', description: 'Traslados de hora em hora por ordem de chegada.', location: 'Lobby', type: 'Networking' },
      { time: '12:00', title: 'Limite Check-out', description: 'Horário máximo para liberação dos quartos.', location: 'Recepção', type: 'Break' },
      { time: '14:00', title: 'Fim do Transfer Out', description: 'Última saída do serviço de traslado para o aeroporto.', location: 'Lobby', type: 'Networking' },
    ]
  }
];

export const IMPORTANT_INFO: FAQItem[] = [
  { category: 'Logística', question: 'Conectividade', answer: 'Use o WI-FI da Costa de Sauípe selecionando a rede “Aviva”, mediante cadastro.', icon: 'fa-wifi' },
  { category: 'Logística', question: 'Crachá', answer: 'Acesso mediante crachá. Acompanhantes não têm acesso às atividades científicas.', icon: 'fa-id-card' },
  { category: 'Logística', question: 'Climatização', answer: 'A plenária possui ar condicionado central. Previna-se com um casaco leve ou estola.', icon: 'fa-snowflake' },
  { category: 'Serviços', question: 'Coffee-Break', answer: 'Servido no espaço da EXPO ENATIH durante os intervalos da programação científica.', icon: 'fa-coffee' },
  { category: 'Serviços', question: 'Memorial Elsimar Coutinho', answer: 'Homenagem ao Professor Dr. Elsimar Coutinho localizada na área da recepção.', icon: 'fa-landmark' },
  { category: 'Serviços', question: 'Espaço do Conhecimento', answer: 'Livros do Dr. Elsimar Coutinho disponíveis no estande da CEPARH na EXPO ENATIH.', icon: 'fa-book-open' },
  { 
    category: 'Logística', 
    question: 'Transporte Cortesia (Transfer Out)', 
    answer: 'Saída recomendada 4h antes do voo. Domingos das 06h às 14h.', 
    icon: 'fa-bus-alt' 
  },
  { category: 'Logística', question: 'Entrada e Saída', answer: 'Check-in a partir das 15h. Check-out até às 12h.', icon: 'fa-door-open' },
  { category: 'Saúde', question: 'Saúde 24h', answer: 'Serviço de ambulância disponível 24h durante todo o evento.', icon: 'fa-ambulance' },
  { category: 'Logística', question: 'Acesso aos Quartos', answer: 'Perda de pulseira ou cartão gera taxa de R$100,00 paga pelo participante.', icon: 'fa-key' },
  { category: 'Logística', question: 'Energia Elétrica', answer: 'Todas as tomadas do complexo Costa de Sauípe são 220V.', icon: 'fa-bolt' },
  { category: 'Logística', question: 'Transporte Interno', answer: 'Transfer gratuito a cada 25 minutos no complexo.', icon: 'fa-shuttle-van' },
];

export const GASTRONOMY_DATA = [
  {
    title: 'Restaurante Principal | Refeições',
    items: [
      { label: 'Café da manhã', time: '07h às 10h30' },
      { label: 'Almoço', time: '12h30 às 15h' },
      { label: 'Jantar', time: '19h às 22h' },
      { label: 'Ceia', time: '23h às 5h' }
    ]
  },
  {
    title: 'Bares e Lanches',
    items: [
      { label: 'Bar do Lobby', time: '10h às 01h', details: 'Drinks, vinhos, chopp e refrigerantes' },
      { label: 'Cafeteria', time: '24h', details: 'Autosserviço de 23h às 08h. Cafés e salgados.' },
      { label: 'Bar da Piscina', time: '10h às 18h', details: 'Pizza, churrasco e petiscos especiais' },
      { label: 'Baiana do Acarajé', time: '12h30 às 14h30', details: 'Acarajé, abará e cocada na piscina' },
      { label: 'Bar da Orla (Drinks)', time: '09h às 17h', details: 'Água de coco e bebidas alcoólicas' },
      { label: 'Bar da Orla (Food)', time: '10h30 às 17h', details: 'Açaí, pipoca e saladas de frutas' }
    ]
  }
];
