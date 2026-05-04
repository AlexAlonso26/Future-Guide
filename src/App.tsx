import { useMemo, useState } from 'react'
import {
  COURSE_PROFILES,
  pickCourseProfile,
  QUESTIONS,
  shuffleQuestions,
  tallyScores,
  type CourseProfileId,
  type QuizQuestion,
  type ScoreMap,
} from './data/quiz'
import './App.css'

function App() {
  const [step, setStep] = useState(-1)
  const [selections, setSelections] = useState<(number | null)[]>(
    () => QUESTIONS.map(() => null),
  )
  const [orderedQuestions, setOrderedQuestions] = useState<QuizQuestion[]>([])

  const isIntro = step === -1
  const isResult = step >= QUESTIONS.length
  const currentQuestion =
    !isIntro && !isResult && orderedQuestions.length > 0
      ? orderedQuestions[step]
      : null

  const result = useMemo(() => {
    if (!isResult) return null
    const scoreMaps: ScoreMap[] = selections.map((idx, q) => {
      if (idx === null) return {}
      const qDef = orderedQuestions[q]
      if (!qDef) return {}
      return qDef.options[idx].scores
    })
    const totals = tallyScores(scoreMaps)
    const winner = pickCourseProfile(totals)
    const ranked = (Object.entries(totals) as [CourseProfileId, number][])
      .filter(([, v]) => v > 0)
      .sort((a, b) => b[1] - a[1])
    return { totals, winner, ranked }
  }, [isResult, selections, orderedQuestions])

  function startQuiz() {
    setOrderedQuestions(shuffleQuestions(QUESTIONS))
    setSelections(QUESTIONS.map(() => null))
    setStep(0)
  }

  function selectOption(optionIndex: number) {
    setSelections((prev) => {
      const next = [...prev]
      next[step] = optionIndex
      return next
    })
  }

  function goNext() {
    if (step < QUESTIONS.length - 1) setStep((s) => s + 1)
    else setStep(QUESTIONS.length)
  }

  function goBack() {
    if (step > 0) setStep((s) => s - 1)
    else if (step === 0) setStep(-1)
  }

  function restart() {
    setSelections(QUESTIONS.map(() => null))
    setOrderedQuestions([])
    setStep(-1)
  }

  const canAdvance = step >= 0 && selections[step] !== null

  const progressPct = isIntro
    ? 0
    : isResult
      ? 100
      : ((step + 1) / QUESTIONS.length) * 100

  const stepLabel = isIntro
    ? 'Antes de começar'
    : isResult
      ? 'Resultado'
      : `Pergunta ${step + 1} de ${QUESTIONS.length}`

  return (
    <div className="page-shell">
      <div className="side-panel side-panel--left" aria-hidden />
      <div className="app">
      <header className="header">
        <h1>Future Guide</h1>
        <p className="lede">
          Cinco perguntas objetivas sobre cursos como Direito, Psicologia,
          Administração, Medicina, Enfermagem, Educação Física, Farmácia,
          Pedagogia, Nutrição, Fisioterapia, RH, Medicina Veterinária, Biomedicina,
          Marketing, Odontologia, Moda, Letras, Arquitetura e Urbanismo, ADS,
          Ciências Biológicas, Engenharia de Computação, Engenharias (Civil,
          Alimentos, Produção, Automação, Mecânica, Química), Ciências Contábeis e
          Ciência da Computação. O resultado aponta o grupo que mais combina com
          você — confira o curso no e-MEC.
        </p>
      </header>

      <div className="main-stage">
        <div className="flow-chrome">
          <div
            className="progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progressPct)}
            aria-label="Progresso do questionário"
          >
            <div
              className="progress-bar"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="step-label">{stepLabel}</p>
        </div>

      {isIntro && (
        <section className="card intro-card" aria-labelledby="intro-title">
          <div className="card-scroll">
            <h2 id="intro-title">Como funciona</h2>
            <ul className="bullet-list">
              <li>Cinco perguntas com alternativas ligadas às profissões e cursos do guia.</li>
              <li>
                As perguntas são embaralhadas a cada início. Você escolhe a opção que
                mais combina; o app soma pontos por área (Direito, Psicologia/Pedagogia,
                Negócios, Medicina/Odonto, Veterinária, Saúde técnica, Biologia, TI,
                Engenharias, Arquitetura, Letras/Moda).
              </li>
              <li>No resultado aparecem os cursos daquele grupo e uma nota sobre empregabilidade.</li>
              <li>
                <strong>
                Este projeto auxilia na tomada de decisões com base nas suas escolhas, gerando direcionamentos personalizados.                </strong>
              </li>
            </ul>
          </div>
          <div className="intro-actions">
            <button type="button" className="btn primary" onClick={startQuiz}>
              Começar Questionário
            </button>
          </div>
        </section>
      )}

      {currentQuestion && (
        <section className="card quiz" aria-live="polite">
          <div className="card-scroll">
            <h2>{currentQuestion.title}</h2>
            <div className="options" role="radiogroup" aria-label={currentQuestion.title}>
              {currentQuestion.options.map((opt, idx) => {
                const selected = selections[step] === idx
                return (
                  <button
                    key={opt.label}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    className={`option ${selected ? 'selected' : ''}`}
                    onClick={() => selectOption(idx)}
                  >
                    <span className="option-marker" aria-hidden>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
          <div className="actions">
            <button type="button" className="btn ghost" onClick={goBack}>
              Voltar
            </button>
            <button
              type="button"
              className="btn primary"
              onClick={goNext}
              disabled={!canAdvance}
            >
              {step === orderedQuestions.length - 1 ? 'Ver resultado' : 'Próxima'}
            </button>
          </div>
        </section>
      )}

      {isResult && result && (
        <section className="card result" aria-live="polite">
          <div className="card-scroll">
            <h2>Área de curso sugerida</h2>
            <div className="highlight">
              <p className="result-label">Resultado principal</p>
              <h3>{COURSE_PROFILES[result.winner].name}</h3>
              <p>{COURSE_PROFILES[result.winner].summary}</p>
              <p className="examples">
                <strong>Cursos que encaixam aqui:</strong> {COURSE_PROFILES[result.winner].examples}
              </p>
              <p className="employability">
                <strong>Empregabilidade:</strong> {COURSE_PROFILES[result.winner].employability}
              </p>
            </div>

            {result.ranked.length > 1 && (
              <div className="ranking">
                <h3>Outras áreas próximas do seu perfil</h3>
                <ol>
                  {result.ranked.slice(0, 4).map(([id, points]) => (
                    <li key={id}>
                      <span>{COURSE_PROFILES[id].name}</span>
                      <span className="points">{points} pts</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <p className="disclaimer">
              Isto não substitui orientação de carreira nem visita à faculdade. Confira
              notas de corte, duração, estágio e se o nome do curso no diploma é o que
              você espera antes de decidir.
            </p>
          </div>
          <div className="result-actions">
            <button type="button" className="btn primary" onClick={restart}>
              Refazer questionário
            </button>
          </div>
        </section>
      )}
      </div>

      <footer className="footer">
        <small>Future Guide · React · Vite · TypeScript</small>
      </footer>
      </div>
      <div className="side-panel side-panel--right" aria-hidden />
    </div>
  )
}

export default App
