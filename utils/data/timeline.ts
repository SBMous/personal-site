import type { TimelineEvent } from './types'

export const events: TimelineEvent[] = [
  {
    title: 'Now',
    date: 'Now',
    content: 'You arrive here... What will that lead to?',
  },
  {
    title: 'Join Objective Function',
    date: '2024-10-01',
    content: 'The start of a new foray into systemically solving global challenges',
  },
  {
    title: 'Analyst @ Goldman Sachs',
    date: '2024-06-17',
    content:
      'After completing my apprenticeship, I take on a full time role building software for managing counterparty risk.',
  },
  {
    title: 'Graduated BSc DTS (Software Eng) @ QMUL',
    content:
      'I achieved a 1st Class Honours BSc in Digital & Technology Solutions (DTS) with a focus on Software Engineering.',
  },
  {
    title: 'Start of the Pnyx Project',
    date: '2023-5-01',
    content:
      'I start the Pnyx Project, a novel approach to decentralised democracy leveraging blockchain, zero-knowledge proofs and homomorphic encryption.',
  },
  {
    title: 'Rotate to Core Engineering @ Goldman Sachs',
    date: '2022-7-01',
    content:
      'As part of the apprenticeship I rotate into a role within the core engineering division. ' +
      'My responsibilities include building developer tooling and controls software including ' +
      'working on the internal Gitlab instance and building code distribution tools.',
  },
  {
    title: 'Join Goldman Sachs as an Apprentice',
    date: '2020-9-18',
    content:
      'I joined Goldman Sachs as a Software Engineering Apprentice working with the Prime Services Analytics ' +
      'team to deliver risk management analytics and big data processing. My role includes delivering UI and ' +
      'UX features written in React and Typescript, and building data ingest and processing infrastructure ' +
      'for new risk management datasets.',
  },
  {
    title: 'Graduate Exeter Maths School',
    date: '2020-6-01',
    content:
      'After two years I graduated with four A-Levels graded A*, A*, A, A as well as an AS Graded B.',
    // TODO: When switching to component approach map grades to subjects?
  },
  {
    title: 'GCHQ Research Project',
    date: '2019-2-01',
    content:
      'I participated in a research project in collaboration with GCHQ looking into crash-dump memory ' +
      'analysis techniques for exposing private keys within vulnerable cryptosystems.',
  },
  {
    title: 'Start Studies at Exeter Maths School',
    date: '2018-9-01',
    content:
      'I was selected amongst a highly competitive application process to be a student at Exeter Maths ' +
      'School, an alternative teaching-style college which filters for the most able mathematicians in ' +
      'the south west of England.',
  },
]
