export interface ProcessStep {
  no: string;
  title: string;
  text: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    no: '01',
    title: 'Discover',
    text: 'We learn your business, market, and goals before touching a tool.',
  },
  {
    no: '02',
    title: 'Strategize',
    text: 'A plan that sequences design, technology, and budget sensibly.',
  },
  {
    no: '03',
    title: 'Design',
    text: 'Imaginative but disciplined concepts, refined with your feedback.',
  },
  {
    no: '04',
    title: 'Develop',
    text: 'Clean, scalable builds with quality gates throughout.',
  },
  {
    no: '05',
    title: 'Launch',
    text: 'Tested end-to-end, deployed carefully, measured from day one.',
  },
  {
    no: '06',
    title: 'Grow',
    text: 'Iterate, optimize, expand — the thread keeps running.',
  },
];
