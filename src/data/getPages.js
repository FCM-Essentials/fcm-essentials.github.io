function importAll(r) {
  return r.keys().map(r).map(mod => mod.default);
}

const modules = importAll(require.context('./pages', false, /\.js$/));

export default modules;