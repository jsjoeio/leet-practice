---
to: src/<%= h.changeCase.camel(name) %>/index.ts
---
<% problem = h.changeCase.camel(name) -%>

export function <%= problem %>() {
  // Write the function body here
}