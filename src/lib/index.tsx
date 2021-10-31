export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env['REACT_APP_PROD_BACKEND_API']
    : process.env['REACT_APP_DEV_BACKEND_API'];
