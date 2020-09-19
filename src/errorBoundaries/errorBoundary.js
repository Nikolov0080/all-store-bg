import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error)
    console.log(errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong reload the page and try again</h1>
          <Button onClick={()=>window.location.reload()}>Reload</Button>
        </div>

      );

    }

    return this.props.children;
  }
}

export default ErrorBoundary