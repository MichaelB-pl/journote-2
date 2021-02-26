let vuetify = null;

export function bindHelpersWithVuetify(v) {
  vuetify = v;
}

export function getContainerHeightWithoutAppBar() {
  const { height } = vuetify.breakpoint;
  const { top, bottom } = vuetify.application;
  return height - top - bottom;
}

export function getToolbarHeight() {
  return vuetify.breakpoint.smAndDown ? 56 : 64;
}

export function getContentHeight(toolbarsCount = 0) {
  const containerHeight = getContainerHeightWithoutAppBar();

  if (!toolbarsCount) return containerHeight;

  const toolbarHeight = getToolbarHeight();
  return containerHeight - toolbarHeight * toolbarsCount;
}

export function isSingleView() {
  return vuetify.breakpoint.smAndDown;
}
