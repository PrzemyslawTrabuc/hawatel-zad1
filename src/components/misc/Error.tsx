function Error({ errorData }: any) {
  const handleError = () => {
    let error;
    try {
      error = errorData.map((err: any) => {
        return { field: err.field, message: err.message };
      });
      return error;
    } catch (err) {
      error = errorData;
      return error;
    }
  };

  const renderError = () => {
    const error = handleError();
    if (error.message) {
      return <div>{error.message}</div>;
    } else {
      return (
        <div>
          {error.map((err: any) => {
            return (
              <div key={err.field}>
                {err.field}: {err.message}
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <div className="text-red-500 mb-3">{renderError()}</div>;
}

export default Error;
