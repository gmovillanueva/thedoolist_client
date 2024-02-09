import InputField from '@components/InputField.jsx';

const SignIn = () => {
  return (
    <div className='my-16 flex size-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start'>
      {/* Sign in section */}
      <div className='mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]'>
        <h4 className='text-navy-700 mb-2.5 text-4xl font-bold'>Sign In</h4>
        {/* Email */}
        <InputField
          variant='auth'
          extra='mb-3'
          label='Email*'
          placeholder='mail@simmmple.com'
          id='email'
          type='text'
        />

        {/* Password */}
        <InputField
          variant='auth'
          extra='mb-3'
          label='Password*'
          placeholder='Min. 8 characters'
          id='password'
          type='password'
        />
        {/* Checkbox */}
        <div className='mb-4 flex items-center justify-between px-2'>
          <a
            className='text-brand-500 hover:text-brand-600 text-sm font-medium'
            href=' '
          >
            Forgot Password?
          </a>
        </div>
        <button className='linear bg-brand-500 hover:bg-brand-600 active:bg-brand-700 mt-2 w-full rounded-xl py-[12px] text-base font-medium text-white transition duration-200'>
          Sign In
        </button>
        <div className='mt-4'>
          <span className=' text-navy-700 text-sm font-medium'>
            Not registered yet?
          </span>
          <a
            href=' '
            className='text-brand-500 hover:text-brand-600 ml-1 text-sm font-medium'
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
