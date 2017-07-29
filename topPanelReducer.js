function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type]

    return handler ? handler(state, payload) : state
  }
}

const initialState = {
  topPanelOpen: false,
  topPanelComponent: null
}

export default createReducer(initialState, {
  SET_TOP_PANEL_COMPONENT: (state, payload) => ({
    ...state,
    topPanelComponent: payload.component
  }),
  OPEN_TOP_PANEL: state => ({ ...state, topPanelOpen: true }),
  CLOSE_TOP_PANEL: state => ({ ...state, topPanelOpen: false })
})
