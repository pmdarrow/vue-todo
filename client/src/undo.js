const deepClone = obj => JSON.parse(JSON.stringify(obj));

class UndoHistory {
  init(store) {
    this.store = store;
    this.history = [];
    this.push(store.state);
  }
  get initialized() {
    return Boolean(this.store);
  }
  push(state) {
    this.history.push(deepClone(state));
  }
  undo() {
    if (this.history.length > 1) {
      this.history.pop();
      const newState = deepClone(this.history[this.history.length - 1]);
      this.store.replaceState(newState);
    }
  }
}

const undoHistory = new UndoHistory();

const undoPlugin = (store) => {
  store.subscribe((mutation, state) => {
    if (undoHistory.initialized) {
      undoHistory.push(state);
    }
  });
};

export { undoHistory, undoPlugin };
