import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function fail(message) {
  console.error(`Lead tracking guardrail failed: ${message}`);
  process.exit(1);
}

const submitHandlerStart = html.indexOf("form.addEventListener('submit', () => {");
const kitCompleteHandlerStart = html.indexOf("form.addEventListener('ckjs:submission:complete'");

if (kitCompleteHandlerStart === -1) {
  fail('missing Kit ckjs:submission:complete handler');
}

if (submitHandlerStart === -1) {
  fail('missing configured form submit handler');
}

if (submitHandlerStart > kitCompleteHandlerStart) {
  fail('Kit completion handler should be separate from and after the raw submit handler');
}

const rawSubmitHandler = html.slice(submitHandlerStart, kitCompleteHandlerStart);

if (rawSubmitHandler.includes('trackSixScripturesLead(')) {
  fail('trackSixScripturesLead is being called during raw submit');
}

if (rawSubmitHandler.includes("fbq('track', 'Lead'") || rawSubmitHandler.includes('fbq("track", "Lead"')) {
  fail('Meta Lead is being fired during raw submit');
}

const kitCompleteHandler = html.slice(kitCompleteHandlerStart);

if (!kitCompleteHandler.includes('trackSixScripturesLead(')) {
  fail('Kit completion handler does not fire trackSixScripturesLead');
}

console.log('Lead tracking guardrail passed: Meta Lead fires after Kit submission completion.');
