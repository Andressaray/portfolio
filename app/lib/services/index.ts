const connect = async (
  data: any = [],
  method: 'POST' = 'POST',
  path: string = ''
) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('x-portfolio', SECRET_KEY ?? '');
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: JSON.stringify(data)
  });
  return await response.json();
};
export default connect;
