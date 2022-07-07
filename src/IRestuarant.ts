export interface IRestuarant {
  href: string;
  ingredients: string;
  thumbnail: string;
  title: string;
}

export interface IFormContainer{
  children: React.ReactNode
}

export interface UserState {
  loading?: boolean,
  error?: string,
  userInfo: {firstName?:string, lastName?:string}
}

export interface Action {
  type: string,
  payload?:string
}
