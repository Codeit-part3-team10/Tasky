export default function EmailInput() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-black-333236">
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        placeholder="이메일을 입력해 주세요."
        className=" block w-full border border-gray-D9D9D9 rounded-lg px-3 py-3 placeholder:text-gray-9FA6B2 focus:  focus:outline-violet-5534DA"
      />
    </div>
  );
}
