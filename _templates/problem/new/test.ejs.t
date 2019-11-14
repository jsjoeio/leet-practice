---
to: src/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.test.ts
---
<% problem = h.changeCase.camel(name) -%>
import { <%= problem %> } from '.';

describe('<%= problem %> function', () => {
  it('should do something', () => {
    // Add test here
    // const input = 4;
    // const expected = 2;
    // const actual = mySqrt(input);
    // expect(actual).toBe(expected);
  });
});