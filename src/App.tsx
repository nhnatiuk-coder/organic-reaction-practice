import { useMemo, useState } from 'react'
import { questions } from './data/questions'
import type { Attempt } from './types'
import ReactionScheme from './ReactionScheme'

type Screen = 'welcome' | 'practice' | 'results'

const topicColor: Record<string, string> = { SN1: 'blue', SN2: 'teal', E1: 'gold', E2: 'coral' }

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  const [current, setCurrent] = useState(0)
  const [attempts, setAttempts] = useState<Attempt[]>([])
  const [selected, setSelected] = useState<number | null>(null)

  const question = questions[current]
  const answered = selected !== null
  const correct = selected === question?.correctIndex
  const score = useMemo(() => attempts.filter(a => questions.find(q => q.id === a.questionId)?.correctIndex === a.selectedIndex).length, [attempts])

  const start = () => { setScreen('practice'); setCurrent(0); setAttempts([]); setSelected(null) }
  const choose = (index: number) => {
    if (answered) return
    setSelected(index)
    setAttempts(prev => [...prev, { questionId: question.id, selectedIndex: index }])
  }
  const next = () => {
    if (current === questions.length - 1) setScreen('results')
    else { setCurrent(value => value + 1); setSelected(null) }
  }

  if (screen === 'welcome') return <main className="page"><section className="card welcome-card">
    <p className="eyebrow">Organic chemistry practice</p>
    <h1>Master substitution and elimination.</h1>
    <p className="lead">Work through ten focused questions on SN1, SN2, E1, and E2. You’ll receive an explanation immediately after each answer.</p>
    <div className="topic-row">{['SN1', 'SN2', 'E1', 'E2'].map(topic => <span className={`tag ${topicColor[topic]}`} key={topic}>{topic}</span>)}</div>
    <button className="primary" onClick={start}>Start Practice <span aria-hidden="true">→</span></button>
    <p className="small-note">No account needed. Your results stay in this browser session.</p>
  </section></main>

  if (screen === 'results') {
    const missed = attempts.filter(a => questions.find(q => q.id === a.questionId)?.correctIndex !== a.selectedIndex).map(a => questions.find(q => q.id === a.questionId)!)
    const topicStats = ['SN1', 'SN2', 'E1', 'E2'].map(topic => {
      const related = questions.filter(q => q.topic === topic)
      const wrong = related.filter(q => attempts.some(a => a.questionId === q.id && a.selectedIndex !== q.correctIndex)).length
      return { topic, wrong, total: related.length }
    }).filter(item => item.wrong > 0)
    return <main className="page"><section className="card results-card">
      <p className="eyebrow">Practice complete</p>
      <h1>{score} <span>out of {questions.length}</span></h1>
      <p className="lead">{score === questions.length ? 'Excellent work—you selected the correct mechanism or principle every time.' : score >= 7 ? 'Strong work. Review the missed explanations to sharpen your mechanism decisions.' : 'A useful first pass. Use the feedback below to target your next review.'}</p>
      {topicStats.length > 0 && <section className="review"><h2>Topic areas to review</h2><div className="review-grid">{topicStats.map(item => <div className="review-item" key={item.topic}><span className={`tag ${topicColor[item.topic]}`}>{item.topic}</span><span>{item.wrong} missed of {item.total}</span></div>)}</div></section>}
      {missed.length > 0 && <section className="missed"><h2>Questions missed</h2>{missed.map(q => <article key={q.id}><div><span className={`tag ${topicColor[q.topic]}`}>{q.topic}</span><strong>{q.prompt}</strong></div><p><b>Correct answer:</b> {q.choices[q.correctIndex]}</p><p>{q.explanation}</p></article>)}</section>}
      <button className="primary" onClick={start}>Try Again <span aria-hidden="true">↻</span></button>
    </section></main>
  }

  return <main className="page"><section className="card practice-card">
    <header className="practice-header"><div><p className="eyebrow">Question {current + 1} of {questions.length}</p><div className="progress" aria-label={`${current + 1} of ${questions.length} questions`}><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div></div><span className={`tag ${topicColor[question.topic]}`}>{question.topic}</span></header>
    <h1 className="question">{question.prompt}</h1>
    {question.reactionScheme && <ReactionScheme scheme={question.reactionScheme} />}
    <div className="choices" role="radiogroup" aria-label="Answer choices">{question.choices.map((choice, index) => {
      const state = answered ? (index === question.correctIndex ? 'correct' : index === selected ? 'incorrect' : '') : ''
      return <button className={`choice ${state}`} role="radio" aria-checked={selected === index} disabled={answered} onClick={() => choose(index)} key={choice}><span className="letter">{String.fromCharCode(65 + index)}</span><span>{choice}</span>{answered && index === question.correctIndex && <span className="answer-mark">✓</span>}{answered && index === selected && index !== question.correctIndex && <span className="answer-mark">×</span>}</button>
    })}</div>
    {answered && <section className={`feedback ${correct ? 'feedback-correct' : 'feedback-incorrect'}`} aria-live="polite"><h2>{correct ? 'Correct—nice work.' : 'Not quite.'}</h2>{!correct && <p><b>Correct answer:</b> {question.choices[question.correctIndex]}</p>}<p>{question.explanation}</p><button className="primary" onClick={next}>{current === questions.length - 1 ? 'See Results' : 'Next Question'} <span aria-hidden="true">→</span></button></section>}
  </section></main>
}
