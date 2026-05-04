/** Agrupamentos objetivos ligados aos cursos listados no Future Guide. */
export type CourseProfileId =
  | 'direito'
  | 'psicologia_pedagogia'
  | 'negocios'
  | 'medicina_odonto'
  | 'veterinaria'
  | 'saude_tecnica'
  | 'biologia'
  | 'ti_computacao'
  | 'engenharias'
  | 'arquitetura'
  | 'humanas_criativas'

export type ScoreMap = Partial<Record<CourseProfileId, number>>

export type QuizOption = {
  label: string
  scores: ScoreMap
}

export type QuizQuestion = {
  id: string
  title: string
  options: QuizOption[]
}

export type CourseProfile = {
  name: string
  summary: string
  examples: string
  employability: string
}

export const COURSE_PROFILES: Record<CourseProfileId, CourseProfile> = {
  direito: {
    name: 'Direito',
    summary:
      'Formação em leis, processo e argumentação. Caminho típico: estágio + OAB para advocacia; também atuação em empresas, setor público e concursos.',
    examples: 'Direito.',
    employability:
      'Mercado amplo e concorrido; estágio, idioma e área de atuação (trabalhista, empresarial, público) fazem diferença.',
  },
  psicologia_pedagogia: {
    name: 'Psicologia e Pedagogia',
    summary:
      'Foco em pessoas, aprendizagem e desenvolvimento. Psicologia costuma ter ênfase clínica ou organizacional; Pedagogia prepara para docência e gestão escolar.',
    examples: 'Psicologia, Pedagogia.',
    employability:
      'Psicologia e Pedagogia têm demanda em clínicas, escolas, RH e projetos sociais; confira o perfil do curso no e-MEC.',
  },
  negocios: {
    name: 'Administração, RH, Marketing e Ciências Contábeis',
    summary:
      'Gestão de empresas, pessoas, comunicação com mercado e contabilidade. Liga a cargos corporativos, empreendedorismo e áreas fiscal/financeira.',
    examples:
      'Administração, Gestão de Pessoas / RH, Marketing, Ciências Contábeis.',
    employability:
      'Boa inserção com estágio, Excel, noções de marketing digital e inglês; contábil e RH costumam ter vagas estáveis.',
  },
  medicina_odonto: {
    name: 'Medicina e Odontologia',
    summary:
      'Graduações longas, base em biociências e prática clínica supervisionada. Exigem dedicação intensa e, depois, residência ou especialização conforme a carreira.',
    examples: 'Medicina, Odontologia.',
    employability:
      'Alta procura em várias regiões; a vaga depende de rede pública/privada, especialização e localização.',
  },
  veterinaria: {
    name: 'Medicina Veterinária',
    summary:
      'Saúde animal, produção, clínica e sanidade. Combina biologia aplicada a campo, laboratório e consultório.',
    examples: 'Medicina Veterinária.',
    employability:
      'Demanda em clínicas, propriedades rurais, indústria e fiscalização; varia muito por região.',
  },
  saude_tecnica: {
    name: 'Enfermagem, Farmácia, Nutrição, Fisioterapia, Biomedicina e Educação Física',
    summary:
      'Cursos da saúde e do movimento com atuação técnica ou licenciada: cuidado ao paciente, medicamentos, alimentação, reabilitação, análises e ensino do esporte.',
    examples:
      'Enfermagem, Farmácia, Nutrição, Fisioterapia, Biomedicina, Educação Física.',
    employability:
      'Área da saúde costuma absorver bem esses perfis; concursos, rede privada e especialização ampliam opções.',
  },
  biologia: {
    name: 'Ciências Biológicas',
    summary:
      'Estudo da vida em diferentes níveis: ecologia, celular, molecular, ensino ou pesquisa. Pode abrir caminho para licenciatura, laboratório ou pós.',
    examples: 'Ciências Biológicas.',
    employability:
      'Mercado em pesquisa, ensino, ambiental e biotecnologia depende de formação complementar e região.',
  },
  ti_computacao: {
    name: 'ADS, Ciência da Computação e Engenharia de Computação',
    summary:
      'Software, sistemas, hardware e computação de alto nível. ADS costuma ser mais aplicado ao mercado; CC e Eng. Computação têm base matemática e de projeto fortes.',
    examples:
      'Análise e Desenvolvimento de Sistemas (ADS), Ciência da Computação, Engenharia de Computação.',
    employability:
      'TI segue aquecido; portfólio, inglês e estágio em empresa ou projeto real pesam muito.',
  },
  engenharias: {
    name: 'Engenharias (exceto Computação)',
    summary:
      'Projetos industriais, obras, processos químicos, produção e automação. Matemática e física aplicadas com normas e segurança.',
    examples:
      'Engenharia Civil, de Alimentos, de Produção, de Controle e Automação, Mecânica, Química.',
    employability:
      'Indústria, obras, consultorias e setor público; CREA e região influenciam a colocação.',
  },
  arquitetura: {
    name: 'Arquitetura e Urbanismo',
    summary:
      'Projeto de espaços, conforto ambiental, cidade e legislação urbanística. Mistura criatividade, desenho e técnica.',
    examples: 'Arquitetura e Urbanismo.',
    employability:
      'Escritórios, construtoras, setor público e freelance; mercado oscila com a construção civil.',
  },
  humanas_criativas: {
    name: 'Letras e Moda',
    summary:
      'Linguagem, literatura, comunicação escrita ou universo de vestuário, tendências e produção de moda.',
    examples: 'Letras, Moda.',
    employability:
      'Docência, edição, conteúdo digital, moda e negócios criativos; networking e portfólio ajudam.',
  },
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: 'curso_prioritario',
    title: 'Se você pudesse começar um desses cursos amanhã, qual escolheria primeiro?',
    options: [
      { label: 'Direito', scores: { direito: 5 } },
      {
        label: 'Psicologia ou Pedagogia',
        scores: { psicologia_pedagogia: 5 },
      },
      {
        label: 'Administração, RH, Marketing ou Ciências Contábeis',
        scores: { negocios: 5 },
      },
      {
        label: 'Medicina ou Odontologia',
        scores: { medicina_odonto: 5 },
      },
      {
        label: 'Medicina Veterinária',
        scores: { veterinaria: 5 },
      },
      {
        label:
          'Enfermagem, Farmácia, Nutrição, Fisioterapia, Biomedicina ou Educação Física',
        scores: { saude_tecnica: 5 },
      },
    ],
  },
  {
    id: 'segunda_opcao',
    title: 'E entre estas áreas, qual te atrai mais?',
    options: [
      { label: 'Ciências Biológicas', scores: { biologia: 5 } },
      {
        label: 'ADS, Ciência da Computação ou Engenharia de Computação',
        scores: { ti_computacao: 5 },
      },
      {
        label:
          'Engenharia Civil, de Alimentos, Produção, Controle e Automação, Mecânica ou Química',
        scores: { engenharias: 5 },
      },
      {
        label: 'Arquitetura e Urbanismo',
        scores: { arquitetura: 5 },
      },
      {
        label: 'Letras ou Moda',
        scores: { humanas_criativas: 5 },
      },
      {
        label: 'Ainda estou entre Direito e negócios (gestão, RH, contábil, marketing)',
        scores: { direito: 2, negocios: 3 },
      },
    ],
  },
  {
    id: 'rotina',
    title: 'Que rotina de trabalho você imagina com mais facilidade?',
    options: [
      {
        label: 'Tribunais, escritório jurídico ou assessoria em leis e contratos',
        scores: { direito: 4 },
      },
      {
        label: 'Clínica, escola ou apoio psicológico / educacional a pessoas',
        scores: { psicologia_pedagogia: 4, saude_tecnica: 1 },
      },
      {
        label: 'Empresa: metas, equipes, finanças, marketing ou contabilidade',
        scores: { negocios: 4 },
      },
      {
        label: 'Hospital, consultório médico ou odontológico',
        scores: { medicina_odonto: 4 },
      },
      {
        label: 'Clínica ou campo com animais; sanidade ou produção animal',
        scores: { veterinaria: 4 },
      },
      {
        label:
          'Hospital, farmácia, nutrição, fisioterapia, laboratório ou educação física aplicada',
        scores: { saude_tecnica: 4 },
      },
    ],
  },
  {
    id: 'conteudo',
    title: 'O que você teria mais paciência de estudar por anos?',
    options: [
      {
        label: 'Leis, jurisprudência e redação de peças',
        scores: { direito: 4 },
      },
      {
        label: 'Teorias da mente, desenvolvimento humano e práticas de ensino',
        scores: { psicologia_pedagogia: 4 },
      },
      {
        label: 'Matemática aplicada a obras, máquinas, processos ou automação',
        scores: { engenharias: 4, arquitetura: 1 },
      },
      {
        label: 'Programação, algoritmos, sistemas ou arquitetura de computadores',
        scores: { ti_computacao: 4 },
      },
      {
        label: 'Biologia, química e corpo humano (sem foco só em “ser médico”)',
        scores: { saude_tecnica: 3, biologia: 2 },
      },
      {
        label: 'Projeto de espaços, desenho, cidade e conforto ambiental',
        scores: { arquitetura: 4 },
      },
    ],
  },
  {
    id: 'meta',
    title: 'Daqui a alguns anos, qual meta parece mais “sua”?',
    options: [
      {
        label: 'Atuar como advogado(a) ou carreiras jurídicas estáveis',
        scores: { direito: 4 },
      },
      {
        label: 'Psicólogo(a), professor(a) ou coordenação pedagógica',
        scores: { psicologia_pedagogia: 4 },
      },
      {
        label: 'Cargo em gestão, RH, marketing, contabilidade ou negócio próprio',
        scores: { negocios: 4 },
      },
      {
        label: 'Médico(a), dentista ou especialização clínica',
        scores: { medicina_odonto: 4 },
      },
      {
        label: 'Médico(a) veterinário(a) ou técnico(a) de zootecnia/sanidade',
        scores: { veterinaria: 4 },
      },
      {
        label:
          'Enfermagem, farmácia, nutrição, fisioterapia, biomedicina ou educação física profissional',
        scores: { saude_tecnica: 4 },
      },
    ],
  },
]

/** Ordem aleatória (Fisher–Yates); não altera o array original. */
export function shuffleQuestions<T>(items: readonly T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function tallyScores(answers: ScoreMap[]): ScoreMap {
  const total: ScoreMap = {}
  for (const partial of answers) {
    for (const [key, value] of Object.entries(partial)) {
      const id = key as CourseProfileId
      total[id] = (total[id] ?? 0) + (value ?? 0)
    }
  }
  return total
}

export function pickCourseProfile(scores: ScoreMap): CourseProfileId {
  const entries = Object.entries(scores) as [CourseProfileId, number][]
  if (entries.length === 0) return 'negocios'
  entries.sort((a, b) => b[1] - a[1])
  return entries[0][0]
}
