import type { Question } from '../types'

// Instructor editing guide: duplicate an object below, then update its id, topic,
// prompt, choices, correctIndex (0 = first choice), and explanation.
export const questions: Question[] = [
  {
    id: 1, topic: 'SN2',
    prompt: 'Which substrate is expected to react fastest by an SN2 mechanism with iodide (I⁻) in acetone?',
    choices: ['tert-Butyl bromide', '2-Bromobutane', 'Bromoethane', 'Bromobenzene'],
    correctIndex: 2,
    explanation: 'SN2 reactions require backside attack and are fastest at unhindered primary carbons. Bromoethane is primary; secondary and especially tertiary halides are sterically hindered, and aryl halides do not undergo ordinary SN2 substitution.',
    reactionScheme: { kind: 'bromoethane-iodide', conditions: 'acetone' }
  },
  {
    id: 2, topic: 'SN1',
    prompt: 'What is the rate law for solvolysis of tert-butyl chloride in water by an SN1 pathway?',
    choices: ['Rate = k[tert-butyl chloride][H₂O]', 'Rate = k[tert-butyl chloride]', 'Rate = k[H₂O]', 'Rate = k[tert-butyl chloride]²'],
    correctIndex: 1,
    explanation: 'The slow, rate-determining step of SN1 is ionization of the alkyl halide to a carbocation. Water attacks only after that step, so its concentration does not appear in the rate law.',
    reactionScheme: { kind: 'tertbutyl-water', conditions: 'room temperature' }
  },
  {
    id: 3, topic: 'E2',
    prompt: 'Which reagent most strongly favors E2 elimination over substitution with 2-bromobutane?',
    choices: ['Sodium ethoxide (NaOEt)', 'Potassium tert-butoxide (KOtBu)', 'Water', 'Methanol'],
    correctIndex: 1,
    explanation: 'tert-Butoxide is a strong, bulky base. It can remove a β-hydrogen efficiently but is hindered from nucleophilic attack, so it strongly favors E2 over SN2 with a secondary halide.',
    reactionScheme: { kind: 'secbutyl-bulky-base', conditions: 'heat' }
  },
  {
    id: 4, topic: 'E1',
    prompt: 'Under heated aqueous ethanol conditions, which substrate is most likely to undergo E1 elimination?',
    choices: ['1-Bromopropane', '2-Bromopropane', 'tert-Butyl bromide', 'Vinyl bromide'],
    correctIndex: 2,
    explanation: 'E1 proceeds through a carbocation, so a tertiary substrate is best able to ionize. Heat also favors elimination. Primary carbocations are too unstable, while vinyl bromide does not form an ordinary carbocation under these conditions.',
    reactionScheme: { kind: 'tertbutyl-heat', conditions: 'EtOH, Δ' }
  },
  {
    id: 5, topic: 'SN2',
    prompt: 'An SN2 reaction at a chiral carbon produces which stereochemical result?',
    choices: ['Racemization', 'Retention of configuration', 'Inversion of configuration', 'No predictable stereochemical change'],
    correctIndex: 2,
    explanation: 'Backside attack is required in SN2. The nucleophile approaches opposite the leaving group, producing Walden inversion at the stereocenter.'
  },
  {
    id: 6, topic: 'SN1',
    prompt: 'Why do polar protic solvents often favor SN1 reactions?',
    choices: ['They make nucleophiles stronger by removing solvation.', 'They stabilize ions, including the carbocation and leaving group.', 'They prevent formation of carbocations.', 'They force a backside attack.'],
    correctIndex: 1,
    explanation: 'Polar protic solvents stabilize charged species through solvation. That lowers the energy required for the ionization step that forms the carbocation and leaving group in SN1.'
  },
  {
    id: 7, topic: 'E2',
    prompt: 'For a typical acyclic E2 reaction, what geometric relationship is preferred between the leaving group and the β-hydrogen removed?',
    choices: ['Syn-coplanar', 'Anti-periplanar', 'Perpendicular', 'No relationship is needed'],
    correctIndex: 1,
    explanation: 'The anti-periplanar arrangement aligns the breaking C–H and C–leaving group bonds properly for the one-step E2 transition state. In cyclohexanes, this corresponds to a trans-diaxial arrangement.'
  },
  {
    id: 8, topic: 'E1',
    prompt: 'A substrate rearranges by a hydride shift before forming an alkene. Which mechanism is most consistent with this observation?',
    choices: ['SN2', 'E2', 'E1', 'A concerted substitution'],
    correctIndex: 2,
    explanation: 'E1 forms a discrete carbocation intermediate, which can rearrange by hydride or alkyl shifts. E2 and SN2 are concerted mechanisms, so they do not allow carbocation rearrangements.'
  },
  {
    id: 9, topic: 'SN2',
    prompt: 'Which solvent is generally best for an SN2 reaction using sodium cyanide (NaCN)?',
    choices: ['Water', 'Methanol', 'Dimethyl sulfoxide (DMSO)', 'Acetic acid'],
    correctIndex: 2,
    explanation: 'DMSO is polar aprotic: it stabilizes the cation but does not strongly hydrogen-bond to cyanide. The nucleophile remains relatively reactive, which favors SN2.'
  },
  {
    id: 10, topic: 'E2',
    prompt: 'When 2-bromobutane reacts with sodium ethoxide in ethanol under heating, the major mechanism is most likely:',
    choices: ['SN1', 'SN2', 'E1', 'E2'],
    correctIndex: 3,
    explanation: 'A secondary alkyl halide with a strong base under heat commonly reacts by E2. The strong base can remove a β-hydrogen as the bromide leaves in one concerted step.',
    reactionScheme: { kind: 'secbutyl-ethoxide', conditions: 'EtOH, Δ' }
  }
]
