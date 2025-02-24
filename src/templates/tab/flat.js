export default `{% ctx.component.components.forEach(function(tab, index) { %}
  <div class="mb-2 card border">
    <div class="card-header bg-default">
      <h4 class="mb-0 card-title">{{ ctx.t(tab.label, { _userInput: true }) }}</h4>
    </div>
    <div
      class="card-body"
      ref="{{ctx.tabKey}}"
    >
      {{ ctx.tabComponents[index] }}
    </div>
  </div>
{% }) %}`