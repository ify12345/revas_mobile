export interface SignupOneInput {
  name: string
  business_name?: string
  email: string
  phone: string
  password:string
}

export interface SignupTwoInput {
  firstname: string,
  lastname: string,
  companyemail: string,
  companyname: string,
  password: string,
  phonenumber: string,
  role: string
}

export interface ResetPasswordInput {
  reset_code: string
  new_password: string
  confirm_password: string
}

export interface ChangePasswordInput {
  old_password: string
  new_password: string
  confirm_password: string
}

export interface UpdateAddressInput {
  address_one?: string
  address_two?: string
  city?: string
  post_code?: string
}