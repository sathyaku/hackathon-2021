const handleSuccess = (response) => {
  return {
    data: response,
    success: true
  };
};

const handleFailure = (error) => {
  return {
    data: error,
    success: false
  };
};

const httpFetchService = async (url, type, reqBody) => {
  const options = {
    method: type,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (reqBody) {
    options.headers.body = JSON.stringify(reqBody);
  }
  const res = await fetch(url, options);
  let data;
  try {
    data = await res.json();
    data = handleSuccess(data);
  } catch (e) {
    data = handleFailure(e);
  }
  return data;
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export { handleSuccess, handleFailure, httpFetchService, fetcher };
