const getPropsFromNode = function(node) {
  const props = {
    container: node
  };

  if (node.getAttribute('data-config-url')) {
    props.url = node.getAttribute('data-config-url');
  }

  if (node.getAttribute('data-config-playback-speed')) {
    props.playbackSpeed = node.getAttribute('data-config-playback-speed');
  }

  if (node.getAttribute('data-config-filter')) {
    props.filter = node.getAttribute('data-config-filter');
  }

  if (node.getAttribute('data-config-filter-strength')) {
    props.filterStrength = node.getAttribute('data-config-filter-strength');
  }

  return props;
};

export default getPropsFromNode;
