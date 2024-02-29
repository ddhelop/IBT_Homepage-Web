import { ButtonProps } from '@/lib/types'

export default function SubmitButton({ text, isForSubmit, isActive, func = null, isLoading }: ButtonProps) {
  return (
    <button
      type={isForSubmit ? 'submit' : 'button'}
      className={`p-4 w-32 rounded-lg transition font-medium
            ${isActive ? 'bg-[#04BF7B] text-white shadow-md' : 'bg-gray-200 shadow-none text-gray-400'}`}
      disabled={!isActive}
      onClick={isForSubmit ? null : func}
    >
      {isLoading ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <h1>{text}</h1>
      )}
    </button>
  )
}
