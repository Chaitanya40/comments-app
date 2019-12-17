import axios from 'axios';

const request = (options, onSuccess, onError) => {
  const { headers, ...restOptions } = options;

  let axiosInstance ={
    headers: {'source': source, 'Content-Type': 'application/json;charset=UTF-8', 'accept': 'application/json', ...headers }
  }

  const client = axios.create(axiosInstance)

  options = {
    ...restOptions
  }

  const requestPromise = client(options)
  if(onSuccess) {
    /*
      returns promise itself instead of resolving here
      if onsuccess is not passed as argument.
    */
    return requestPromise
      .then(onSuccess)
      .catch((error, ...rest) => {
        onError
      })
  }
  return requestPromise
}

export default request