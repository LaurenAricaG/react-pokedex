import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.logError(error, errorInfo);

    this.setState({
      error,
      errorInfo,
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  logError = (error, errorInfo) => {
    if (import.meta.env.DEV) {
      console.group("🚨 Error Boundary");
      console.error("Error:", error);
      console.error("Component Stack:", errorInfo.componentStack);
      console.groupEnd();
    }
  };

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { fallback, level = "page", children } = this.props;

    if (hasError) {
      if (fallback) {
        const FallbackComponent = fallback;
        return (
          <FallbackComponent
            error={error}
            errorInfo={errorInfo}
            resetError={this.resetError}
          />
        );
      }

      return level === "component" ? (
        <ComponentErrorFallback
          error={error}
          errorInfo={errorInfo}
          resetError={this.resetError}
        />
      ) : (
        <PageErrorFallback
          error={error}
          errorInfo={errorInfo}
          resetError={this.resetError}
        />
      );
    }

    return children;
  }
}

// --------------------
// Page fallback
// --------------------
function PageErrorFallback({ error, resetError }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>

          <h1 className="text-lg font-semibold text-gray-900 mb-2">
            Oops! Algo salió mal
          </h1>

          <p className="text-sm text-gray-600 mb-6">
            Ha ocurrido un error inesperado.
          </p>

          {import.meta.env.DEV && error && (
            <pre className="text-xs text-red-600 bg-gray-50 p-3 rounded mb-4 text-left">
              {error.toString()}
            </pre>
          )}

          <div className="flex gap-3">
            <button
              onClick={resetError}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Intentar de nuevo
            </button>

            <button
              onClick={() => window.location.reload()}
              className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
            >
              Recargar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------
// Component fallback
// --------------------
function ComponentErrorFallback({ error, resetError }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
      <h3 className="text-sm font-medium text-red-800">Error en componente</h3>

      {import.meta.env.DEV && error && (
        <pre className="text-xs text-red-600 mt-2">{error.toString()}</pre>
      )}

      <button
        onClick={resetError}
        className="mt-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded hover:bg-red-200"
      >
        Reintentar
      </button>
    </div>
  );
}

export default ErrorBoundary;
