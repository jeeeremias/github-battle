import React from 'react';

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
};

const Loading = () => (
    <div style={styles.container}>
        <p style={styles.container}>{this.state.text}</p>
    </div>
);

export default Loading;