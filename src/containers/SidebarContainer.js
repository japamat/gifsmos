import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';
import { requestFrame, togglePane, reset, getBurstSliders } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const { images, settings, ui } = state;
  const { expandedPane } = ui;
  const { frameIDs } = images;
  const { width, height, oversample } = settings.image;
  const { strategy } = settings;

  return {
    numFrames: frameIDs.length,
    expandedPane,
    width,
    height,
    oversample,
    strategy
  };
};

const SidebarContainer = connect(
  mapStateToProps,
  {
    requestFrame,
    togglePane,
    reset,
    getBurstSliders
  }
)(Sidebar);

export default SidebarContainer;
