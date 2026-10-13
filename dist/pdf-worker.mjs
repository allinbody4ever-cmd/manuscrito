import './compat.mjs';
const pdf=await import('./pdf.worker.min.mjs');
export const WorkerMessageHandler=pdf.WorkerMessageHandler;
