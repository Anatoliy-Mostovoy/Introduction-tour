import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {};
  handleClickBtn = () => {
    return toast('Here we Go!');
  };

  render() {
    return (
      <>
        <h1>Introducing Tour</h1>
        <button type="button" onClick={this.handleClickBtn}>
          Push ME!
        </button>
        <ToastContainer />
      </>
    );
  }
}
