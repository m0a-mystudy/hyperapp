import { h, app, ActionsType, View } from "./hyperapp";

namespace Counter {
  export interface State {
    count: number;
  }

  export interface Actions {
    down(): State;
    up(value: number): State;
  }

  export const state: State = {
    count: 0
  };

  export const actions: ActionsType<State, Actions> = {
    down: () => state => ({ count: state.count - 1 }),
    up: () => state => ({
      count: state.count + 1
    })
  };
}

const view: View<Counter.State, Counter.Actions> = (state, actions) => (
  <main>
    <div style={{ width: "200px", textAlign: "center" }}>
      <strong>{state.count}</strong>
    </div>
    <button onclick={actions.down} style={{ width: "100px", height: "50px" }}>
      -
    </button>
    <button onclick={actions.up} style={{ width: "100px", height: "50px" }}>
      +
    </button>
  </main>
);

app<Counter.State, Counter.Actions>(
  Counter.state,
  Counter.actions,
  view,
  document.getElementById("hyperapp")
);
