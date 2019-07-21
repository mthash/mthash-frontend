export default interface User {
  id?: number;
  created_at?: number;
  exp?: number;
  for_testing?: boolean;
  iat?: number;
  login?: string;
  sig?: string;
  status?: number;
  name: string;
}
