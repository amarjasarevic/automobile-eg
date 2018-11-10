import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WatchableStore from './watchStore.js';
import PropType from 'prop-types';
import styled, { keyframes } from 'react-emotion';

const FadeInUp = keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
`;

const Toasts = styled('div')`
  position: fixed;
  overflow: hidden;
  z-index: 999999999999;
  max-height: calc(100vh - 10px);
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Toast = styled('div')`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5px 15px;
  white-space: pre-line;
  min-height: 50px;
  margin-bottom: 15px;
  border-radius: 2px;
  animation-name: ${FadeInUp};
  animation-duration: 1s;
  animation-fill-mode: both;
`;

const BackgroundColor = {
  success: {
    backgroundColor: "rgba(46, 204, 113, 1)"
  },
  error: {
    backgroundColor: "rgba(231, 76, 60, 1)"
  }
};

const LightBackgroundColor = {
  success: {
    color: '#468847',
    backgroundColor: '#dff0d8',
    borderColor: '#d6e9c6',
  },
  error: {
    color: '#b94a48',
    backgroundColor: '#f2dede',
    borderColor: '#eed3d7',
  }
}

const Store = () => {
  const store = WatchableStore({
    action: '',
    message: ''
  });

  ['success', 'error'].forEach(status => {
    store[status] = (message, timer, classNames) => {
      store.data = {
        status,
        message,
        timer,
        classNames
      };
    };
  });

  return store;
};

class Container extends Component {
  static POSITION = {
    TOP_RIGHT: "top_right",
    BOTTOM_RIGHT: "bottom_right",
    TOP_CENTER: "top_center",
    BOTTOM_CENTER: "bottom_center",
  };

  constructor(props) {
    super(props);

    this.state = {
      styles: {},
      toasts: []
    };
  }

  componentDidMount() {
    this.storeSubscription = this.props.store.watch(data => {
      let toast = Object.assign({}, { ...data, id: Math.random() });
      this.setState({ toasts: [toast].concat(this.state.toasts) });
      setTimeout(() => {
        this.setState({ toasts: this.state.toasts.filter(t => t.id !== toast.id) });
      }, data.timer || 3000);
    });

    let styles = {};
    switch (this.props.position) {
      case Container.POSITION.TOP_RIGHT:
        styles.top = 10;
        styles.right = 10;
        break;
      case Container.POSITION.TOP_CENTER:
        styles.top = 10;
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
        break;
      case Container.POSITION.BOTTOM_RIGHT:
        styles.bottom = 10;
        styles.right = 10;
        break;
      case Container.POSITION.BOTTOM_CENTER:
        styles.bottom = 10;
        styles.left = '50%';
        styles.transform = 'translateX(-50%)';
        break;
      default:
        styles.bottom = 10;
        styles.right = 10;
        break;
    }
    this.setState({ styles: styles });
  }

  componentWillUnmount() {
    this.props.store.unwatch(this.storeSubscription);
  }

  _renderContainer() {
    const style = this.props.lightBackground ? LightBackgroundColor : BackgroundColor;
    return (
      <Toasts style={this.state.styles} className={"toasts-container " + (this.props.className || '')}>
        {
          this.state.toasts.map(toast => {
            return (
              <Toast
                key={toast.id}
                className={'toast toast-' + toast.status + ' ' + toast.classNames}
                style={style[toast.status]}
              >
                {toast.message}
              </Toast>
            );
          })
        }
      </Toasts>
    );
  }

  render() {
    if (typeof window !== 'undefined') {
      return ReactDOM.createPortal(
        this._renderContainer(),
        document.body
      );
    }

    return null
  }
}

Container.propTypes = {
  store: PropType.object.isRequired,
  position: PropType.string
};

export const ToastStore = Store();
export const ToastContainer = Container;
