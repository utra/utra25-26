import test from 'node:test';
import assert from 'node:assert/strict';
import { dateKey, torontoInput, torontoToISO, eventsOnDay, safeRegistrationURL } from '../src/lib/events.js';

test('Toronto input converts summer and winter offsets independently of browser timezone', () => {
  assert.equal(torontoToISO('2026-07-10T18:30'), '2026-07-10T22:30:00.000Z');
  assert.equal(torontoToISO('2026-12-10T18:30'), '2026-12-10T23:30:00.000Z');
  assert.equal(torontoInput('2026-12-10T23:30:00Z'), '2026-12-10T18:30');
  assert.equal(dateKey('2026-07-11T02:00:00Z'), '2026-07-10');
});
test('daylight saving gaps and repeated times are rejected', () => {
  assert.throws(() => torontoToISO('2026-03-08T02:30'), /daylight/);
  assert.throws(() => torontoToISO('2026-11-01T01:30'), /daylight/);
  assert.throws(() => torontoToISO('invalid'), /valid/);
});
test('multi-day events include occupied days but exclude a midnight end date', () => {
  const event = { starts_at: '2026-07-10T22:00:00Z', ends_at: '2026-07-12T04:00:00Z' };
  assert.deepEqual(eventsOnDay([event], '2026-07-09'), []);
  assert.deepEqual(eventsOnDay([event], '2026-07-10'), [event]);
  assert.deepEqual(eventsOnDay([event], '2026-07-11'), [event]);
  assert.deepEqual(eventsOnDay([event], '2026-07-12'), []);
});
test('registration links cannot execute script or use insecure protocols', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,test', 'http://example.com', '//example.com', 'bad']) assert.equal(safeRegistrationURL(value), null);
  assert.equal(safeRegistrationURL('https://example.com/register'), 'https://example.com/register');
});
